# Introduction

This template adds the
entire [Material UI marketing page template](https://mui.com/material-ui/getting-started/templates/marketing-page/?utm_source=croct)
to your project.

It comes fully integrated with Croct, giving you CMS, AB testing, and personalization out of the box.

> [!NOTE Forever-free]
> This template is compatible with features available on the forever-free plan.

## Usage

To create a new project using this template, run:

```croct-cmd
croct use material-ui://template/marketing-page
```

You can customize the template by specifying options, like defining which sections should be integrated with Croct
slots:

```croct-cmd
croct use material-ui://template/marketing-page --slots='["hero-section","pricing-section"]'
```

## Options

The following options are available for this template:

| Option        | Description                                                                                                                                                                     | Required | Default                                |
|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|----------------------------------------|
| `projectName` | The name of the project.                                                                                                                                                        | No       | `my-app`                               |
| `version`     | The Next.js version to use.                                                                                                                                                     | No       | `latest`                               |
| `router`      | The router to use (`app` or `page`).                                                                                                                                            | No       | `app`                                  |
| `javascript`  | Whether to use JavaScript instead of TypeScript.                                                                                                                                | No       | `false`                                |
| `slots`       | Tha list of slots to use (`navbar`, `hero-section`, `logo-collection`, `features-section`, `testimonials-section`, `highlights-section`, `pricing-section`, and `faq-section`). | No       | `["hero-section", "features-section"]` |
