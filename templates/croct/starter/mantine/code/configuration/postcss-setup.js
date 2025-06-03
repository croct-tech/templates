import fs from 'fs';

(async () => {
    // The configuration you want to enforce
    const requiredConfig = {
        plugins: {
            'postcss-preset-mantine': {},
            'postcss-simple-vars': {
                variables: {
                    'mantine-breakpoint-xs': '36em',
                    'mantine-breakpoint-sm': '48em',
                    'mantine-breakpoint-md': '62em',
                    'mantine-breakpoint-lg': '75em',
                    'mantine-breakpoint-xl': '88em',
                },
            },
        },
    };

    // Load existing config if any
    let existingConfig = {};

    const jsConfigPath = `./postcss.config.js`;
    const cjsConfigPath = `./postcss.config.cjs`;
    const defaultConfigPath = fs.existsSync(jsConfigPath) ? jsConfigPath : cjsConfigPath;

    if (fs.existsSync(defaultConfigPath)) {
        if (defaultConfigPath !== cjsConfigPath) {
            fs.writeFileSync(cjsConfigPath, fs.readFileSync(defaultConfigPath, 'utf8'));
        }

        try {
            existingConfig = await import(cjsConfigPath).then((module) => module.default ?? module);
        } catch (error) {
            // Ignore if the file does not exist or is not valid
        }
    }

    // Merge and serialize
    const merged = deepMerge(existingConfig, requiredConfig);
    const output = `module.exports = ${JSON.stringify(merged, null, 2)};\n`;

    // Write back
    fs.writeFileSync(defaultConfigPath, output, 'utf8');

    // Clean up
    if (defaultConfigPath !== cjsConfigPath) {
        fs.unlinkSync(cjsConfigPath);
    }

    // Remove this script file
    fs.unlinkSync(import.meta.filename);

    // Deep merge utility (no deps)
    function deepMerge(target, source) {
        for (const key in source) {
            if (
                source[key]
                && typeof source[key] === 'object'
                && !Array.isArray(source[key])
            ) {
                target[key] = deepMerge(target[key] || {}, source[key]);
            } else {
                target[key] = source[key];
            }
        }

        return target;
    }
})();
