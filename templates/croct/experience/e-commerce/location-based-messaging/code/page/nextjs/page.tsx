import { PageContent } from "?/./content.{js,tsx}";
import { AnnouncementBar } from "?/**/*/announcement-bar.{js,tsx}";
import { TemplateCanvas } from "@croct/template-ui/next"
import { fetchContent } from "@croct/plug-next/server"

export default async function Page() {
  const {content} = await fetchContent('%slotId%@%slotVersion%');

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
