import { GlobalPresence } from "?/**/*/global-presence.tsx"
import { TemplateCanvas } from "@croct/template-ui/react"
import { useContent } from "@croct/plug-react"

export default function Page() {
  const content = useContent('%slotId%@%slotVersion%');

  return (
    <TemplateCanvas
      theme="light"
      title="Magic UI - Globe"
      ctaLabel="Edit this content"
      ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%"
      ctaTarget="_blank"
      src="#"
      fullScreen
      portal
    >
      <div className="flex absolute h-full w-full items-center justify-center p-10">
        <div>
          <GlobalPresence {...content} />
        </div>
      </div>
    </TemplateCanvas>
  );
}
