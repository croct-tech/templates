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
        href="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%"
        target="_blank"
        position="bottom-right"
      />
    </>
  );
}
