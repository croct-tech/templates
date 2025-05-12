# Introduction

This template sets up a project using [Next.js](https://nextjs.org/?utm_source=croct) and Croct.
It shows how to use the [Croct Next.js SDK](https://docs.croct.com/reference/sdk/nextjs/installation) to add a CMS, 
analytics, AB testing and personalization to your application.

## Usage

To create a new project using this template, run:

```croct-cmd
croct@latest use croct://starter/nextjs
```

To specify a Next.js version, use the `version` option:

```croct-cmd
croct@latest use croct://starter/nextjs --version=14
```

## Options

The following options are available for this template:

| Option            | Description                                      | Required | Default  |
|-------------------|--------------------------------------------------|----------|----------|
| `name`            | The name of the project.                         | No       | `my-app` |
| `version`         | The Next.js version to use.                      | No       | `latest` |
| `javascript`      | Whether to use JavaScript instead of TypeScript. | No       | `false`  |
| `tailwind`        | Whether to use Tailwind CSS.                     | No       | `false`  |
| `src-dir`         | Whether to use a `src` directory.                | No       | `false`  |
| `router`          | The router to use (`app` or `page`).             | No       | `app`    |
| `disableLauncher` | Whether to disable the project launcher.         | No       | `false`  |
