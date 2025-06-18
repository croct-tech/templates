import { HighlightsDemo } from "?/**/*/HighlightsDemo.{js,jsx,ts,tsx}"
import { TemplateCanvas } from "@croct/template-ui/react"
import { fetchContent } from "@croct/plug-next/server"

export default async function Page() {
  const {content} = await fetchContent('%slotId%@%slotVersion%');

  return (
    <TemplateCanvas
      title="Material UI - Highlights section"
      ctaLabel="Edit this content"
      ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.material_ui&utm_content=highlights_section&utm_term=nextjs"
      ctaTarget="_blank"
      fullScreen
      isolated
    >
      <HighlightsDemo {...content} />
    </TemplateCanvas>
  );
}
