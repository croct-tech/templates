import type { GetServerSideProps } from "next"
import type { SlotContent } from "@croct/plug-next"
import { CodeDiffPane } from "?/**/*/code-diff-pane.tsx"
import { TemplateCanvas } from "@croct/template-ui/next"
import { fetchContent } from "@croct/plug-next/server"

export type PageProps = {
  content: SlotContent<'%slotId%@%slotVersion%'>
}

export const getServerSideProps: GetServerSideProps<PageProps> = async context => ({
  props: await fetchContent('%slotId%@%slotVersion%', {route: context})
});

export default function Page({content}: PageProps) {
  return (
    <TemplateCanvas
      theme="light"
      title="Magic UI - Code comparison"
      ctaLabel="Edit this content"
      ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.magic_ui&utm_content=code_comparison&utm_term=nextjs"
      ctaTarget="_blank"
      src="#"
      fullScreen
      portal
    >
      <div className="flex h-full w-full items-center justify-center p-10">
        <CodeDiffPane {...content} />
      </div>
    </TemplateCanvas>
  );
}
