import { Tweet } from "?/**/*/tweet.tsx"
import { TemplateCanvas } from "@croct/template-ui/next"
import { fetchContent } from "@croct/plug-next/server"

export default async function Page() {
  const {content} = await fetchContent('%slotId%@%slotVersion%');

  return (
    <TemplateCanvas
      theme="light"
      title="Magic UI - Tweet card"
      ctaLabel="Edit this content"
      ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.magic_ui&utm_content=tweet_card&utm_term=nextjs"
      ctaTarget="_blank"
      src="#"
      fullScreen
      portal
    >
      <div className="flex absolute h-full w-full items-center justify-center p-10">
        <div className="w-md">
          <Tweet {...content} />
        </div>
      </div>
    </TemplateCanvas>
  );
}
