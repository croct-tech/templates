# Introduction

This template creates an experience to personalize your e-commerce website for visitors from Instagram paid campaigns interested in specific services or offerings.

By using [UTM parameters](https://docs.croct.com/reference/cql/data-types/marketing) from your ads' URL, you can match the content of your site to the user's interest — creating a consistent experience from ad to landing page and beyond.

## What's included

This experience includes:

- **Components:** banner image, CTA, navbar, and carousel section
- **Slots:** navbar, carousel section, and section with featured products
- **Audience:** `campaign's source is "instagram" and campaign's content matches "shoes"`

To create other audiences, you can use our [Contextual Query Language (CQL)](https://docs.croct.com/reference/cql/introduction). This English-based language combines the simplicity of natural language with an intuitive syntax, making it easy for both technical and non-technical users. You can, for instance, add two or more campaigns to the same audience using [or](https://docs.croct.com/reference/cql/expressions/operations/logical#or), [and](https://docs.croct.com/reference/cql/expressions/operations/logical#and), [starts with](https://docs.croct.com/reference/cql/expressions/tests/string#starts-with), [ends with](https://docs.croct.com/reference/cql/expressions/tests/string#ends-with), or [matches](https://docs.croct.com/reference/cql/expressions/tests/string#matches).

## Usage

To create a new experience using this template, run:

```js-pm
croct@latest use croct://experience/e-commerce/instagram-campaign
```
