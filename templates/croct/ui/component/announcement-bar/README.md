# Introduction

Announcement bars highlight time-sensitive updates, offers, legal notices, or other key messages in a clear and
accessible way.

Placing them at the top of the screen and using effective color, layout, and typography ensures the message stands out
without interrupting the browsing experience and helps guide visitor attention to essential information or next steps.

Besides showing general messaging, running AB tests with different variations and applying personalization, such as
tailoring promotions based on visitor location or behavior, can help optimize visibility, boost engagement, and drive
higher conversion.

This template adds an announcement bar component to your project or creates a new project using
[Next.js](https://nextjs.org/?utm_source=croct) if none is found in the current directory.

It comes fully integrated with Croct, giving you CMS, AB testing, and personalization out of the box.

## Usage

To create a new project using this template, run:

```croct-cmd
croct@latest use croct://ui/component/announcement-bar
```

You can customize the template by specifying options:

```croct-cmd
croct@latest use croct://ui/component/announcement-bar --router=page
```

## Options

The following options are available for this template:

| Option        | Description                                      | Required | Default  |
|---------------|--------------------------------------------------|----------|----------|
| `projectName` | The name of the project.                         | No       | `my-app` |
| `version`     | The Next.js version to use.                      | No       | `latest` |
| `router`      | The router to use (`app` or `page`).             | No       | `app`    |
| `javascript`  | Whether to use JavaScript instead of TypeScript. | No       | `false`  |
| `content`     | The URL of the slot content to use.              | No       | `none`   |
| `extension`   | The URL of an extension template to apply.       | No       | `none`   |
