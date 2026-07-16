# Introduction

Looking to show **the right HubSpot form to each visitor**?

This template connects your [HubSpot forms](https://www.hubspot.com/products/marketing/forms?utm_source=croct) to Croct
so you can personalize the form each visitor sees, without touching code or integrating other analytics tools.

The form ID lives in a [slot](https://docs.croct.com/explanation/slot), so a
[personalized experience](https://docs.croct.com/explanation/experience/introduction) changes the slot's return value and
your page renders the matching form automatically.

> [!TIP Integration]
> Learn more about the Croct + HubSpot forms integration by exploring the [integration page](https://croct.com/integrations/hubspot).

Using Croct, you get:

* Form personalization based on location, behavior, or custom rules
* Built-in analytics and Bayesian analysis for every experience
* Support for both legacy and new HubSpot forms

> [!NOTE Forever-free]
> This template is compatible with features available on the forever-free plan.

## What's included

Besides the [integration](http://croct.com/templates/integration/forms/hubspot) itself, this template creates a
personalized experience that shows an alternative HubSpot form to returning visitors, while everyone else keeps seeing
the default form.

## Usage

Run the following command in your project to apply this template:

```croct-cmd
croct use croct://integration/hubspot-personalization
```

Once installed, fetch the slot and embed the returned form ID. The
[HubSpot forms tutorial](https://docs.croct.com/immersion/integrations/crm/hubspot-forms) walks through embedding the form and
tracking submissions.
