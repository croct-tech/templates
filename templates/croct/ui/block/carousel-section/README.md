# Introduction

A carousel section displays multiple banners in a rotating, swipeable format.

Often used on home pages, landing pages, or product sections to showcase various highlights within limited space,
it helps keep the layout dynamic and maintains visual interest.

Running AB tests on banner order, visuals, or messaging and personalizing the banners based on audience segments,
such as showing different promotions by source, device, or behavior, can increase engagement and conversion.

This template adds a carousel section component to your project or creates a new project using
[Next.js](https://nextjs.org/?utm_source=croct) if none is found in the current directory.

It comes fully integrated with Croct, giving you CMS, AB testing, and personalization out of the box.

> [!TIP Need help with the code?]
> Explore popular React carousel libraries in
> our [guide](https://blog.croct.com/post/best-react-carousel-slider-libraries).

## Usage

To create a new project using this template, run:

```croct-cmd
croct@latest use croct://ui/block/carousel-section
```

You can customize the template by specifying options:

```croct-cmd
croct@latest use croct://ui/block/carousel-section --router=page
```

## Options

The following options are available for this template:

| Option        | Description                                      | Required | Default  |
|---------------|--------------------------------------------------|----------|----------|
| `projectName` | The name of the project.                         | No       | `my-app` |
| `version`     | The Next.js version to use.                      | No       | `latest` |
| `router`      | The router to use (`app` or `page`).             | No       | `app`    |
| `javascript`  | Whether to use JavaScript instead of TypeScript. | No       | `false`  |
| `extension`   | The URL of an extension template to apply.       | No       | `none`   |
