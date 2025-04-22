# Introduction

This template defines a personalized experience for SaaS websites that uses data from multiple sources, such as onsite behavior and inferred [interests](https://docs.croct.com/reference/cql/data-types/user#user-interests-prop?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.saas&utm_content=interest), to deliver tailored recommendations for products, blog posts, and other offerings.

## What's included

This experience includes:

- **Components:** CTA, content cards, hero section, and testimonials
- **Slots:** home hero section, home featured topics section, and testimonials
- **Audience:** `user's interest includes "student"`

Custom audiences can be defined using the [Contextual Query Language (CQL)](https://docs.croct.com/reference/cql/introduction?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.saas&utm_content=interest), a readable, natural-language-inspired syntax designed for flexibility and ease of use. It allows, for instance, to add two or more interests to the same audience using [or](https://docs.croct.com/reference/cql/expressions/operations/logical#or), [and](https://docs.croct.com/reference/cql/expressions/operations/logical#and), or [these quantifiers](https://docs.croct.com/reference/cql/expressions/quantifiers).

## Usage

To create a new experience using this template, run:

```js-pm
croct@latest use croct://experience/saas/interest
```
