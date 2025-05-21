import { FeaturesDemo } from "?/**/*/features-demo.{js,jsx,ts,tsx}"
import { TemplateCanvas } from "@croct/template-ui/react"
import { useContent } from "@croct/plug-react"

export default function Page() {
  const content = useContent('%slotId%@%slotVersion%');

  return (
    <TemplateCanvas
      title="Material UI - Features section"
      ctaLabel="Edit this content"
      ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.material_ui&utm_content=features_section&utm_term=react"
      ctaTarget="_blank"
      fullScreen
      isolated
    >
      <FeaturesDemo {...content} />
    </TemplateCanvas>
  );
}

