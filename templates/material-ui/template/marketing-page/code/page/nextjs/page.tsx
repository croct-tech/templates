import { MarketingPage } from "?/**/*/marketing-page.{js,jsx,ts,tsx}"
import { LinkButton } from "@croct/template-ui/react"
import { fetchContent } from "@croct/plug-next/server"

export default async function Page() {
  const navbar = '%navbarSlotId%' != undefined ? await fetchContent('%navbarSlotId%@1') : undefined;
  const hero = '%heroSlotId%' != undefined ? await fetchContent('%heroSlotId%@%heroSlotVersion%') : undefined;
  const logoCollection = '%logosSlotId%' != undefined ? await fetchContent('%logosSlotId%@%logosSlotVersion%') : undefined;
  const features = '%featuresSlotId%' != undefined ? await fetchContent('%featuresSlotId%@%featuresSlotVersion%') : undefined;
  const testimonials = '%testimonialsSlotId%' != undefined ? await fetchContent('%testimonialsSlotId%@%testimonialsSlotVersion%') : undefined;
  const highlights = '%highlightsSlotId%' != undefined ? await fetchContent('%highlightsSlotId%@%highlightsSlotVersion%') : undefined;
  const pricing = '%pricingSlotId%' != undefined ? await fetchContent('%pricingSlotId%@%pricingSlotVersion%') : undefined;
  const faq = '%faqSlotId%' != undefined ? await fetchContent('%faqSlotId%@%faqSlotVersion%') : undefined;

  const content = {
    navbar: navbar?.content,
    hero: hero?.content,
    logoCollection: logoCollection?.content,
    features: features?.content,
    testimonials: testimonials?.content,
    highlights: highlights?.content,
    pricing: pricing?.content,
    faq: faq?.content,
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
