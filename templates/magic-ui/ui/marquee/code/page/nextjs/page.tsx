import { ReviewList } from "?/**/*/review-list.tsx"
import { TemplateCanvas } from "@croct/template-ui/next"
import { fetchContent } from "@croct/plug-next/server"

export default async function Page() {
  const {content} = await fetchContent('%slotId%@%slotVersion%');

  return (
    <TemplateCanvas
      theme="light"
      title="Magic UI - Marquee reviews"
      ctaLabel="Edit this content"
      ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.magic_ui&utm_content=marquee&utm_term=nextjs"
      ctaTarget="_blank"
      maxWidth="1200px"
      src="#"
      fullScreen
      portal
    >
      <div className="flex absolute h-full w-full items-center justify-center p-10">
        <ReviewList {...content} />
      </div>
    </TemplateCanvas>
  );
}
