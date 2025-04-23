# Introduction

This template defines a personalized experience for SaaS visitors identified as existing customers.

By segmenting customers from new visitors, the experience can emphasize loyalty-building through exclusive benefits, rewards, and product recommendations based on purchase history.

## What's included

This experience includes 3 components, 2 slots (an announcement bar and a home hero section), and the following audience:

```cql
user's activities include "login" and user's plan is not "free"
```

Define custom audiences using the [Contextual Query Language (CQL)](https://docs.croct.com/reference/cql/introduction?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.saas&utm_content=customer), a readable, natural-language-inspired syntax designed for flexibility and ease of use. It supports profile [enrichment with first-party data](https://docs.croct.com/reference/sdk/javascript/data-collection) and allows the use of [custom attributes](https://docs.croct.com/reference/cql/data-types/user) to fine-tune personalization strategies. 

## Usage

To create a new experience using this template, run:

```js-pm
croct@latest use croct://experience/saas/customer
```
