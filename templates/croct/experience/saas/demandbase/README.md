# Introduction

This template defines a personalized experience for SaaS visitors identified through [Demandbase](https://www.demandbase.com)
firmographic data.

![A split-screen comparison image showing two versions of an online store home page. The left side shows the default content with no special offers, and the right side shows personalized content based on the visitor's firmographic data.](./intro-illustration.png)

It leverages the industry, company size, and other firmographic attributes ingested from Demandbase to align onsite
content with the high-intent accounts you target, reinforcing your value proposition on every visit.

> [!IMPORTANT]
> Make sure you have completed the [Demandbase data activation](https://docs.croct.com/immersion/tutorials/demandbase-data-activation)
> integration before using this template. Since Demandbase usually takes a few moments to load, the firmographic data
> might not be available on the very first page view.

## What's included

This experience includes 3 components, 2 slots (an announcement bar and a home hero section), and the following
audience:

```cql
user's industry is "Financial Services"
```

Define custom audiences using the [Contextual Query Language (CQL)](https://docs.croct.com/reference/cql/introduction),
a readable, natural-language-inspired syntax designed for flexibility and ease of use. It allows, for instance, to
combine multiple firmographic attributes
using [or](https://docs.croct.com/reference/cql/expressions/operations/logical/or), [and](https://docs.croct.com/reference/cql/expressions/operations/logical/and), [starts with](https://docs.croct.com/reference/cql/expressions/tests/string/starts-with), [ends with](https://docs.croct.com/reference/cql/expressions/tests/string/ends-with),
or [matches](https://docs.croct.com/reference/cql/expressions/tests/string/matches).

## Usage

To create a new experience using this template, run:

```croct-cmd
croct use croct://experience/saas/demandbase
```
