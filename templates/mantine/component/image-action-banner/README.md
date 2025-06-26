# Introduction

This template adds the [banner component with image and action](https://ui.mantine.dev/category/banners/?utm_source=croct#image-action-banner) from Mantine to your project.

It comes fully integrated with Croct, giving you CMS, AB testing, and personalization out of the box.

## Usage

To create a new project using this template, run:

```croct-cmd
croct use mantine://component/image-action-banner
```

You can customize the template by specifying options:

```croct-cmd
croct use mantine://component/image-action-banner --router=page
```

## Options

The following options are available for this template:

| Option        | Description                                      | Required | Default  |
|---------------|--------------------------------------------------|----------|----------|
| `projectName` | The name of the project.                         | No       | `my-app` |
| `version`     | The Next.js version to use.                      | No       | `latest` |
| `router`      | The router to use (`app` or `page`).             | No       | `app`    |
| `javascript`  | Whether to use JavaScript instead of TypeScript. | No       | `false`  |
