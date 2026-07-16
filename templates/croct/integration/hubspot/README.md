# Introduction

Looking to **personalize and test HubSpot forms** without touching code?

This template connects your [HubSpot forms](https://www.hubspot.com/products/marketing/forms?utm_source=croct) to Croct
so you can decide which form each visitor sees. Instead of hardcoding the form ID in your page, you store it in a
[slot](https://docs.croct.com/explanation/slot) and render whichever form ID it returns.

From there, an [AB test](https://docs.croct.com/explanation/experiment) or
a [personalized experience](https://docs.croct.com/explanation/experience/introduction) can change the form ID per user,
and your page renders the matching form automatically.

> [!TIP Integration]
> Learn more about the Croct + HubSpot forms integration by exploring the [integration page](https://croct.com/integrations/hubspot).

Using Croct, you get:

* AB testing support with real-time audience evaluation
* Form personalization based on location, behavior, or custom rules
* Built-in analytics and Bayesian analysis for every variant and experience
* Support for both legacy and new HubSpot forms

> [!NOTE Forever-free]
> This template is compatible with features available on the forever-free plan.

## What's included

This template creates a `hubspot-form` component with a single `formId` text field, a `hubspot-form` slot that stores the
form to render, and adds the slot to your project.

## Usage

Run the following command in your project to apply this template:

```croct-cmd
croct use croct://integration/hubspot
```

Once installed, fetch the slot and embed the returned form ID. The
[HubSpot forms tutorial](https://docs.croct.com/immersion/integrations/crm/hubspot-forms) walks through embedding the form and
tracking submissions.
