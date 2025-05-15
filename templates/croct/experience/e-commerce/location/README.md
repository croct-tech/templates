# Introduction

This template defines a personalized experience for e-commerce visitors based on their current location.

![A split-screen comparison image showing two versions of an online store home page. The left side shows the default content with no special offers, and the right side shows personalized content based on the user's location.](./intro-illustration.png)

By leveraging [geographic information](https://docs.croct.com/reference/cql/data-types/location), content can be
tailored to specific regions while maintaining a consistent navigation experience for visitors outside the targeted
areas.

## What's included

This experience includes 4 components, 2 slots (an announcement bar and a carousel section), and the following audience:

```cql
location's cityName is "New York"
```

Define custom audiences using the [Contextual Query Language (CQL)](https://docs.croct.com/reference/cql/introduction),
a readable, natural-language-inspired syntax designed for flexibility and ease of use. It allows, for instance, to add
two or more regions to the same audience
using [or](https://docs.croct.com/reference/cql/expressions/operations/logical/or), [and](https://docs.croct.com/reference/cql/expressions/operations/logical/and), [is](https://docs.croct.com/reference/cql/expressions/tests/comparison/equal),
or [is in](https://docs.croct.com/reference/cql/expressions/tests/collection/in).

## Usage

To create a new experience using this template, run:

```croct-cmd
croct@latest use croct://experience/e-commerce/location
```
