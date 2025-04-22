#!/usr/bin/env tsx

import {readdirSync, lstatSync, readFileSync, existsSync, mkdirSync, cpSync} from 'fs';
import {join, extname, dirname} from 'path';
import {Option, program} from '@commander-js/extra-typings';
import {JsonParser} from '@croct/json5-parser';
import {JsonValue} from '@croct/json';
import Ajv, {type JSONSchemaType, type ValidateFunction} from 'ajv/dist/2019';
import addFormats from 'ajv-formats';
import Table from 'cli-table3';
import {Client as TypesenseClient} from 'typesense';
import chalk from 'chalk';

const SCHEMA_URL = 'https://schema.croct.com/json/next/catalog-template.json';
const BASE_URL = 'https://github.com/croct-tech/templates/blob/master/';
const CDN_URL = 'https://cdn.croct.io/assets/templates';
const ASSET_PATH = 'assets';

const categoryMap = {
    'boilerplate/starter': 'Starters',
    'boilerplate/utility': 'Utilities',
    'framework/nextjs': 'Next.js',
    'framework/react': 'React',
    'interface/code': 'Code',
    'interface/feedback': 'Feedback',
    'interface/hero': 'Hero',
    'interface/marketing': 'Marketing',
    'interface/media': 'Media',
    'interface/menu': 'Menu',
    'interface/motion': 'Motion',
    'interface/page': 'Page',
    'interface/section': 'Section',
    'interface/social-proof': 'Social proof',
    'interface/visualization': 'Visualization',
    'language/javascript': 'JavaScript',
    'language/typescript': 'TypeScript',
    'language/html': 'HTML',
    'library/framer-motion': 'Framer Motion',
    'library/magic-ui': 'Magic UI',
    'library/shadcn-ui': 'Shadcn UI',
    'library/shiki': 'Shiki',
    'library/tailwind-css': 'Tailwind CSS',
    'use-case/ecommerce': 'E-commerce',
    'use-case/experiment': 'Experiment',
    'use-case/saas': 'SaaS',
};

const technologyCategories = ['library', 'language', 'framework'];

type TemplateDocumentOptions = {
    name: string,
    type: 'string' | 'boolean' | 'number' | 'object' | 'array' | 'reference',
    description: string,
    default: string,
    required: boolean,
};

type TemplateDocumentCategory = {
    id: string,
    name: string,
    iconUrl?: string,
};

type TemplateDocument = {
    id: string,
    title: string,
    description: string,
    documentation: string,
    demoUrl?: string,
    deployUrl?: string,
    coverImageUrl: string,
    coverVideoUrl?: string,
    installationUrl: string,
    sourceUrl: string,
    categories: TemplateDocumentCategory[],
    verified?: boolean,
    relatedTemplates: string[],
    options: TemplateDocumentOptions[],
    author: {
        name: string,
        avatarUrl: string,
        websiteUrl: string,
    },
    popularity?: number,
    publishTime?: number,
};

type TemplateCatalog = {
    categories: string[],
    templates: Record<string, TemplateFile>,
    violations: Violation[],
};

type TemplateUpdate = {
    index: TemplateDocument[],
    covers: Record<string, string>,
    assets: Record<string, string>,
    removedTemplates: string[],
    summary: {
        indexed: number,
        additions: number,
        removals: number,
        total: number,
    },
};

type Violation = {
    path: string,
    description: string,
    details?: string[],
};

type TemplateMetadata = {
    id: string,
    verified?: boolean,
    documentationUrl: string,
    sourceUrl: string,
    demoUrl?: string,
    deployUrl?: string,
    coverImageUrl: string,
    coverVideoUrl?: string,
    installationUrl: string,
    categories: string[],
    relatedTemplates?: string[],
    author: {
        name: string,
        avatarUrl: string,
        websiteUrl: string,
    },
};

type OptionTypes = {
    string: {
        choices?: string[],
    },
    boolean: Record<never, never>,
    number: Record<never, never>,
    array: Record<never, never>,
    object: Record<never, never>,
    reference: Record<never, never>,
};

