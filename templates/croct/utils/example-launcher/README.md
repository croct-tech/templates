# Introduction

This utility template detects and starts a local development server if one is not already running,
by looking for common project manifests like `package.json` to find the appropriate start command.

It is especially useful for templates that include examples meant to be viewed after installation.
It supports popular frameworks and bundlers like [Next.js](https://nextjs.org/), [Vite](https://vitejs.dev/), and [Parcel](https://parceljs.org/).

## Usage

Add the action to import the template:

```json
{
  "name": "import",
  "template": "croct://utils/example-launcher"
}
```

To open a specific path in the browser, pass the `path` option:

```diff-json
{
  "name": "import",
  "template": "croct://utils/example-launcher",
  "options": {
*    "path": "path/to/example"
  }
}
```

If no development server is found, the template does nothing and silently continues. To ensure users are informed, it is recommended to print a message beforehand:

```diff-json
[
  {
    "name": "print",
*    "message": "The example is at app/example"
  },
  {
    "name": "import",
    "template": "croct://utils/example-launcher",
    "options": {
      "path": "/example"
    }
  }
]
```

## Options

The following options are available for this template:

| Option | Description                      | Required | Default |
|--------|----------------------------------|----------|---------|
| `path` | Path to open in the browser.     | No       | `/`     |
