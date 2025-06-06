import { MarketingPage } from "?/**/*/marketing-page.{js,jsx,ts,tsx}"
import { LinkButton } from "@croct/template-ui/react"
import { useContent } from "@croct/plug-react"

export default function Page() {
  const content = {
    navbar: '%navbarSlotId%' != undefined ? useContent('%navbarSlotId%@%navbarSlotVersion%') : undefined,
    hero: '%heroSlotId%' != undefined ? useContent('%heroSlotId%@%heroSlotVersion%') : undefined,
    logoCollection: '%logosSlotId%' != undefined ? useContent('%logosSlotId%@%logosSlotVersion%') : undefined,
    features: '%featuresSlotId%' != undefined ? useContent('%featuresSlotId%@%featuresSlotVersion%') : undefined,
    testimonials: '%testimonialsSlotId%' != undefined ? useContent('%testimonialsSlotId%@%testimonialsSlotVersion%') : undefined,
    highlights: '%highlightsSlotId%' != undefined ? useContent('%highlightsSlotId%@%highlightsSlotVersion%') : undefined,
    pricing: '%pricingSlotId%' != undefined ? useContent('%pricingSlotId%@%pricingSlotVersion%') : undefined,
    faq: '%faqSlotId%' != undefined ? useContent('%faqSlotId%@%faqSlotVersion%') : undefined,
  }

  return (
    <>
      <MarketingPage {...content} />
      <LinkButton
        branded
        label="Edit content"
        href="%workspaceUrl%/slots?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.ui_block&utm_content=carousel_section&utm_term=nextjs"
        target="_blank"
        position="bottom-right"
      />
    </>
  );
}

