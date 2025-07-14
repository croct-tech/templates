import { MarketingPage } from "?/**/*/MarketingPage.{js,jsx,ts,tsx}"
import { LinkButton } from "@croct/template-ui/react"
import { useContent } from "@croct/plug-react"
import { useColorScheme } from "@mui/material/styles";

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

  const theme = useColorScheme();

  return (
    <>
      <MarketingPage {...content} />
      <LinkButton
        branded
        theme={theme.mode}
        label="Edit this content"
        href="%workspaceUrl%/slots?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.material_ui&utm_content=marketing_page&utm_term=nextjs"
        target="_blank"
        position="bottom-right"
      />
    </>
  );
}

