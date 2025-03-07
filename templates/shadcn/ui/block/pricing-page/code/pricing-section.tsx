"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { PlanCard } from "@/components/plan-card";

type PlanProps = {
  name: string,
  description: string,
  price: {
    monthly: string,
    annually: string
  },
  features: string[],
  mostPopular: boolean
}

export type PricingSectionProps = {
  defaultFrequency: 'monthly' | 'annually',
  title: string,
  subtitle: string,
  plans: PlanProps[]
}

export function PricingSection(props: PricingSectionProps) {
  const [isAnnually, setIsAnnually] = useState(props.defaultFrequency === 'annually')

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-16">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{props.title}</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          {props.subtitle}
        </p>
      </div>

      <div className="flex items-center justify-center space-x-2 mb-12">
        <Label htmlFor="billing-toggle" className="text-sm font-medium">
          Monthly
        </Label>
        <Switch id="billing-toggle" checked={isAnnually} onCheckedChange={setIsAnnually}/>
        <Label htmlFor="billing-toggle" className="text-sm font-medium">
          Annually <span className="text-xs text-primary">(Save 20%)</span>
        </Label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {props.plans.map(plan => (
          <PlanCard
            key={plan.name}
            name={plan.name}
            description={plan.description}
            price={isAnnually ? plan.price.annually : plan.price.monthly}
            billingCycle={isAnnually ? "/year" : "/month"}
            features={plan.features}
            mostPopular={plan.mostPopular}
          />
        ))}
      </div>
    </div>
  )
}

