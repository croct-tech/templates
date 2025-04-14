import { PricingSection } from "?/**/*/pricing-section.tsx"
import { TemplateCanvas } from "@croct/template-ui/next"
import { fetchContent } from "@croct/plug-next/server"

export default async function Page() {
  const {content} = await fetchContent('%slotId%@%slotVersion%');

  return (
    <TemplateCanvas
      title="Pricing page"
      ctaLabel="Edit this page"
      ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%"
      ctaTarget="_blank"
      src="#"
      fullScreen
      portal
    >
      <PricingSection {...content} />
    </TemplateCanvas>
  );
}
