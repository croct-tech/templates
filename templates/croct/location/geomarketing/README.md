# Introduction

This template shows how to implement **location-based content**
using [Croct slots](https://docs.croct.com/explanation/slot). It enables dynamic messages based on the visitor's **IP
location**, region, or locale, such as country, state, or city.

Built with the [announcement bar component](https://croct.com/templates/interface/component/announcement-bar), it can be
integrated into an existing project or used to scaffold a new [Next.js](https://nextjs.org/?utm_source=croct)
application.

It is a good alternative for IP geolocation APIs and ideal for geomarketing strategies, geo-targeted campaigns,
localized user experiences, and **IP-based customization**. Additionally, it is fully integrated with Croct, providing
you with a **headless CMS**, AB testing, and ready-to-use location-based personalization.

> [!NOTE Dynamic content]
> This template uses different implementations based on whether the [Dynamic values](https://docs.croct.com/reference/content/definition/introduction#dynamic-values) 
> feature is available in your workspace. 
> When enabled, it provides a simpler and more powerful approach to location-based messaging.

## Usage

To create a new project using this template, run:

```croct-cmd
croct@latest use croct://location/geomarketing
```

You can customize the template by specifying options:

```croct-cmd
croct@latest use croct://location/geomarketing --router=page
```

## Options

The following options are available for this template:

| Option        | Description                                      | Required | Default  |
|---------------|--------------------------------------------------|----------|----------|
| `projectName` | The name of the project.                         | No       | `my-app` |
| `version`     | The Next.js version to use.                      | No       | `latest` |
| `router`      | The router to use (`app` or `page`).             | No       | `app`    |
| `javascript`  | Whether to use JavaScript instead of TypeScript. | No       | `false`  |
