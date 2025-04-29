# Introduction

This template defines a personalized experience for SaaS visitors coming from LinkedIn paid campaigns.

It leverages [UTM parameters](https://docs.croct.com/reference/cql/data-types/marketing?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.saas&utm_content=linkedin_campaign) from ad URLs to align onsite content with the visitor’s interests, creating a seamless and consistent journey from ad to landing page and beyond.

## What's included

This experience includes 4 components, 3 slots (a navbar, a home hero, and a home featured topics sections), and the following audience:

```cql
campaign's source is "linkedin" and campaign's content matches "business"
```

Define custom audiences using the [Contextual Query Language (CQL)](https://docs.croct.com/reference/cql/introduction?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.saas&utm_content=linkedin_campaign), a readable, natural-language-inspired syntax designed for flexibility and ease of use. It allows, for instance, to add two or more campaigns to the same audience using [or](https://docs.croct.com/reference/cql/expressions/operations/logical#or), [and](https://docs.croct.com/reference/cql/expressions/operations/logical#and), [starts with](https://docs.croct.com/reference/cql/expressions/tests/string#starts-with), [ends with](https://docs.croct.com/reference/cql/expressions/tests/string#ends-with), or [matches](https://docs.croct.com/reference/cql/expressions/tests/string#matches).

## Usage

To create a new experience using this template, run:

```croct-cmd
croct@latest use croct://experience/saas/linkedin-campaign
```
