# Introduction

This template defines a personalized experience for e-commerce visitors based on their [shopping cart](https://docs.croct.com/reference/cql/data-types/shopping?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.e_commerce&utm_content=cart) total.

It can be used to encourage higher-order values by highlighting incentives such as free shipping after certain thresholds.

## What's included

This experience includes 4 components, 2 slots (an announcement bar and a carousel section), and the following audience:

```cql
cart's total is less than 150
```

Define custom audiences using the [Contextual Query Language (CQL)](https://docs.croct.com/reference/cql/introduction?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.e_commerce&utm_content=cart), a readable, natural-language-inspired syntax designed for flexibility and ease of use. It supports, for instance, other comparisons like [greater than](https://docs.croct.com/reference/cql/expressions/tests/comparison#greater-than) or [between](https://docs.croct.com/reference/cql/expressions/tests/comparison#between).

> [!IMPORTANT]
> Personalization with the `cart` variable requires tracking [e-commerce events](https://docs.croct.com/reference/event/overview?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.e_commerce&utm_content=cart#e-commerce-events) in advance.

## Usage

To create a new experience using this template, run:

```croct-cmd
croct@latest use croct://experience/e-commerce/cart
```
