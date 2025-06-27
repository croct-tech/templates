# Introduction

This template adds the a sign up page with content on the left to your project.

It is a variation of the [sign-in side component](https://croct.com/templates/library/material-ui/sign-in-side) and it
comes fully integrated with Croct, giving you CMS, AB testing, and personalization out of the box.

## Usage

To create a new project using this template, run:

```croct-cmd
croct use material-ui://block/sign-up-side
```

You can customize the template by specifying options:

```croct-cmd
croct use material-ui://block/sign-up-side --router=page
```

## Options

The following options are available for this template:

| Option        | Description                                      | Required | Default  |
|---------------|--------------------------------------------------|----------|----------|
| `projectName` | The name of the project.                         | No       | `my-app` |
| `version`     | The Next.js version to use.                      | No       | `latest` |
| `router`      | The router to use (`app` or `page`).             | No       | `app`    |
| `javascript`  | Whether to use JavaScript instead of TypeScript. | No       | `false`  |
