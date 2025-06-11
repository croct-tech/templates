import { LogoCollectionDemo } from "?/**/*/LogoCollectionDemo.{js,jsx,ts,tsx}"
import { TemplateCanvas } from "@croct/template-ui/react"
import { useContent } from "@croct/plug-react"

export default function Page() {
  const content = useContent('%slotId%@%slotVersion%');

  return (
    <TemplateCanvas
      title="Material UI - Logo collection"
      ctaLabel="Edit this content"
      ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.material_ui&utm_content=logo_collection&utm_term=react"
      ctaTarget="_blank"
      fullScreen
      isolated
    >
      <LogoCollectionDemo {...content} />
    </TemplateCanvas>
  );
}

