# Introduction

This template adds an international phone input field to your project using [`react-phone-number-input`](https://github.com/catamphetamine/react-phone-number-input), 
enhanced with **location detection** via the **Croct Evaluation API**. 

The field automatically detects the user's location based on IP and sets the appropriate country code and formatting.

Built with [Next.js](https://nextjs.org/?utm_source=croct) and fully integrated with Croct,
this phone input template is ideal for forms and signup flows that require seamless **international phone number handling** 
and **geo-personalized experiences**.

## Usage

To create a new project using this template, run:

```croct-cmd
croct@latest use npm://react-phone-number-input
```

You can customize the template by specifying options:

```croct-cmd
croct@latest use npm://react-phone-number-input --router=page
```

## Options

The following options are available for this template:

| Option        | Description                                          | Required | Default  |
|---------------|------------------------------------------------------|----------|----------|
| `projectName` | The name of the project.                             | No       | `my-app` |
| `version`     | The Next.js version to use.                          | No       | `latest` |
| `router`      | The router to use (`app` or `page`).                 | No       | `app`    |
| `javascript`  | Whether to use JavaScript instead of TypeScript.     | No       | `false`  |