type OptionDefinition<T extends keyof OptionTypes = keyof OptionTypes> = {
    [K in T]: OptionTypes[K] & {
        type: K,
        default?: JsonValue,
        description: string,
        required?: boolean,
    }
}[T];

type Template = {
    title: string,
    description: string,
    metadata: TemplateMetadata,
    options: Record<string, OptionDefinition>,
    actions: Array<Record<string, any>>,
};

type TemplateFile = Template & {
    path: string,
};

type PropertyAccessor = {
    path: string,
    label: string,
    value?: string,
    set: (value: string) => void,
};

type UpdateOptions = {
    catalog: TemplateCatalog,
    client: TypesenseClient,
    collection: string,
};

type UpdatedDocumentation = {
    documentation: string,
    assets: Record<string, string>,
};

async function createTemplateUpdate(options: UpdateOptions): Promise<TemplateUpdate> {
    const {catalog} = options;
    const index = await loadIndexedTemplates(options.client, options.collection);
    const indexedTemplates = new Set(index.map(template => template.id));

    const update: TemplateUpdate = {
        index: [],
        covers: {},
        assets: {},
        removedTemplates: [],
        summary: {
            indexed: index.length,
            additions: 0,
            removals: 0,
            total: 0,
        },
    };

    for (const {id} of index) {
        if (catalog.templates[id] === undefined) {
            update.removedTemplates.push(id);
            update.summary.removals++;
        }
    }

    for (const {metadata, ...template} of Object.values(catalog.templates)) {
        const isNew = !indexedTemplates.has(metadata.id);
        const coverImageName = generateCoverFileName(metadata.id, metadata.coverImageUrl);
        const coverVideoName = metadata.coverVideoUrl !== undefined
            ? generateCoverFileName(metadata.id, metadata.coverVideoUrl)
            : undefined;

        update.covers[metadata.coverImageUrl] = join('covers', coverImageName);

        if (metadata.coverVideoUrl !== undefined && coverVideoName !== undefined) {
            update.covers[metadata.coverVideoUrl] = join('covers', coverVideoName);
        }

        const {documentation, assets: documentationAssets} = updateDocumentationAssets(
            metadata.id,
            readFileSync(metadata.documentationUrl, 'utf-8'),
            dirname(template.path),
        );

        for (const [file, path] of Object.entries(documentationAssets)) {
            update.assets[file] = path;
        }

        update.index.push({
            id: metadata.id,
            title: template.title,
            description: template.description,
            author: {
                name: metadata.author.name,
                avatarUrl: metadata.author.avatarUrl,
                websiteUrl: metadata.author.websiteUrl,
            },
            categories: metadata.categories.map(
                category => ({
                    id: category,
                    name: categoryMap[category as keyof typeof categoryMap],
                    iconUrl: getCategoryIconUrl(category),
                }),
            ),
            documentation: documentation,
            demoUrl: metadata.demoUrl,
            deployUrl: metadata.deployUrl,
            coverImageUrl: getCoverUrl(coverImageName),
            coverVideoUrl: coverVideoName !== undefined
                ? getCoverUrl(coverVideoName)
                : undefined,
            installationUrl: metadata.installationUrl,
            sourceUrl: metadata.sourceUrl,
            verified: metadata.verified,
            relatedTemplates: metadata.relatedTemplates ?? [],
            options: Object.entries(template.options).map(
                ([name, definition]) => ({
                    name: name,
                    type: definition.type,
                    description: definition.description,
                    default: JSON.stringify(definition.default),
                    required: definition.required ?? false,
                }),
            ),
            popularity: isNew ? 0 : undefined,
            publishTime: isNew ? Date.now() : undefined,
        });

        update.summary.total++;

        if (!indexedTemplates.has(metadata.id)) {
            update.summary.additions++;
        }
    }

    return update;
}

