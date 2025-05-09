import { PageContent } from "?/./content.{jsx,tsx}"
import { AnnouncementBar } from "?/**/*/announcement-bar.{jsx,tsx}"
import { TemplateCanvas } from "@croct/template-ui/react"
import { useContent } from "@croct/plug-react"

export default function Page() {
  const content = useContent('%slotId%@%slotVersion%');

  return (
      <TemplateCanvas
          theme="light"
          title="Announcement bar"
          ctaLabel="Edit this content"
          ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.ui_component&utm_content=announcement_bar&utm_term=react"
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
