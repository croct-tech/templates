# Introduction

This template sets up a project using [Next.js](https://nextjs.org/?utm_source=croct), [Tailwind CSS](https://tailwindcss.com/?utm_source=croct), [Shadcn UI](https://ui.shadcn.com/?utm_source=croct), and Croct.
It either initializes a [Next.js](https://nextjs.org/?utm_source=croct) project with Shadcn UI or adds Shadcn UI to an existing project if one is found.

## Usage

To create a new project using this template, run:

```croct-cmd
croct@latest use croct://starter/shadcn-ui
```

To specify a Next.js version, use the `version` option:

```croct-cmd
croct@latest use croct://starter/shadcn-ui --version=14
```

## Options

The following options are available for this template:

| Option    | Description                          | Required | Default  |
|-----------|--------------------------------------|----------|----------|
| `name`    | The name of the project.             | No       | `my-app` |
| `version` | The Next.js version to use.          | No       | `latest` |
| `router`  | The router to use (`app` or `page`). | No       | `app`    |
