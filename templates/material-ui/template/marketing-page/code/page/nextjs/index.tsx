import type { GetServerSideProps } from "next"
import type { SlotContent } from "@croct/plug-next"
import { MarketingPage } from "?/**/*/marketing-page.{js,jsx,ts,tsx}"
import { LinkButton } from "@croct/template-ui/react"
import { fetchContent } from "@croct/plug-next/server"

export type PageProps = {
  content: {
    navbar: SlotContent<'%navbarSlotId%'>,
    hero: SlotContent<'%heroSlotId%'>
    logoCollection: SlotContent<'%logosSlotId%'>,
    features: SlotContent<'%featuresSlotId%'>,
    testimonials: SlotContent<'%testimonialsSlotId%'>,
    highlights: SlotContent<'%highlightsSlotId%'>,
    pricing: SlotContent<'%pricingSlotId%'>,
    faq: SlotContent<'%faqSlotId%'>,
  }
}

export const getServerSideProps: GetServerSideProps<PageProps> = async context => ({
  props: {
    navbar: '%navbarSlotId%' != undefined ? await fetchContent('%navbarSlotId%@%navbarSlotVersion%', {route: context}) : undefined,
    hero: '%heroSlotId%' != undefined ? await fetchContent('%heroSlotId%@%heroSlotVersion%', {route: context}) : undefined,
    logoCollection: '%logosSlotId%' != undefined ? await fetchContent('%logosSlotId%@%logosSlotVersion%', {route: context}) : undefined,
    features: '%featuresSlotId%' != undefined ? await fetchContent('%featuresSlotId%@%featuresSlotVersion%', {route: context}) : undefined,
    testimonials: '%testimonialsSlotId%' != undefined ? await fetchContent('%testimonialsSlotId%@%testimonialsSlotVersion%', {route: context}) : undefined,
    highlights: '%highlightsSlotId%' != undefined ? await fetchContent('%highlightsSlotId%@%highlightsSlotVersion%', {route: context}) : undefined,
    pricing: '%pricingSlotId%' != undefined ? await fetchContent('%pricingSlotId%@%pricingSlotVersion%', {route: context}) : undefined,
    faq: '%faqSlotId%' != undefined ? await fetchContent('%faqSlotId%@%faqSlotVersion%', {route: context}) : undefined,
  }
});

export default function Page({content}: PageProps) {
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
