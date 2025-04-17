# Introduction

This template creates an experience to personalize your SaaS website for visitors from a given ABM campaign.

By using [UTM parameters](https://docs.croct.com/reference/cql/data-types/marketing) from your campaigns' URL, you can match the content of your site to the user's interest — creating a consistent experience from ad to landing page and beyond.

## What's included

This experience includes:

- **Components:** CTA, announcement bar, and hero section
- **Slots:** announcement bar and home hero section
- **Audience:** `campaign's source is "linkedin" and campaign's name matches "acme"`

To create other audiences, you can use our [Contextual Query Language (CQL)](https://docs.croct.com/reference/cql/introduction). This English-based language combines the simplicity of natural language with an intuitive syntax, making it easy for both technical and non-technical users. You can, for instance, add two or more campaigns to the same audience using [or](https://docs.croct.com/reference/cql/expressions/operations/logical#or), [and](https://docs.croct.com/reference/cql/expressions/operations/logical#and), [starts with](https://docs.croct.com/reference/cql/expressions/tests/string#starts-with), [ends with](https://docs.croct.com/reference/cql/expressions/tests/string#ends-with), or [matches](https://docs.croct.com/reference/cql/expressions/tests/string#matches).

## Usage

To create a new experience using this template, run:

```js-pm
croct@latest use croct://experience/saas/abm-campaign
```
