# Introduction

This template provides a reusable setup for
importing [Material UI](https://mui.com/material-ui/getting-started/templates/?utm_source=croct) components, fully
integrated with Croct for content management, AB testing, and real-time personalization.

It supports downloading code, configuring slots, and extending functionality with additional actions.
If the current directory does not contain a project, the template creates a new one
using [Next.js](https://nextjs.org/?utm_source=croct).

## Usage

Here is an example of how to use this template:

```json
{
  "name": "import",
  "template": "material-ui://block/block",
  "options": {
    "id": "hero-section",
    "slotId": "slotId",
    "slotVersion": "slotVersion",
    "components": ["HeroSection.tsx"],
    "extension": "material-ui://component/hero-section/extension.json5"
  }
}
```

## Options

| Option        | Description                                                                    | Type        | Required | Default  |
|---------------|--------------------------------------------------------------------------------|-------------|----------|----------|
| `id`          | A unique identifier for the Material UI component, as defined in the registry. | `string`    | Yes      | –        |
| `version`     | The version of Next.js to use when generating a new project.                   | `string`    | No       | `latest` |
| `router`      | The router format to use (`app` or `page`).                                    | `string`    | No       | `app`    |
| `slotId`      | The variable name that holds the slot ID created or used by the template.      | `reference` | No       | –        |
| `slotVersion` | The variable name that holds the version of the slot.                          | `reference` | No       | –        |
| `components`  | A list of component files to download and include in the project.              | `array`     | No       | –        |
| `extension`   | The URL of an extension template to apply.                                     | No          | -        | –        |