function updateDocumentationAssets(id: string, documentation: string, path: string): UpdatedDocumentation {
    const assets: Record<string, string> = {};
    const pattern = /<img[^>]*src="([^">]*?)"[^>]*>|!\[[^\]]*]\s*\(([^)]+?)\s*(?:"[^"]*")?\s*\)/gi;

    const updatedDocumentation = documentation.replaceAll(pattern, (match, imgSrc, mdSrc) => {
        const src = imgSrc ?? mdSrc;
        const fileName = generateDocumentationAssetFileName(id, src);

        console.log(fileName);

        assets[join(path, src)] = join('documentation', fileName);

        return match.replace(src, getDocumentationAssetUrl(fileName));
    });

    return {
        documentation: updatedDocumentation,
        assets: assets,
    };
}

function getCategoryIconUrl(name: string): string|undefined {
    const fileName = getCategoryIconFile(name);

    if (fileName === undefined) {
        return undefined;
    }

    return `${CDN_URL}/${fileName.replace(/\\/g, '/')}`;
}

function getCategoryIconFile(name: string): string|undefined {
    if (isTechnologyCategory(name)) {
        return join('icons', 'technology', `${name.split('/').pop()}.png`);
    }

    return undefined;
}

function isTechnologyCategory(category: string): boolean {
    return technologyCategories.some(technologyCategory => category.startsWith(`${technologyCategory}/`));
}

function getDocumentationAssetUrl(fileName: string): string {
    return `${CDN_URL}/documentation/${fileName}`;
}

function getCoverUrl(fileName: string): string {
    return `${CDN_URL}/covers/${fileName}`;
}

function generateDocumentationAssetFileName(id: string, fileName: string): string {
    return `${id.replace(/[^a-z0-9]/g, '-').toLowerCase()}-${join(fileName).replace(/[/\\]/g, '-').toLowerCase()}`;
}

function generateCoverFileName(id: string, fileName: string): string {
    return id.replace(/[^a-z0-9]/g, '-').toLowerCase() + extname(fileName);
}

async function loadIndexedTemplates(client: TypesenseClient, collection: string): Promise<TemplateDocument[]> {
    const lines = await client.collections<TemplateDocument>(collection)
        .documents()
        .export();

    if (lines.length === 0) {
        return [];
    }

    return lines.split('\n').map(line => JSON.parse(line));
}

async function updateTemplateIndex(client: TypesenseClient, collection: string, update: TemplateUpdate): Promise<void> {
    const {index, removedTemplates} = update;

    await Promise.all([
        removedTemplates.length > 0
            ? client.collections(collection)
                .documents()
                .delete({
                    filter_by: `id:[${removedTemplates.join(',')}]`,
                })
            : Promise.resolve(),
        client.collections(collection)
            .documents()
            .import(index, {action: 'emplace'}),
    ]);
}

