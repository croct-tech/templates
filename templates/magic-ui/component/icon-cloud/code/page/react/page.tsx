import { IconCloudDemo } from "?/**/*/icon-cloud-demo.tsx"
import { TemplateCanvas } from "@croct/template-ui/react"
import { useContent } from "@croct/plug-react"

export default function Page() {
  const content = useContent('%slotId%@%slotVersion%');

  return (
    <TemplateCanvas
      theme="light"
      title="Magic UI - Icon cloud"
      ctaLabel="Edit this content"
      ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.magic_ui&utm_content=icon_cloud&utm_term=react"
      ctaTarget="_blank"
      fullScreen
      isolated
    >
      <div className="flex absolute h-full w-full items-center justify-center p-10">
        <IconCloudDemo {...content} />
      </div>
    </TemplateCanvas>
  );
}
