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
        label="Edit this page"
        href="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%"
        target="_blank"
        position="bottom-right"
      />
    </>
  );
}