async function loadTemplateCatalog(directory: string): Promise<TemplateCatalog> {
    const categories = new Set<string>();
    const templates: Record<string, TemplateFile> = {};
    const violations: Violation[] = [];
    const validate = await createTemplateValidator();

    for (const category of Object.keys(categoryMap)) {
        const iconPath = getCategoryIconFile(category);

        if (iconPath === undefined) {
            continue;
        }

        const assetPath = join(ASSET_PATH, iconPath);

        if (!existsSync(assetPath)) {
            violations.push({
                path: assetPath,
                description: `The icon for category "${category}" is missing.`,
            });
        }
    }

    for (const path of findTemplateFiles(directory)) {
        if (!path.endsWith('.json5')) {
            violations.push({
                path: path,
                description: 'Template file must have a ".json5" extension.',
            });
        }

        let template: JsonValue;

        try {
            template = JsonParser.parse(readFileSync(path, 'utf-8')).toJSON();
        } catch (error) {
            violations.push({
                path: path,
                description: 'The file is not a valid JSON.',
            });

            continue;
        }

        if (!validate(template)) {
            violations.push({
                path: path,
                description: 'The template is not valid.',
                details: validate.errors?.map(
                    error => (
                        error.instancePath === ''
                            ? error.message ?? 'Unknown error'
                            : `${error.instancePath}: ${error.message}`
                    ),
                ),
            });

            continue;
        }

        const {metadata} = template;
        const {id} = metadata;

        if (templates[id] !== undefined) {
            violations.push({
                path: path,
                description: `The template ID "${id}" is already used by "${templates[id].path}".`,
            });
        }

        const urlProperties: PropertyAccessor[] = [
            {
                path: 'sourceUrl',
                label: 'Source URL',
                value: metadata.sourceUrl,
                set: (value: string): void => {
                    metadata.sourceUrl = value;
                },
            },
            {
                path: 'documentationUrl',
                label: 'Documentation URL',
                value: metadata.documentationUrl,
                set: (value: string): void => {
                    metadata.documentationUrl = value;
                },
            },
            {
                path: 'coverImageUrl',
                label: 'Cover Image URL',
                value: metadata.coverImageUrl,
                set: (value: string): void => {
                    metadata.coverImageUrl = value;
                },
            },
            {
                path: 'coverVideoUrl',
                label: 'Cover Video URL',
                value: metadata.coverVideoUrl,
                set: (value: string): void => {
                    metadata.coverVideoUrl = value;
                },
            },
        ];

        for (const property of urlProperties) {
            if (property.value === undefined) {
                continue;
            }

            if (!property.value.startsWith(BASE_URL)) {
                violations.push({
                    path: path,
                    description: `The ${property.label} must start with the base URL.`,
                });
            }

            const relativePath = property.value.slice(BASE_URL.length);

            if (!existsSync(relativePath) || !lstatSync(relativePath).isFile()) {
                violations.push({
                    path: path,
                    description: `The ${property.label} references a non-existing file "${relativePath}".`,
                });
            }

            property.set(relativePath);
        }

        let hasCategoryPrefix = false;

        for (const category of metadata.categories) {
            categories.add(category);

            if (id.startsWith(category)) {
                hasCategoryPrefix = true;
            }

            if (!(category in categoryMap)) {
                violations.push({
                    path: path,
                    description: `Unknown category "${category}".`,
                });
            }
        }

        for (const duplicate of findDuplicates(metadata.categories)) {
            violations.push({
                path: path,
                description: `Category "${duplicate}" is duplicated.`,
            });
        }

        if (!hasCategoryPrefix) {
            violations.push({
                path: path,
                description: `Template ID "${id}" must be prefixed with one of its listed categories.`,
            });
        }

        templates[template.metadata.id] = {
            path: path,
            ...template,
        };

        if (existsSync(metadata.documentationUrl)) {
            const documentation = updateDocumentationAssets(
                metadata.id,
                readFileSync(metadata.documentationUrl, 'utf-8'),
                dirname(path),
            );

            for (const asset of Object.keys(documentation.assets)) {
                if (!existsSync(asset)) {
                    violations.push({
                        path: metadata.documentationUrl,
                        description: `The documentation asset "${asset}" is missing.`,
                    });
                }
            }
        }
    }

    for (const template of Object.values(templates)) {
        const relatedTemplates = template.metadata.relatedTemplates ?? [];

        for (const relatedTemplate of relatedTemplates) {
            if (templates[relatedTemplate] === undefined) {
                violations.push({
                    path: template.path,
                    description: `Related template "${relatedTemplate}" does not exist.`,
                });
            }
        }

        for (const duplicate of findDuplicates(relatedTemplates)) {
            violations.push({
                path: template.path,
                description: `Related template "${duplicate}" is duplicated.`,
            });
        }
    }

    return {
        categories: Array.from(categories),
        templates: templates,
        violations: violations,
    };
}

function findDuplicates(values: string[]): string[] {
    const duplicates: string[] = [];
    const seen = new Set<string>();

    for (const value of values) {
        if (seen.has(value)) {
            duplicates.push(value);
        } else {
            seen.add(value);
        }
    }

    return duplicates;
}

