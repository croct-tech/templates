# Introduction

This template integrates [Shadcn UI](https://ui.shadcn.com/?utm_source=croct) components into a project, similar to running the `shadcn add` command but structured as a reusable template.

If Shadcn UI is not already configured, the template automatically handles the setup.

> [!IMPORTANT Tailwind CSS required]
> Make sure [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite?utm_source=croct) is set up before using this template.

## Usage

Add the action to import the template:

```json
{
  "name": "import",
  "template": "shadcn-ui://ui/component",
  "options": {
    "components": ["button", "badge"]
  }
}
```

## Options

The following options are available for this template:

| Option       | Description                                   | Required | Default |
|--------------|-----------------------------------------------|----------|---------|
| `components` | The names of the Shadcn UI components to add. | Yes      | None    |
