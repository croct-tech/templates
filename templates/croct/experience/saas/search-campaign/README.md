# Introduction

This template defines a personalized experience for SaaS visitors coming from paid search campaigns.

![A split-screen comparison image showing two versions of an online store home page. The left side shows the default content with no special offers, and the right side shows personalized content based on the student-related term the user searched on Google.](./intro-illustration.png)

It leverages [UTM parameters](https://docs.croct.com/reference/cql/data-types/marketing/campaign) from ad URLs to align onsite
content with the visitor’s search intent, creating a seamless and consistent journey from ad to landing page and beyond.

## What's included

This experience includes 4 components, 3 slots (a home hero, a home featured topics, and a testimonials sections), and
the following audience:

```cql
campaign's source is "google" and campaign's term matches "student"
```

Define custom audiences using the [Contextual Query Language (CQL)](https://docs.croct.com/reference/cql/introduction),
a readable, natural-language-inspired syntax designed for flexibility and ease of use. It allows, for instance, to add
two or more campaigns to the same audience
using [or](https://docs.croct.com/reference/cql/expressions/operations/logical/or), [and](https://docs.croct.com/reference/cql/expressions/operations/logical/and), [starts with](https://docs.croct.com/reference/cql/expressions/tests/string/starts-with), [ends with](https://docs.croct.com/reference/cql/expressions/tests/string/ends-with),
or [matches](https://docs.croct.com/reference/cql/expressions/tests/string/matches).

> [!IMPORTANT]
> Personalization with the `campaign's term` variable requires campaigns' final URLs with the `utm_term` parameter.

## Usage

To create a new experience using this template, run:

```croct-cmd
croct use croct://experience/saas/search-campaign
```
