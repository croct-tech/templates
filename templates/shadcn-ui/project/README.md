# Introduction

This template sets up a project using [Next.js](https://nextjs.org/?utm_source=croct), [Tailwind CSS](https://tailwindcss.com/?utm_source=croct) and [Shadcn UI](https://ui.shadcn.com/?utm_source=croct).

## Usage

To create a new project using this template, run:

```croct-cmd
croct@latest use shadcn-ui://project
```

To specify a Next.js version, use the `version` option:

```croct-cmd
croct@latest use shadcn-ui://project --version=14
```

## Options

The following options are available for this template:

| Option    | Description                          | Required | Default  |
|-----------|--------------------------------------|----------|----------|
| `name`    | The name of the project.             | No       | `my-app` |
| `version` | The Next.js version to use.          | No       | `latest` |
| `router`  | The router to use (`app` or `page`). | No       | `app`    |
