# Introduction

Looking to personalize your **Sanity-powered site for target accounts** using **Clearbit data**?

This template combines [Sanity.io](https://www.sanity.io/?utm_source=croct), [Next.js](https://nextjs.org/?utm_source=croct),
and Croct to adapt your content to an account's industry and company size in real time, using the firmographic data you
activate from [Clearbit](https://clearbit.com?utm_source=croct).

It's the fastest way to launch account-based personalization on Sanity Studio with no CMS migration.

Using Croct, you get:

* Firmographic personalization driven by Clearbit company data
* Real-time audience evaluation with no extra integration work
* Built-in analytics and Bayesian analysis for every experience
* Seamless compatibility with your existing Sanity schemas

> [!NOTE Forever-free]
> This template is compatible with features available on the forever-free plan.

## Prerequisites

To feed firmographic data into the audience, complete the
[Clearbit data activation](https://docs.croct.com/immersion/tutorials/clearbit-data-activation) first. Until data flows
in, visitors keep seeing the default content.

## What's included

Besides the [Sanity integration](http://croct.com/templates/integration/cms/sanity) itself, this template creates a
personalized experience targeting **mid-sized financial services** accounts, using the firmographic attributes ingested
from Clearbit:

```cql
user's industry is "Financial Services"
and user's employees is "51-250"
```

As an example, the home hero content adapts to that audience:

* **Default heading:** _Croct + Sanity + Next.js_
* **Personalized heading:** _Built for growing financial teams_

## Usage

Run the following command in an empty directory to create a new example project using this template:

```croct-cmd
croct use croct://integration/sanity-clearbit
```
