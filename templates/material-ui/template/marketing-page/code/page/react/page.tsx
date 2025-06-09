import { MarketingPage } from "?/**/*/marketing-page.{js,jsx,ts,tsx}"
import { LinkButton } from "@croct/template-ui/react"
import { useContent } from "@croct/plug-react"

export default function Page() {
  const slots = '%pageSlots%';

  const content = {
    navbar: slots.includes('navbar') ? useContent('%navbarSlotId%@%navbarSlotVersion%') : undefined,
    hero: slots.includes('navbar') ? useContent('%heroSlotId%@%heroSlotVersion%') : undefined,
    logoCollection: slots.includes('logos') ? useContent('%logosSlotId%@%logosSlotVersion%') : undefined,
    features: slots.includes('features') ? useContent('%featuresSlotId%@%featuresSlotVersion%') : undefined,
    testimonials: slots.includes('testimonials') ? useContent('%testimonialsSlotId%@%testimonialsSlotVersion%') : undefined,
    highlights: slots.includes('highlights') ? useContent('%highlightsSlotId%@%highlightsSlotVersion%') : undefined,
    pricing: slots.includes('pricing') ? useContent('%pricingSlotId%@%pricingSlotVersion%') : undefined,
    faq: slots.includes('faq') ? useContent('%faqSlotId%@%faqSlotVersion%') : undefined,
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

