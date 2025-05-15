# Introduction

This template creates a reusable setup for importing [Magic UI](https://magicui.design?utm_source=croct) components, fully integrated
with Croct for content management, AB testing, and real-time personalization.

It supports downloading code, configuring slots, and extending functionality with additional
custom actions. If the current directory does not contain a project, the template creates a new one using [Next.js](https://nextjs.org/?utm_source=croct).

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
    "action": {
      "name": "run",
      "actions": [
        {
          "name": "create-resource",
          "resources": {
            "components": {
              "magic-ui-animated-list": {
                "name": "Magic UI – Animated list",
                "description": "A list that animates items with staggered timing, perfect for showcasing notifications or events on your landing page.",
                "schema": "${import('./configuration/animated-list-schema.json')}"
              }
            },
            "slots": {
              "magic-ui-animated-list": {
                "name": "Magic UI – Animated list",
                "component": "magic-ui-animated-list",
                "content": {
                  "en": "${import('./configuration/animated-list-content.en.json')}"
                }
              }
            }
          },
          "result": {
            "slots": {
              "magic-ui-animated-list": {
                "id": "slotId",
                "version": "slotVersion"
              }
            }
          }
        }
      ]
    }
  }
}
```

## Options

| Option        | Description                                                                     | Type        | Required | Default  |
|---------------|---------------------------------------------------------------------------------|-------------|----------|----------|
| `id`          | A unique identifier for the Magic UI component, as defined in the registry.     | `string`    | Yes      | –        |
| `version`     | The version of Next.js to use when generating a new project.                    | `string`    | No       | `latest` |
| `router`      | The router format to use (`app` or `page`).                                     | `string`    | No       | `app`    |
| `slotId`      | The variable name that holds the slot ID created or used by the template.       | `reference` | Yes      | –        |
| `slotVersion` | The variable name that holds the version of the slot.                           | `reference` | Yes      | –        |
| `components`  | A list of Magic UI component files to download and include in the project.      | `array`     | No       | –        |
| `action`      | An optional block of actions to run as part of the setup (e.g., slot creation). | `object`    | No       | –        |
