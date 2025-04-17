# Introduction

This utility template finds an available directory name for creating a new project, starting from a given base name.

If the base name is unused, it will be used as-is. Otherwise, the template appends an incrementing number (e.g., `my-app`, `my-app-1`, `my-app-2`, etc.) until it finds a free directory.

The base name is taken from the variable defined in the `reference` option. Once a unique name is found, the variable is updated with the final result.

## Usage

Add the action to import the template:

```json
{
  "name": "import",
  "template": "croct://utils/filename-generator",
  "options": {
    "reference": "projectName"
  }
}
```

Ensure the `reference` variable is defined beforehand:

```diff-json
[
  {
    "name": "define",
    "variables": {
*      "projectName": "my-app"
    }
  },
  {
    "name": "import",
    "template": "croct://utils/filename-generator",
    "options": {
      "reference": "projectName"
    }
  },
  {
    "name": "print",
    "message": "Directory name: ${this.projectName}"
  }
]
```

## Options

The following options are available for this template:

| Option      | Description                            | Required | Default |
|-------------|----------------------------------------|----------|---------|
| `reference` | The variable used to store the result. | Yes      | None    |
