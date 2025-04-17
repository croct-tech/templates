import { PricingSection } from "?/**/*/pricing-section.tsx"
import { LinkButton } from "@croct/template-ui/react"
import { fetchContent } from "@croct/plug-next/server"

export default async function Page() {
  const {content} = await fetchContent('%slotId%@%slotVersion%');

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
