# Introduction

This template provides a fully featured SaaS pricing page built using [Shadcn UI](https://ui.shadcn.com/?utm_source=croct) components and Croct for dynamic content management and personalization.

It includes all standard pricing page elements, along with:

- **Content management**: Update page content without redeploying your application.
- **AB testing**: Create and compare multiple page versions to determine which converts best.
- **Personalization**: Customize page elements dynamically based on user attributes. Adjust billing frequency (monthly/yearly), highlight specific plans, reorder features, and more.
- **Analytics**: Monitor user interactions, measure element effectiveness, and track conversion rates.

The template is compatible with any React project using [Tailwind CSS](https://tailwindcss.com/?utm_source=croct). For [Next.js](https://nextjs.org/?utm_source=croct), both `app` and `pages` routers are supported.

## Usage

Run the following command on an existing project or in an empty folder to create a new one:

```croct-cmd
croct@latest use shadcn-ui://block/pricing-page
```

You can pass options in the command line to customize the template:

```croct-cmd
croct@latest use shadcn-ui://block/pricing-page --router=page
```

## Options

The following options are available for this template:

| Option        | Description                                  | Required | Default  |
|---------------|----------------------------------------------|----------|----------|
| `version`     | The Next.js version to use for new projects. | No       | `latest` |
| `router`      | The router to use (`app` or `page`).         | No       | `app`    |
