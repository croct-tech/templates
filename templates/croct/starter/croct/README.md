# Introduction

This template adds Croct to an existing project or sets up a new [Next.js](https://nextjs.org/) project with Croct already integrated.

## Usage

Run the following command to integrate Croct into an existing project:

```croct-cmd
croct@latest use croct://starter/croct
```

To specify a Next.js version, use the `version` option:

```croct-cmd
croct@latest use croct://starter/croct --version=14
```

## Options

The following options are available for this template:

| Option            | Description                                       | Required | Default  |
|-------------------|---------------------------------------------------|----------|----------|
| `name`            | The name of the project.                          | No       | `my-app` |
| `version`         | The Next.js version to use.                       | No       | `latest` |
| `javascript`      | Whether to use JavaScript instead of TypeScript.  | No       | `false`  |
| `tailwind`        | Whether to use Tailwind CSS.                      | No       | `false`  |
| `eslint`          | Whether to use ESLint.                            | No       | `true`   |
| `turbopack`       | Whether to use Turbopack.                         | No       | `false`  |
| `src-dir`         | Whether to use a `src` directory.                 | No       | `false`  |
| `import-alias`    | The import alias to use.                          | No       | `@/*`    |
| `router`          | The router to use (`app` or `page`).              | No       | `app`    |
| `disableLauncher` | Whether to disable the project launcher.          | No       | `false`  |
| `defaultHomepage` | Whether to use the default homepage over Croct's. | No       | `false`  |
