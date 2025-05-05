# Introduction

This template creates a segmented experiment for new users who browse the website and splits them into two variants,
each with 50% of the traffic.

## What's included

This experience includes 2 components, a slot for a home hero section, an experiment with 2 variants (50/50 split), and
the following audience:

```cql
user is not returning
```

## Usage

To create a new experience using this template, run:

```croct-cmd
croct@latest use croct://experiment/segmented-users
```
