# Introduction
This template sets up a project using [Next.js](https://nextjs.org/?utm_source=croct), [Tailwind CSS](https://tailwindcss.com/?utm_source=croct), [[Hero UI](https://heroui.com/?utm_source=croct), and Croct.
It either initializes a Next.js project with Hero UI or adds Hero UI to an existing project if one is found.

## Usage

To create a new project using this template, run:

```croct-cmd
croct@latest use croct://starter/hero-ui
```

To specify a Next.js version, use the `version` option:

```croct-cmd
croct@latest use croct://starter/hero-ui --version=14
```

## Options

The following options are available for this template:

| Option            | Description                                       | Required | Default  |
|-------------------|---------------------------------------------------|----------|----------|
| `name`            | The name of the project.                          | No       | `my-app` |
| `version`         | The Next.js version to use.                       | No       | `latest` |
| `eslint`          | Whether to use ESLint.                            | No       | `true`   |
| `turbopack`       | Whether to use Turbopack.                         | No       | `false`  |
| `src-dir`         | Whether to use a `src` directory.                 | No       | `false`  |
| `import-alias`    | The import alias to use.                          | No       | `@/*`    |
| `router`          | The router to use (`app` or `page`).              | No       | `app`    |
| `disableLauncher` | Whether to disable the project launcher.          | No       | `false`  |
| `defaultHomepage` | Whether to use the default homepage over Croct's. | No       | `false`  |
