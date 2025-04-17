# Introduction

This template creates an experience to personalize your e-commerce website for visitors based on their cart total amount.

By using the [cart](https://docs.croct.com/reference/cql/data-types/shopping) information, you can incentivize them to add more products and reach the minimum purchase threshold for free shipping, for example.

## What's included

This experience includes:

- **Components:** banner image, CTA, announcement bar, and carousel section
- **Slots:** announcement bar and carousel section
- **Audience:** `cart's total is less than 150`

To create other audiences, you can use our [Contextual Query Language (CQL)](https://docs.croct.com/reference/cql/introduction). This English-based language combines the simplicity of natural language with an intuitive syntax, making it easy for both technical and non-technical users. You can, for instance, change the comparison using [greater than](https://docs.croct.com/reference/cql/expressions/tests/comparison#greater-than) or [between](https://docs.croct.com/reference/cql/expressions/tests/comparison#between).

> 💬 Event tracking
>
> Make sure to track [e-commerce events](https://docs.croct.com/reference/event/overview#e-commerce-events) before using the `cart` variable.

## Usage

To create a new experience using this template, run:

```js-pm
croct@latest use croct://experience/e-commerce/cart
```
