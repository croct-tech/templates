# Introduction

This template creates an experience to personalize your e-commerce website for visitors from paid search campaigns looking for specific services or offerings.

By using [UTM parameters](https://docs.croct.com/reference/cql/data-types/marketing) from your ads' URL, you can match the content of your site to the user's search intent — creating a consistent experience from ad to landing page and beyond.

## What's included

This experience includes:

- **Components:** banner image, CTA, navbar, and carousel section
- **Slots:** navbar, carousel section, and section with featured products
- **Audience:** `campaign's source is "google" and campaign's term matches "shoes"`

To create other audiences, you can use our [Contextual Query Language (CQL)](https://docs.croct.com/reference/cql/introduction). This English-based language combines the simplicity of natural language with an intuitive syntax, making it easy for both technical and non-technical users. You can, for instance, add two or more campaigns to the same audience using [or](https://docs.croct.com/reference/cql/expressions/operations/logical#or), [and](https://docs.croct.com/reference/cql/expressions/operations/logical#and), [starts with](https://docs.croct.com/reference/cql/expressions/tests/string#starts-with), [ends with](https://docs.croct.com/reference/cql/expressions/tests/string#ends-with), or [matches](https://docs.croct.com/reference/cql/expressions/tests/string#matches).

> 💬 utm_term
>
> Make sure your paid search campaigns' final URLs have the `utm_term` parameter.

## Usage

To create a new experience using this template, run:

```js-pm
croct@latest use croct://experience/e-commerce/search-campaign
```
