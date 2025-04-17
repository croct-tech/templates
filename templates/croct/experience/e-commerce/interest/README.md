# Introduction

This template creates an experience to personalize your e-commerce website for visitors based on their [interests](https://docs.croct.com/reference/cql/data-types/user#user-interests-prop).

By using data from various sources, such as website interactions and declared preferences, you can match your website's content to show personalized recommendations of products, blog posts, and other offerings.

## What's included

This experience includes:

- **Components:** banner image, CTA, testimonials, and carousel section
- **Slots:** testimonials and carousel section
- **Audience:** `user's interest includes "shoes"`

To create other audiences, you can use our [Contextual Query Language (CQL)](https://docs.croct.com/reference/cql/introduction). This English-based language combines the simplicity of natural language with an intuitive syntax, making it easy for both technical and non-technical users. You can, for instance, add two or more interests to the same audience using [or](https://docs.croct.com/reference/cql/expressions/operations/logical#or), [and](https://docs.croct.com/reference/cql/expressions/operations/logical#and), or [these quantifiers](https://docs.croct.com/reference/cql/expressions/quantifiers).

## Usage

To create a new experience using this template, run:

```js-pm
croct@latest use croct://experience/e-commerce/interest
```
