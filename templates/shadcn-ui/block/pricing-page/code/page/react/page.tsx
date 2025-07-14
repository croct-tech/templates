import { PricingSection } from "?/**/*/pricing-section.tsx"
import { LinkButton } from "@croct/template-ui/react"
import { useContent } from "@croct/plug-react"

export default function Page() {
  const content = useContent('%slotId%@%slotVersion%');

  return (
    <>
      <PricingSection {...content} />
      <LinkButton
        branded
        label="Edit this content"
        href="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.shadcn_ui&utm_content=pricing_page&utm_term=react"
        target="_blank"
        position="bottom-right"
      />
    </>
  );
}