async function createTemplateValidator(): Promise<ValidateFunction<Template>> {
    const ajv = new Ajv();

    addFormats(ajv);

    return ajv.compile(await loadTemplateSchema());
}

async function loadTemplateSchema(): Promise<JSONSchemaType<Template>> {
    const response = await fetch(SCHEMA_URL);

    if (!response.ok) {
        throw new Error(`Failed to fetch schema: ${response.statusText}`);
    }

    return response.json() as Promise<JSONSchemaType<Template>>;
}

function findTemplateFiles(directory: string): string[] {
    const files: string[] = [];

    for (const file of readdirSync(directory)) {
        const path = `${directory}/${file}`;

        if (file === 'template.json' || file === 'template.json5') {
            files.push(path);

            continue;
        }

        if (lstatSync(path).isDirectory()) {
            files.push(...findTemplateFiles(path));
        }
    }

    return files;
}

function reportViolations(violations: Violation[]): void {
    const table = new Table({
        colWidths: [40, 40, 40],
        wordWrap: true,
    });

    table.push([
        {
            colSpan: 3,
            hAlign: 'center',
            content: chalk.red.bold('Template violations'),
        },
    ]);

    table.push(['Path', 'Violation', 'Details']);

    for (const violation of violations) {
        table.push([violation.path, violation.description, violation.details?.[0] ?? '--']);
    }

    console.log(table.toString());
}

interface Tree {
    label: string;
    children: Record<string, Tree>;
    count: number;
}

function formatCategoryTree(categories: string[], counts: Record<string, number> = {}): string {
    const lines: string[] = [];

    const toSentenceCase = (text: string): string => text
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    const buildTree = (paths: string[]): Tree => {
        const root: Tree = {
            label: 'Categories',
            children: {},
            count: Object.values(counts).reduce((sum, count) => sum + count, 0),
        };

        for (const path of paths) {
            const parts = path.split('/');
            let node = root;

            for (let index = 0; index < parts.length; index++) {
                const prefix = parts.slice(0, index + 1).join('/');
                const label = toSentenceCase(parts[index]);

                if (node.children[prefix] === undefined) {
                    node.children[prefix] = {
                        label: label,
                        children: {},
                        count: Object.keys(counts).reduce(
                            (sum, category) => (category === prefix ? sum + counts[prefix] : sum),
                            0,
                        ),
                    };
                }

                node = node.children[prefix];
            }
        }

        return root;
    };

    const printTree = (tree: Tree, prefix = ''): void => {
        const children = Object.values(tree.children).sort((left, right) => left.label.localeCompare(right.label));

        for (const [index, subtree] of children.entries()) {
            const last = index === children.length - 1;
            const topConnector = index === 0 && prefix.length === 0 ? '┌─ ' : '├─ ';
            const connector = chalk.grey(last ? '└─ ' : topConnector);
            const counter = `${chalk.dim('(')}${chalk.green(subtree.count)}${chalk.dim(')')}`;

            lines.push(`${prefix + connector + subtree.label} ${counter}`);
            const nextPrefix = prefix + chalk.grey(last ? '    ' : '│  ');

            printTree(subtree, nextPrefix);
        }
    };

    printTree(buildTree(categories));

    return lines.join('\n');
}

function countCategories(catalog: TemplateCatalog): Record<string, number> {
    const counts: Record<string, number> = Object.fromEntries(
        catalog.categories.map(category => [category, 0]),
    );

    for (const template of Object.values(catalog.templates)) {
        for (const category of template.metadata.categories) {
            if (counts[category] !== undefined) {
                counts[category]++;
            }
        }
    }

    return counts;
}

