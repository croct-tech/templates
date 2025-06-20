# Introduction

This template adds the [cookies banner component](https://ui.mantine.dev/category/banners/?utm_source=croct#cookies-banner) from Mantine to your project.

It comes fully integrated with Croct, giving you CMS, AB testing, and personalization out of the box.

## Usage

To create a new project using this template, run:

```croct-cmd
croct use mantine://component/cookies-banner
```

You can customize the template by specifying options:

```croct-cmd
croct use mantine://component/cookies-banner --router=page
```

## Options

The following options are available for this template:

| Option        | Description                                      | Required | Default  |
|---------------|--------------------------------------------------|----------|----------|
| `projectName` | The name of the project.                         | No       | `my-app` |
| `version`     | The Next.js version to use.                      | No       | `latest` |
| `router`      | The router to use (`app` or `page`).             | No       | `app`    |
| `javascript`  | Whether to use JavaScript instead of TypeScript. | No       | `false`  |
