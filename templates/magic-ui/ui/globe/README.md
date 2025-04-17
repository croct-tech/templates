# Introduction

This template adds the [Magic UI Globe](https://magicui.design/docs/components/globe) component to your 
project or creates a new project using [Next.js](https://nextjs.org/) if none is found in the current directory.

It comes fully integrated with Croct, giving you CMS, A/B testing, and personalization out of the box.

## Usage

To create a new project using this template, run:

```js-pm
croct@latest use magic-ui://ui/globe
```

You can customize the template by specifying options:

```js-pm
croct@latest use magic-ui://ui/globe --router=page
```

## Options

The following options are available for this template:

| Option        | Description                          | Required | Default  |
|---------------|--------------------------------------|----------|----------|
| `projectName` | The name of the project.             | No       | `my-app` |
| `version`     | The Next.js version to use.          | No       | `latest` |
| `router`      | The router to use (`app` or `page`). | No       | `app`    |
