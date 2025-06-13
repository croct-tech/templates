import { LogoCollectionDemo } from "?/**/*/LogoCollectionDemo.{js,jsx,ts,tsx}"
import { TemplateCanvas } from "@croct/template-ui/react"
import { fetchContent } from "@croct/plug-next/server"

export default async function Page() {
  const {content} = await fetchContent('%slotId%@%slotVersion%');

  return (
    <TemplateCanvas
      title="Material UI - Logo collection"
      ctaLabel="Edit this content"
      ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.material_ui&utm_content=logo_collection&utm_term=nextjs"
      ctaTarget="_blank"
      fullScreen
      isolated
    >
      <LogoCollectionDemo {...content} />
    </TemplateCanvas>
  );
}
