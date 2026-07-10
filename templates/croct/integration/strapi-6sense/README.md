# Introduction

Looking to personalize your **Strapi-powered site for target accounts** using **6sense data**?

This template combines [Strapi.io](https://www.strapi.io/?utm_source=croct),
[Next.js](https://nextjs.org/?utm_source=croct), and Croct to adapt your content to an account's industry, company size,
or buying stage in real time, using the firmographic data you activate from [6sense](https://6sense.com?utm_source=croct).

It's the fastest way to launch account-based personalization on top of Strapi CMS, with no CMS migration.

> [!TIP Integration]
> Learn more about the Croct + Strapi integration on the [integration page](https://croct.com/integrations/strapi).

Using Croct, you get:

* Firmographic personalization driven by 6sense intent and company data
* Real-time audience evaluation with no extra integration work
* Built-in analytics and Bayesian analysis for every experience
* Seamless compatibility with your existing Strapi schemas

> [!NOTE Forever-free]
> This template is compatible with features available on the forever-free plan.

## Prerequisites

To feed firmographic data into the audience, complete the
[6sense data activation](https://docs.croct.com/immersion/integrations/firmographics/6sense) first. Until data flows in, visitors keep seeing the default content.

## What's included

Besides the [Strapi integration](http://croct.com/templates/integration/cms/strapi) itself, this template creates a
personalized experience targeting **enterprise financial services** accounts, using the firmographic attributes ingested
from 6sense:

```cql
user's industry is "Financial Services"
and user's employees is "10,000+"
```

As an example, the home hero content adapts to that audience:

* **Default heading:** _Launch your content into orbit_
* **Personalized heading:** _Built for financial services leaders_

## Usage

Run the following command in an empty directory to create a new example project using this template:

```croct-cmd
croct use croct://integration/strapi-6sense
```
