# Introduction

This template integrates Croct in an existing project or creates a new [Next.js](https://nextjs.org/) project already integrated with Croct.

## Usage

Run the following command to integrate Croct into an existing project:

```croct-cmd
croct@latest use croct://project
```

To specify a Next.js version, use the `version` option:

```croct-cmd
croct@latest use croct://project --version=14
```

## Options

The following options are available for this template:

| Option    | Description                          | Required | Default  |
|-----------|--------------------------------------|----------|----------|
| `name`    | The name of the project.             | No       | `my-app` |
| `version` | The Next.js version to use.          | No       | `latest` |
| `router`  | The router to use (`app` or `page`). | No       | `app`    |
