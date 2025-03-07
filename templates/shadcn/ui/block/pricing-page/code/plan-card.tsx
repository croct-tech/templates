import {cn} from "@/lib/utils";
import {Check} from "lucide-react";
import {Button} from "@/components/ui/button";

export type PlanCardProps = {
  name: string
  description: string
  price: string,
  billingCycle: string,
  features: string[]
  mostPopular: boolean
}

export function PlanCard({
  name,
  description,
  price,
  billingCycle,
  features,
  mostPopular
}: PlanCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col p-6 bg-background rounded-lg border shadow-sm",
        mostPopular && "border-primary ring-1 ring-primary relative",
      )}
    >
      {mostPopular && (
        <div
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium py-1 px-3 rounded-full">
          Most Popular
        </div>
      )}
      <div className="space-y-2 mb-6">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-3xl font-bold">{price}</span>
          <span className="ml-1 text-muted-foreground">{billingCycle}</span>
        </div>
      </div>
      <ul className="space-y-2 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={cn("w-full mt-auto", mostPopular ? "bg-primary hover:bg-primary/90" : "")}
        variant={mostPopular ? "default" : "outline"}
      >
        Get Started
      </Button>
    </div>
  )
}
