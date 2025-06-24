import { EmailBanner } from "?/**/*/EmailBanner/index.{js,jsx,ts,tsx}"
import { TemplateCanvas } from "@croct/template-ui/react"
import { useContent } from "@croct/plug-react"

export default function Page() {
  const content = useContent('%slotId%@%slotVersion%');

  return (
    <TemplateCanvas
      title="Mantine - Email banner"
      ctaLabel="Edit this content"
      ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.mantine&utm_content=email_banner&utm_term=react"
      ctaTarget="_blank"
      fullScreen
      isolated
    >
      <EmailBanner {...content} />
    </TemplateCanvas>
  );
}
