# Introduction

Looking to personalize your **Storyblok-powered site for target accounts** using **Clearbit data**?

This template brings account-based personalization to [Storyblok](https://www.storyblok.com/?utm_source=croct) with
Croct, adapting your content to an account's industry and company size in real time, using the firmographic data you
activate from [Clearbit](https://clearbit.com?utm_source=croct).

> [!TIP Integration]
> Learn more about the Croct + Storyblok integration by checking the [resulting project repo](https://github.com/croct-tech/croct-storyblok-project) or exploring the [integration page](https://croct.com/integrations/storyblok).

Using Croct, you get:

* Firmographic personalization driven by Clearbit company data
* Real-time audience evaluation with no extra integration work
* Built-in analytics and Bayesian analysis for every experience
* A ready-to-use home hero you can render anywhere in your Storyblok site

> [!NOTE Forever-free]
> This template is compatible with features available on the forever-free plan.

## Prerequisites

To feed firmographic data into the audience, complete the
[Clearbit data activation](https://docs.croct.com/immersion/integrations/firmographics/clearbit) first. Until data flows in, visitors keep seeing the default content.

## What's included

This template creates a simple **home hero** so you have something to personalize right away:

* A `hero-section` component and a `home-hero` slot with **default content**.
* An audience targeting **mid-sized financial services** accounts, using the firmographic attributes ingested from
  Clearbit:

  ```cql
  user's industry is "Financial Services"
  and user's employees is "51-250"
  ```

* A personalized experience that swaps the hero **content** for that audience:

  * **Default heading:** _One platform for modern teams_
  * **Personalized heading:** _Built for growing financial teams_

Learn more about the Storyblok integration on the [integration page](https://croct.com/integrations/storyblok).

## Usage

Run the following command in your project to apply this template:

```croct-cmd
croct use croct://integration/storyblok-clearbit
```
