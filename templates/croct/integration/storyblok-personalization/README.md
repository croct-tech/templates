# Introduction

Looking to add **content personalization** to your Storyblok-powered site?

This template brings real-time personalization to [Storyblok](https://www.storyblok.com/?utm_source=croct) with Croct,
adapting your content to each visitor without changing your CMS or integrating with other third-party analytics tools.

It's the fastest way to add AB testing and personalization on top of Storyblok.

> [!TIP Integration]
> Learn more about the Croct + Storyblok integration by checking the [resulting project repo](https://github.com/croct-tech/croct-storyblok-project) or exploring the [integration page](https://croct.com/integrations/storyblok).

Unlike currently available plugins, you can personalize content at the block level rather than the field level. Croct
replaces static block content with dynamic content, allowing you to manage everything directly on the Storyblok UI.

Since it comes with built-in audience segmentation and analytics, there's no need to work on extra integrations with
CDPs to segment visitors or analytics tools to gather insights.

Using Croct, you get:

* Content personalization based on location, behavior, or custom rules
* Built-in analytics and Bayesian analysis for every variant and experience
* Seamless compatibility with your existing Storyblok content
* A ready-to-use home hero you can render anywhere in your Storyblok site

> [!NOTE Forever-free]
> This template is compatible with features available on the forever-free plan.

## What's included

This template creates a simple **home hero** so you have something to personalize right away:

* A `hero-section` component and a `home-hero` slot with **default content**.
* An audience targeting **returning visitors**:

  ```cql
  user is returning
  ```

* A personalized experience that swaps the hero **content** for that audience:

  * **Default heading:** _One platform for modern teams_
  * **Personalized heading:** _Welcome back to the platform_

Learn more about the Storyblok integration on the [integration page](https://croct.com/integrations/storyblok).

## Usage

Run the following command in your project to apply this template:

```croct-cmd
croct use croct://integration/storyblok-personalization
```
