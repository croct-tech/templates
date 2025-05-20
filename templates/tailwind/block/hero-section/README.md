# Introduction

This template adds the [Tailwind hero section](https://tailwindcss.com/plus/ui-blocks/marketing/sections/heroes?utm_source=croct)
to your project.

It comes fully integrated with Croct, giving you CMS, AB testing, and personalization out of the box.

> [!IMPORTANT Tailwind CSS required]
> Make sure [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite?utm_source=croct) is set up before using
> this template.

## Usage

To create a new project using this template, run:

```croct-cmd
croct use tailwind://block/hero-section
```

You can customize the template by specifying options:

```croct-cmd
croct use tailwind://block/hero-section --router=page
```

## Options

The following options are available for this template:

| Option        | Description                                      | Required | Default  |
|---------------|--------------------------------------------------|----------|----------|
| `projectName` | The name of the project.                         | No       | `my-app` |
| `version`     | The Next.js version to use.                      | No       | `latest` |
| `router`      | The router to use (`app` or `page`).             | No       | `app`    |
| `javascript`  | Whether to use JavaScript instead of TypeScript. | No       | `false`  |
