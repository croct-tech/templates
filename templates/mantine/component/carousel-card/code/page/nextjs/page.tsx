import { CarouselCard } from "?/**/*/CarouselCard/index.{js,jsx,ts,tsx}"
import { TemplateCanvas } from "@croct/template-ui/react"
import { fetchContent } from "@croct/plug-next/server"

export default async function Page() {
  const {content} = await fetchContent('%slotId%@%slotVersion%');

  return (
    <TemplateCanvas
      title="Mantine - Card with carousel"
      ctaLabel="Edit this content"
      ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.mantine&utm_content=carousel_card&utm_term=nextjs"
      ctaTarget="_blank"
      fullScreen
      isolated
    >
      <CarouselCard {...content} />
    </TemplateCanvas>
  );
}
