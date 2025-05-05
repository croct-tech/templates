# Introduction

This template defines a personalized experience for e-commerce visitors based on the first page they land on.

![A split-screen comparison image showing two versions of an online store home page. The left side shows the default content with no special offers, and the right side shows personalized content based on the shoe-related content the user has read.](./intro-illustration.png)

By referencing
the [session's landing page](https://docs.croct.com/reference/cql/data-types/session#web-session-landingpage-prop), it’s
possible to infer visitor intent and adjust onsite content to create a consistent and relevant experience across the
website.

## What's included

This experience includes 4 components, 2 slots (a carousel and a testimonials sections), and the following audience:

```cql
session's landingPage matches "shoes"
```

Define custom audiences using the [Contextual Query Language (CQL)](https://docs.croct.com/reference/cql/introduction),
a readable, natural-language-inspired syntax designed for flexibility and ease of use. It allows, for instance, to add
two or more landing pages to the same audience
using [or](https://docs.croct.com/reference/cql/expressions/operations/logical#or), [and](https://docs.croct.com/reference/cql/expressions/operations/logical#and), [starts with](https://docs.croct.com/reference/cql/expressions/tests/string#starts-with), [ends with](https://docs.croct.com/reference/cql/expressions/tests/string#ends-with),
or [matches](https://docs.croct.com/reference/cql/expressions/tests/string#matches).

## Usage

To create a new experience using this template, run:

```croct-cmd
croct@latest use croct://experience/e-commerce/landing-page
```
