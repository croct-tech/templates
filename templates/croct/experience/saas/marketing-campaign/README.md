# Introduction

This template defines a personalized experience for SaaS visitors coming from a given campaign.

It leverages [UTM parameters](https://docs.croct.com/reference/cql/data-types/marketing?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.saas&utm_content=instagram_campaign) from ad URLs to align onsite content with the visitor’s interests, creating a seamless and consistent journey from ad to landing page and beyond.

## What's included

This experience includes:

- **Components:** CTA, content cards, hero section, and testimonials
- **Slots:** home hero section, home featured topics section, and testimonials
- **Audience:** `campaign's name matches "student"`

Custom audiences can be defined using the [Contextual Query Language (CQL)](https://docs.croct.com/reference/cql/introduction?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.saas&utm_content=marketing_campaign), a readable, natural-language-inspired syntax designed for flexibility and ease of use. It allows, for instance, to add two or more campaigns to the same audience using [or](https://docs.croct.com/reference/cql/expressions/operations/logical#or), [and](https://docs.croct.com/reference/cql/expressions/operations/logical#and), [starts with](https://docs.croct.com/reference/cql/expressions/tests/string#starts-with), [ends with](https://docs.croct.com/reference/cql/expressions/tests/string#ends-with), or [matches](https://docs.croct.com/reference/cql/expressions/tests/string#matches).

## Usage

To create a new experience using this template, run:

```js-pm
croct@latest use croct://experience/saas/marketing-campaign
```
