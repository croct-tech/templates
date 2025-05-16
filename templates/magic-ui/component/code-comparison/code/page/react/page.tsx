import { CodeDiffPane } from "?/**/*/code-diff-pane.tsx"
import { TemplateCanvas } from "@croct/template-ui/react"
import { useContent } from "@croct/plug-react"

export default function Page() {
  const content = useContent('%slotId%@%slotVersion%');

  return (
    <TemplateCanvas
      theme="light"
      title="Magic UI - Code comparison"
      ctaLabel="Edit this content"
      ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.magic_ui&utm_content=code_comparison&utm_term=react"
      ctaTarget="_blank"
      fullScreen
      isolated
    >
      <div className="flex h-full w-full items-center justify-center p-10">
        <CodeDiffPane {...content} />
      </div>
    </TemplateCanvas>
  );
}
