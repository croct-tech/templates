# Introduction

This template demonstrates how to display location-based messages using [slots](https://docs.croct.com/explanation/slot) with Croct. 
It is implemented using the [announcement bar component](https://croct.com/templates/interface/component/announcement-bar) and 
can be added to an existing project or used to bootstrap a new [Next.js](https://nextjs.org/?utm_source=croct) application.

> [!INFO Dynamic content]
> This template uses different implementations based on whether the 
> [Dynamic values](https://docs.croct.com/reference/content/definition/introduction#dynamic-values) feature is 
> available in your workspace. When enabled, it provides a simpler and more powerful approach to location-based messaging.

It comes fully integrated with Croct, giving you CMS, A/B testing, and personalization out of the box.

## Usage

To create a new project using this template, run:

```js-pm
croct@latest use croct://experience/e-commerce/location-based-messaging
```

You can customize the template by specifying options:

```js-pm
croct@latest use croct://experience/e-commerce/location-based-messaging --router=page
```

## Options

The following options are available for this template:

| Option        | Description                                      | Required | Default  |
|---------------|--------------------------------------------------|----------|----------|
| `projectName` | The name of the project.                         | No       | `my-app` |
| `version`     | The Next.js version to use.                      | No       | `latest` |
| `router`      | The router to use (`app` or `page`).             | No       | `app`    |
| `javascript`  | Whether to use JavaScript instead of TypeScript. | No       | `false`  |
