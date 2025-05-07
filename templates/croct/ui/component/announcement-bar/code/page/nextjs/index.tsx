import type { GetServerSideProps } from "next"
import type { SlotContent } from "@croct/plug-next"
import { PageContent } from "?/./content.{jsx,tsx}"
import { AnnouncementBar } from "?/**/*/announcement-bar.{jsx,tsx}"
import { TemplateCanvas } from "@croct/template-ui/next"
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
          theme="light"
          title="Announcement bar"
          ctaLabel="Edit this content"
          ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.ui_component&utm_content=announcement_bar&utm_term=nextjs"
          ctaTarget="_blank"
          src="#"
          fullScreen
          portal
      >
      <AnnouncementBar {...content} />
      <PageContent />
    </TemplateCanvas>
  );
}
