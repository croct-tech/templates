# Introduction

This template creates an experience to personalize your SaaS website for visitors based on the first page they see.

By using the [session's landing page](https://docs.croct.com/reference/cql/data-types/session#web-session-landingpage-prop), you can infer their interests and match the website's content to the user's search intent — creating a consistent experience across the website.

## What's included

This experience includes:

- **Components:** CTA, content cards, hero section, and testimonials
- **Slots:** home hero section, home featured topics section, and testimonials
- **Audience:** `session's landingPage matches "student"`

To create other audiences, you can use our [Contextual Query Language (CQL)](https://docs.croct.com/reference/cql/introduction). This English-based language combines the simplicity of natural language with an intuitive syntax, making it easy for both technical and non-technical users. You can, for instance, add two or more landing pages to the same audience using [or](https://docs.croct.com/reference/cql/expressions/operations/logical#or), [and](https://docs.croct.com/reference/cql/expressions/operations/logical#and), [starts with](https://docs.croct.com/reference/cql/expressions/tests/string#starts-with), [ends with](https://docs.croct.com/reference/cql/expressions/tests/string#ends-with), or [matches](https://docs.croct.com/reference/cql/expressions/tests/string#matches).

## Usage

To create a new experience using this template, run:

```js-pm
croct@latest use croct://experience/saas/landing-page
```
