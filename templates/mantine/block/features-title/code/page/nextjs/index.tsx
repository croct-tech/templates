import type { GetServerSideProps } from "next"
import type { SlotContent } from "@croct/plug-next"
import { FeaturesTitle } from "?/**/*/FeaturesTitle/index.{js,jsx,ts,tsx}"
import { TemplateCanvas } from "@croct/template-ui/react"
import { fetchContent } from "@croct/plug-next/server"

export type PageProps = {
  content: SlotContent<'%slotId%@%slotVersion%'>
}

export const getServerSideProps: GetServerSideProps<PageProps> = async context => ({
  props: await fetchContent('%slotId%@%slotVersion%', {route: context})
});

export default function Page({content}: PageProps) {
  return (
    <TemplateCanvas
      title="Mantine - Features with title"
      ctaLabel="Edit this content"
      ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.mantine&utm_content=features_title&utm_term=nextjs"
      ctaTarget="_blank"
      fullScreen
      isolated
    >
      <FeaturesTitle {...content} />
    </TemplateCanvas>
  );
}
