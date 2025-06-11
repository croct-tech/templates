import { MarketingPage } from "?/**/*/marketing-page.{js,jsx,ts,tsx}"
import { LinkButton } from "@croct/template-ui/react"
import { useContent } from "@croct/plug-react"

export default function Page() {
  const content = {
    /*faq*/faq: useContent('%faqSlotId%@%faqSlotVersion%')/*faq*/,
    /*features*/features: useContent('%featuresSlotId%@%featuresSlotVersion%')/*features*/,
    /*hero*/hero: useContent('%heroSlotId%@%heroSlotVersion%')/*hero*/,
    /*highlights*/highlights: useContent('%highlightsSlotId%@%highlightsSlotVersion%')/*highlights*/,
    /*logos*/logoCollection: useContent('%logosSlotId%@%logosSlotVersion%')/*logos*/,
    /*navbar*/navbar: useContent('%navbarSlotId%@%navbarSlotVersion%')/*navbar*/,
    /*pricing*/pricing: useContent('%pricingSlotId%@%pricingSlotVersion%')/*pricing*/,
    /*testimonials*/testimonials: useContent('%testimonialsSlotId%@%testimonialsSlotVersion%')/*testimonials*/,
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

