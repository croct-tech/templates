import { MarketingPage } from "?/**/*/MarketingPage.{js,jsx,ts,tsx}"
import { LinkButton } from "@croct/template-ui/react"
import { fetchContent } from "@croct/plug-next/server"

export default async function Page() {
  const [
    /*faq*/{content: faq}/*faq*/,
    /*features*/{content: features}/*features*/,
    /*hero*/{content: hero}/*hero*/,
    /*highlights*/{content: highlights}/*highlights*/,
    /*logos*/{content: logos}/*logos*/,
    /*navbar*/{content: navbar}/*navbar*/,
    /*pricing*/{content: pricing}/*pricing*/,
    /*testimonials*/{content: testimonials}/*testimonials*/,
  ] = await Promise.all([
    /*faq*/fetchContent('%faqSlotId%@%faqSlotVersion%')/*faq*/,
    /*features*/fetchContent('%featuresSlotId%@%featuresSlotVersion%')/*features*/,
    /*hero*/fetchContent('%heroSlotId%@%heroSlotVersion%')/*hero*/,
    /*highlights*/fetchContent('%highlightsSlotId%@%highlightsSlotVersion%')/*highlights*/,
    /*logos*/fetchContent('%logosSlotId%@%logosSlotVersion%')/*logos*/,
    /*navbar*/fetchContent('%navbarSlotId%@%navbarSlotVersion%')/*navbar*/,
    /*pricing*/fetchContent('%pricingSlotId%@%pricingSlotVersion%')/*pricing*/,
    /*testimonials*/fetchContent('%testimonialsSlotId%@%testimonialsSlotVersion%')/*testimonials*/,
  ]);

  const content = {
    /*faq*/faq/*faq*/,
    /*features*/features/*features*/,
    /*hero*/hero/*hero*/,
    /*highlights*/highlights/*highlights*/,
    /*logos*/logos/*logos*/,
    /*navbar*/navbar/*navbar*/,
    /*pricing*/pricing/*pricing*/,
    /*testimonials*/testimonials/*testimonials*/,
  };

  return (
    <>
      <MarketingPage {...content} />
      <LinkButton
        branded
        label="Edit this content"
        href="%workspaceUrl%/slots?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.material_ui&utm_content=marketing_page&utm_term=nextjs"
        target="_blank"
        position="bottom-right"
      />
    </>
  );
}
