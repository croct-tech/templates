# Introduction

This template defines a personalized experience for SaaS visitors based on the first page they land on.

By referencing the [session's landing page](https://docs.croct.com/reference/cql/data-types/session?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.saas&utm_content=landing_page#web-session-landingpage-prop), it’s possible to infer visitor intent and adjust onsite content to create a consistent and relevant experience across the website.

## What's included

This experience includes 4 components, 3 slots (a home hero, a home featured topics, and a testimonials sections), and the following audience:

```cql
session's landingPage matches "student"
```

Define custom audiences using the [Contextual Query Language (CQL)](https://docs.croct.com/reference/cql/introduction?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.saas&utm_content=landing_page), a readable, natural-language-inspired syntax designed for flexibility and ease of use. It allows, for instance, to add two or more landing pages to the same audience using [or](https://docs.croct.com/reference/cql/expressions/operations/logical#or), [and](https://docs.croct.com/reference/cql/expressions/operations/logical#and), [starts with](https://docs.croct.com/reference/cql/expressions/tests/string#starts-with), [ends with](https://docs.croct.com/reference/cql/expressions/tests/string#ends-with), or [matches](https://docs.croct.com/reference/cql/expressions/tests/string#matches).

## Usage

To create a new experience using this template, run:

```croct-cmd
croct@latest use croct://experience/saas/landing-page
```
