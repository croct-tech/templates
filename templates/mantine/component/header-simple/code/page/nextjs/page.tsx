import { HeaderSimple } from "?/**/*/HeaderSimple/index.{js,jsx,ts,tsx}"
import { TemplateCanvas } from "@croct/template-ui/react"
import { fetchContent } from "@croct/plug-next/server"

export default async function Page() {
  const {content} = await fetchContent('%slotId%@%slotVersion%');

  return (
    <TemplateCanvas
      title="Mantine - Simple header"
      ctaLabel="Edit this content"
      ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.mantine&utm_content=header_simple&utm_term=nextjs"
      ctaTarget="_blank"
      fullScreen
      isolated
    >
      <HeaderSimple {...content} />
    </TemplateCanvas>
  );
}
