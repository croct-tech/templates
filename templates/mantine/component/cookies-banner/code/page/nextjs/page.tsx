import { CookiesBanner } from "?/**/*/CookiesBanner/index.{js,jsx,ts,tsx}"
import { TemplateCanvas } from "@croct/template-ui/react"
import { fetchContent } from "@croct/plug-next/server"

export default async function Page() {
  const {content} = await fetchContent('%slotId%@%slotVersion%');

  return (
    <TemplateCanvas
      title="Mantine - Cookies banner"
      ctaLabel="Edit this content"
      ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.mantine&utm_content=cookies_banner&utm_term=nextjs"
      ctaTarget="_blank"
      fullScreen
      isolated
    >
      <CookiesBanner {...content} />
    </TemplateCanvas>
  );
}
