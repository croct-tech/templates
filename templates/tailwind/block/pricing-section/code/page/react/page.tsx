import { PricingSection } from "?/**/*/pricing-section.{js,jsx,ts,tsx}"
import { TemplateCanvas } from "@croct/template-ui/react"
import { useContent } from "@croct/plug-react"

export default function Page() {
  const content = useContent('%slotId%@%slotVersion%');

  return (
    <TemplateCanvas
      title="Tailwind - CTA section"
      ctaLabel="Edit this content"
      ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.tailwind&utm_content=pricing_section&utm_term=react"
      ctaTarget="_blank"
      fullScreen
      isolated
    >
      <PricingSection {...content} />
    </TemplateCanvas>
  );
}

