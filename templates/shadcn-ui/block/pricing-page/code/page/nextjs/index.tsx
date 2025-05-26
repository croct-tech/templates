import type { GetServerSideProps } from "next"
import type { SlotContent } from "@croct/plug-next"
import { PricingSection } from "?/**/*/pricing-section.tsx"
import { LinkButton } from "@croct/template-ui/react"
import { fetchContent } from "@croct/plug-next/server"

export type PageProps = {
  content: SlotContent<'%slotId%@%slotVersion%'>
}

export const getServerSideProps: GetServerSideProps<PageProps> = async context => ({
  props: await fetchContent('%slotId%@%slotVersion%', {route: context})
});

export default function Page({content}: PageProps) {
  return (
    <>
      <PricingSection {...content} />
      <LinkButton
        branded
        label="Edit this page"
        href="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.shadcn_ui&utm_content=pricing_page&utm_term=nextjs"
        target="_blank"
        position="bottom-right"
      />
    </>
  );
}
