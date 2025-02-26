<p align="center">
  <a href="https://croct.com" target="_blank">
    <picture>
        <source media="(min-width: 769px) and (prefers-color-scheme: light)" srcset="https://github.com/croct-tech/plug-js/blob/master/.github/assets/header-light.svg">
        <source media="(min-width: 769px) and (prefers-color-scheme: dark)" srcset="https://github.com/croct-tech/plug-js/blob/master/.github/assets/header-dark.svg">
        <source media="(max-width: 768px) and (prefers-color-scheme: dark)" srcset="https://github.com/croct-tech/plug-js/blob/master/.github/assets/header-dark-mobile.svg">
        <source media="(max-width: 768px) and (prefers-color-scheme: light)" srcset="https://github.com/croct-tech/plug-js/blob/master/.github/assets/header-light-mobile.svg">
        <img src="https://raw.githubusercontent.com/croct-tech/plug-js/refs/heads/update-readme/.github/assets/header-light-mobile.svg" alt="Croct Templates" title="Croct Templates" width="100%">
    </picture>
  </a>
  <br/>
  <strong>Croct Templates</strong><br/>
  A library of curated templates for UI components, projects, and personalization strategies.
</p>
<div align="center">
    <strong>📘 <a href="https://croct.com/templates">Browse templates &rarr;</a></strong>
</div>
<br/>

## Introduction

We're creating the largest **CMS-powered UI component library** — think of it as [`shadcn`](https://github.com/shadcn-ui/ui) for CMS. 

Just run `croct use <template>` to integrate a component into your application with **CMS, analytics, A/B testing, and personalization**.

### What's Croct?

Croct is a **Component CMS** designed for modern stacks with a developer-first mindset.
Built by seasoned open-source contributors, we offer a **💚 forever-free plan** — no credit card required — perfect for most teams and projects.

### 👉 Try it in Next.js

To use it with [Next.js](https://nextjs.org/), run:

```sh
croct use nextjs:/croct
```

This will either set up a new Next.js project or add the component to an existing one, fully configured.

## Installation

To use the Croct CLI, you need to have [Node.js](https://nodejs.org/) installed. 

You can install the CLI globally using NPM:

```sh
npm install -g croct
```

Or run it directly using `npx`:

```sh
npx croct@latest use <template-url>
```

## Basic usage

To use a template, **copy the URL** of the template you want to use and run:

```sh
croct use <template-url>
```

For example:

```sh
croct use https://github.com/croct/templates/tree/main/templates/magicui/ui/marquee
```

This command will fetch and apply the template to your project automatically.

For more information, check the [documentation](https://docs.croct.com/reference/cli).

### Aliases

We support aliases for popular libraries, so you can skip the full URL. For example, to use the [Marquee](https://magicui.design/docs/components/marquee) component from [Magic UI](https://magicui.design/), you can run:

```sh
croct use magicui:/ui/marquee
```

Or use the component's registry URL:

```sh
croct use https://magicui.design/r/marquee
```

### Supported aliases

These are the currently supported aliases:

| Project      | Short URL                          | Alternative URL                               |
|--------------|------------------------------------|-----------------------------------------------|
| **Any**      | `github:/<user>/<repo>/<template>` | `https://github.com/<user>/<repo>/<template>` |
| **NPM**      | `npm:/<package>`                   | -                                             |
| **Croct**    | `croct:/<template>`                | -                                             |
| **Next.js**  | `nextjs:/<template>`               | -                                             |
| **Shadcn**   | `shadcn:/<template>`               | -                                             |
| **Magic UI** | `magicui:/<template>`              | `https://magicui.design/r/<component>`        |

To add a new alias, open a pull request with the new entry in the [registry](templates/registry.json).

## Contribute

Contributions are always welcome!

- Report any bugs or issues on the [issue tracker](https://github.com/croct-tech/templates/issues).
- For major changes, please [open an issue](https://github.com/croct-tech/templates/issues) first to discuss what you would like to change.

###  New templates

The best way to create a new template is to **base it on an existing one**. However, if you want to start from scratch, you can use:

```sh
npx croct create template --empty
```

This will generate a minimal template file ready for customization.

### Folder structure

This repository contains a structured folder system for organizing templates:

```
templates/
 ├── [organization]/
 │   ├── example/
 │   │   ├── template.json5
 │   ├── another-example/
 │   │   ├── template.json5
```

The `[organization]` should be the company's domain without `.com`, `.io`, or similar. For example, for `croct.com`, the folder name should be `croct`.

### Documentation

Check the [documentation](https://docs.croct.com/reference/cli/templates) for more information on how to create and publish templates.

## License

This library is licensed under the [MIT license](LICENSE).
