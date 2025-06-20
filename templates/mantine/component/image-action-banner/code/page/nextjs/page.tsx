import { ImageActionBanner } from "?/**/*/ImageActionBanner/index.{js,jsx,ts,tsx}"
import { TemplateCanvas } from "@croct/template-ui/react"
import { fetchContent } from "@croct/plug-next/server"

export default async function Page() {
  const {content} = await fetchContent('%slotId%@%slotVersion%');

  return (
    <TemplateCanvas
      title="Mantine - Banner with image and action"
      ctaLabel="Edit this content"
      ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.mantine&utm_content=image_action_banner&utm_term=nextjs"
      ctaTarget="_blank"
      fullScreen
      isolated
    >
      <ImageActionBanner {...content} />
    </TemplateCanvas>
  );
}
