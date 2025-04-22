# Introduction

This template defines a personalized experience for e-commerce visitors coming from paid search campaigns.

It leverages [UTM parameters](https://docs.croct.com/reference/cql/data-types/marketing?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.e_commerce&utm_content=instagram_campaign) from ad URLs to align onsite content with the visitor’s search intent, creating a seamless and consistent journey from ad to landing page and beyond.

## What's included

This experience includes:

- **Components:** banner image, CTA, navbar, and carousel section
- **Slots:** navbar, carousel section, and section with featured products
- **Audience:** `campaign's source is "google" and campaign's term matches "shoes"`

Custom audiences can be defined using the [Contextual Query Language (CQL)](https://docs.croct.com/reference/cql/introduction?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.e_commerce&utm_content=search_campaign), a readable, natural-language-inspired syntax designed for flexibility and ease of use. It allows, for instance, to add two or more campaigns to the same audience using [or](https://docs.croct.com/reference/cql/expressions/operations/logical#or), [and](https://docs.croct.com/reference/cql/expressions/operations/logical#and), [starts with](https://docs.croct.com/reference/cql/expressions/tests/string#starts-with), [ends with](https://docs.croct.com/reference/cql/expressions/tests/string#ends-with), or [matches](https://docs.croct.com/reference/cql/expressions/tests/string#matches).

> 💬 utm_term
>
> Personalization with the `campaign's term` variable requires campaigns' final URLs with the `utm_term` parameter.

## Usage

To create a new experience using this template, run:

```js-pm
croct@latest use croct://experience/e-commerce/search-campaign
```
