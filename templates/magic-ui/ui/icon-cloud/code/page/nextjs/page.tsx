import { IconCloudDemo } from "?/**/*/icon-cloud-demo.tsx"
import { TemplateCanvas } from "@croct/template-ui/next"
import { fetchContent } from "@croct/plug-next/server"

export default async function Page() {
  const {content} = await fetchContent('%slotId%@%slotVersion%');

  return (
    <TemplateCanvas
      theme="light"
      title="Magic UI - Icon cloud"
      ctaLabel="Edit this content"
      ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%"
      ctaTarget="_blank"
      src="#"
      fullScreen
      portal
    >
      <div className="flex absolute h-full w-full items-center justify-center p-10">
        <IconCloudDemo {...content} />
      </div>
    </TemplateCanvas>
  );
}
