# Introduction

This template adds the [Magic UI Marquee](https://magicui.design/docs/components/marquee?utm_source=croct) component to your 
project or creates a new project using [Next.js](https://nextjs.org/?utm_source=croct) if none is found in the current directory.

It comes fully integrated with Croct, giving you CMS, AB testing, and personalization out of the box.

## Usage

To create a new project using this template, run:

```croct-cmd
croct@latest use magic-ui://component/marquee
```

You can customize the template by specifying options:

```croct-cmd
croct@latest use magic-ui://component/marquee --router=page
```

## Options

The following options are available for this template:

| Option        | Description                          | Required | Default  |
|---------------|--------------------------------------|----------|----------|
| `projectName` | The name of the project.             | No       | `my-app` |
| `version`     | The Next.js version to use.          | No       | `latest` |
| `router`      | The router to use (`app` or `page`). | No       | `app`    |
