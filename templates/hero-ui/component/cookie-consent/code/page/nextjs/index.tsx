import { CookieConsentDemo } from "?/**/*/cookie-consent-demo.{js,jsx,ts,tsx}"
import { TemplateCanvas } from "@croct/template-ui/react"

export default function Page() {
  return (
    <TemplateCanvas
      title="Hero UI - Cookie consent"
      ctaLabel="Edit this content"
      ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.hero_ui&utm_content=cookie_consent&utm_term=nextjs"
      ctaTarget="_blank"
      fullScreen
      isolated
    >
      <CookieConsentDemo />
    </TemplateCanvas>
  );
}
