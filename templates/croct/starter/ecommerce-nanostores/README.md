# Introduction

This template sets up an ecommerce site using [React](https://react.dev/?utm_source=croct),
[Vite](https://vite.dev/?utm_source=croct), and [Croct Nanostores](https://croct-nano.fryuni.dev).

It demonstrates how to use the [croct-nanostores](https://croct-nano.fryuni.dev) library to add
personalized banners, product recommendations, and cart tracking to a storefront using
framework-agnostic [Nanostores](https://github.com/nanostores/nanostores) atoms.

## What's included

- **Announcement bar** — A personalized top-of-page banner managed via a Croct slot.
- **Hero banner** — A full-width hero section with title, subtitle, and call-to-action.
- **Product recommendations** — A personalized product grid powered by Croct content rules.
- **Cart tracking** — Cart state tracked via `trackCart`, triggering automatic content refresh.
- **Auto-refresh** — Content automatically updates when user behavior changes (e.g., cart modifications).

## Usage

To create a new project using this template, run:

```croct-cmd
croct use croct://starter/ecommerce-nanostores
```

## Options

The following options are available for this template:

| Option            | Description                                      | Required | Default         |
|-------------------|--------------------------------------------------|----------|-----------------|
| `name`            | The name of the project.                         | No       | `my-croct-shop` |
| `disableLauncher` | Whether to disable the project launcher.         | No       | `false`         |
