import { DemoSection } from "?/**/*/demo-section.tsx"
import { TemplateCanvas } from "@croct/template-ui/react"
import { fetchContent } from "@croct/plug-next/server"

export default async function Page() {
  const {content} = await fetchContent('%slotId%@%slotVersion%');

  return (
    <div className="p-10">
      <DemoSection {...content} />
    </div>
  );
}
