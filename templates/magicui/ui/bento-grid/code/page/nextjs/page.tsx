import { FeatureGrid } from "?/**/*/feature-grid.tsx"
import { TemplateCanvas } from "@croct/template-ui/next"
import { fetchContent } from "@croct/plug-next/server"

export default async function Page() {
  const {content} = await fetchContent('%slotId%@%slotVersion%');

  return (
    <TemplateCanvas
      title="Magic UI - Bento grid"
      ctaLabel="Edit this content"
      ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%"
      src="#"
      fullScreen
      portal
    >
      <div className="flex absolute h-full w-full justify-center p-10">
        <FeatureGrid {...content} />
      </div>
    </TemplateCanvas>
  );
}
