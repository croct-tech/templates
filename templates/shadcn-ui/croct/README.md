# Introduction

This template sets up a project using [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/), and Croct.
It shows how to use the [Croct Next.js SDK](https://docs.croct.com/reference/sdk/nextjs/installation) to add a CMS, 
analytics, A/B testing and personalization to your application.

## Usage

To create a new project using this template, run:

```js-pm
croct@latest use shadcn-ui://croct
```

To specify a Next.js version, use the `version` option:

```js-pm
croct@latest use shadcn-ui://croct --version=14
```

## Options

The following options are available for this template:

| Option        | Description                          | Required | Default  |
|---------------|--------------------------------------|----------|----------|
| `projectName` | The name of the project.             | No       | `my-app` |
| `version`     | The Next.js version to use.          | No       | `latest` |
| `router`      | The router to use (`app` or `page`). | No       | `app`    |