function reportTemplateSummary(catalog: TemplateCatalog, update: TemplateUpdate): void {
    const table = new Table({
        colWidths: [40, 40],
    });

    table.push([
        {
            colSpan: 2,
            hAlign: 'center',
            content: chalk.bold('Summary'),
        },
    ]);

    let relatedTemplates = 0;
    let categoriesCount = 0;
    const authors = new Set<string>();

    for (const template of Object.values(catalog.templates)) {
        relatedTemplates += template.metadata.relatedTemplates?.length ?? 0;
        categoriesCount += template.metadata.categories?.length ?? 0;
        authors.add(template.metadata.author.websiteUrl);
    }

    table.push(
        {
            'Current catalog size': `${update.summary.indexed}`,
        },
        {
            'Added templates': `${update.summary.additions}`,
        },
        {
            'Removed templates': `${update.summary.removals}`,
        },
        {
            'New catalog size': `${update.summary.total}`,
        },
        {
            'Total categories': `${catalog.categories.length}`,
        },
        {
            'Total authors': `${authors.size}`,
        },
        {
            'Average related templates': (relatedTemplates / update.summary.total).toFixed(2),
        },
        {
            'Average templates per category': (categoriesCount / update.summary.total).toFixed(2),
        },
        [
            {
                colSpan: 2,
                content: 'Categories',
            },
        ],
        [
            {
                colSpan: 2,
                content: formatCategoryTree(catalog.categories, countCategories(catalog)),
            },
        ],
    );

    console.log(table.toString());
}

async function run(): Promise<void> {
    program.command('validate')
        .argument('<directory>')
        .action(async directory => {
            console.log('Validating templates...');

            const catalog = await loadTemplateCatalog(directory);

            if (catalog.violations.length === 0) {
                return console.log(chalk.green('No violations found.'));
            }

            reportViolations(catalog.violations);

            process.exit(1);
        });

    program.command('publish')
        .argument('<directory>')
        .addOption(
            new Option('--asset-output <path>', 'Output path for the assets')
                .makeOptionMandatory(),
        )
        .addOption(
            new Option('--typesense-key <key>', 'Typesense API key')
                .makeOptionMandatory(),
        )
        .addOption(
            new Option('--typesense-url <url>', 'Typesense API URL')
                .makeOptionMandatory(),
        )
        .addOption(
            new Option('--typesense-collection <collection>', 'Typesense collection name')
                .makeOptionMandatory(),
        )
        .action(async (directory, option) => {
            console.log('Loading templates...');

            const catalog = await loadTemplateCatalog(directory);

            if (catalog.violations.length > 0) {
                reportViolations(catalog.violations);

                process.exit(1);
            }

            console.log('Loading template index...');

            const client = new TypesenseClient({
                apiKey: option.typesenseKey,
                nodes: [
                    {
                        host: option.typesenseUrl,
                        port: 443,
                        protocol: 'https',
                    },
                ],
            });

            const update = await createTemplateUpdate({
                client: client,
                collection: option.typesenseCollection,
                catalog: catalog,
            });

            console.log('Copying assets...');

            for (const [file, path] of Object.entries(update.covers)) {
                const destination = join(option.assetOutput, path);

                mkdirSync(dirname(destination), {recursive: true});

                cpSync(file, destination);
            }

            for (const [file, path] of Object.entries(update.assets)) {
                const destination = join(option.assetOutput, path);

                mkdirSync(dirname(destination), {recursive: true});

                cpSync(file, destination);
            }

            for (const category of catalog.categories) {
                const iconPath = getCategoryIconFile(category);

                if (iconPath === undefined) {
                    continue;
                }

                const source = join(ASSET_PATH, iconPath);
                const destination = join(option.assetOutput, iconPath);

                mkdirSync(dirname(destination), {recursive: true});

                cpSync(source, destination);
            }

            try {
                await updateTemplateIndex(client, option.typesenseCollection, update);
            } catch (error) {
                console.error('Failed to update template index:', error);

                process.exit(1);
            }

            console.log(chalk.green('Template index updated successfully!\n'));

            reportTemplateSummary(catalog, update);
        });

    await program.parseAsync();
}

run();
