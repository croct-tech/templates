# Introduction

This template defines a personalized experience for e-commerce websites that uses data from multiple sources, such as onsite behavior and inferred [interests](https://docs.croct.com/reference/cql/data-types/user#user-interests-prop?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.e_commerce&utm_content=interest), to deliver tailored recommendations for products, blog posts, and other offerings.

## What's included

This experience includes 4 components, 2 slots (a carousel and a testimonials sections), and the following audience:

```cql
user's interests includes "shoes"
```

Define custom audiences using the [Contextual Query Language (CQL)](https://docs.croct.com/reference/cql/introduction?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.e_commerce&utm_content=interest), a readable, natural-language-inspired syntax designed for flexibility and ease of use. It allows, for instance, to add two or more interests to the same audience using [or](https://docs.croct.com/reference/cql/expressions/operations/logical#or), [and](https://docs.croct.com/reference/cql/expressions/operations/logical#and), or [these quantifiers](https://docs.croct.com/reference/cql/expressions/quantifiers).

> [!IMPORTANT]
> Personalization with the `user's interests` variable requires implementing [data collection](https://docs.croct.com/reference/sdk/javascript/data-collection?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.e_commerce&utm_content=interests) in advance.

## Usage

To create a new experience using this template, run:

```js-pm
croct@latest use croct://experience/e-commerce/interest
```
