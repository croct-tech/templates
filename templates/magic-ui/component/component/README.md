# Introduction

This template creates a reusable setup for importing [Magic UI](https://magicui.design?utm_source=croct) components, fully integrated
with Croct for content management, AB testing, and real-time personalization.

It supports downloading code, configuring slots, and extending functionality with additional actions. 
If the current directory does not contain a project, the template creates a new one using [Next.js](https://nextjs.org/?utm_source=croct).

## Usage

Here is an example of how to use this template:

```json
{
  "name": "import",
  "template": "magic-ui://component/component",
  "options": {
    "id": "animated-list",
    "slotId": "slotId",
    "slotVersion": "slotVersion",
    "components": ["notification-list.tsx"],
    "extension": "magic-ui://component/marquee/extension.json5"
  }
}
```

## Options

| Option        | Description                                                                 | Required | Default  |
|---------------|-----------------------------------------------------------------------------|----------|----------|
| `id`          | A unique identifier for the Magic UI component, as defined in the registry. | Yes      | –        |
| `version`     | The version of Next.js to use when generating a new project.                | No       | `latest` |
| `router`      | The router format to use (`app` or `page`).                                 | No       | `app`    |
| `slotId`      | The variable name that holds the slot ID created or used by the template.   | Yes      | –        |
| `slotVersion` | The variable name that holds the version of the slot.                       | Yes      | –        |
| `components`  | A list of Magic UI component files to download and include in the project.  | No       | –        |
| `extension`   | The URL of an extension template to apply.                                  | Yes      | -        |
