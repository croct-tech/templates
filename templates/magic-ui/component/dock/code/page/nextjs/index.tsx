import type { GetServerSideProps } from "next"
import type { SlotContent } from "@croct/plug-next"
import { DockMenu } from "?/**/*/dock-menu.tsx"
import { TemplateCanvas } from "@croct/template-ui/react"
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
      title="Magic UI - Dock"
      ctaLabel="Edit this content"
      ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.magic_ui&utm_content=dock&utm_term=nextjs"
      ctaTarget="_blank"
      fullScreen
      isolated
    >
      <div className="flex absolute h-full w-full items-center justify-center p-10">
        <DockMenu {...content} />
      </div>
    </TemplateCanvas>
  );
}
