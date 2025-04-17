# Introduction

This template serves as a utility for setting up [Shadcn UI](https://ui.shadcn.com/). It either initializes a [Next.js](https://nextjs.org/) project with Shadcn UI 
or adds Shadcn UI to an existing project if one is found.

Useful for creating templates that support both fresh setups and integrations into existing codebases.

## Usage

Add the action to import the template:

```json
{
  "name": "import",
  "template": "shadcn://integration"
}
```

You can customize the template by specifying `options`:

```diff-json
{
  "name": "import",
  "template": "shadcn://integration",
  "options": {
*    "version": "14"
  }
}
```

## Options

The following options are available for this template:

| Option        | Description                          | Required | Default  |
|---------------|--------------------------------------|----------|----------|
| `projectName` | The name of the project.             | No       | `my-app` |
| `version`     | The Next.js version to use.          | No       | `latest` |
| `router`      | The router to use (`app` or `page`). | No       | `app`    |
