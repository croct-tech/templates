# Introduction

This template creates an experience to personalize your e-commerce website for visitors based on their current location.

By using [geographic information](https://docs.croct.com/reference/cql/data-types/location), you can match your website's content to communicate only to users browsing from specific regions without affecting the navigation experience elsewhere.

## What's included

This experience includes:

- **Components:** banner image, CTA, announcement bar, and carousel section
- **Slots:** announcement bar and carousel section
- **Audience:** `location's city is "New York"`

To create other audiences, you can use our [Contextual Query Language (CQL)](https://docs.croct.com/reference/cql/introduction). This English-based language combines the simplicity of natural language with an intuitive syntax, making it easy for both technical and non-technical users. You can, for instance, add two or more regions to the same audience using [or](https://docs.croct.com/reference/cql/expressions/operations/logical#or), [and](https://docs.croct.com/reference/cql/expressions/operations/logical#and), [is](https://docs.croct.com/reference/cql/expressions/tests/comparison#equal), or [is in](https://docs.croct.com/reference/cql/expressions/tests/collection#in).

## Usage

To create a new experience using this template, run:

```js-pm
croct@latest use croct://experience/e-commerce/location
```
