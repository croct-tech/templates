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
    navbar: '%pageSlots%'.includes('navbar') ? await fetchContent('%navbarSlotId%@%navbarSlotVersion%', {route: context}) : undefined,
    hero: '%pageSlots%'.includes('hero') ? await fetchContent('%heroSlotId%@%heroSlotVersion%', {route: context}) : undefined,
    logoCollection: '%pageSlots%'.includes('logos') ? await fetchContent('%logosSlotId%@%logosSlotVersion%', {route: context}) : undefined,
    features: '%pageSlots%'.includes('features') ? await fetchContent('%featuresSlotId%@%featuresSlotVersion%', {route: context}) : undefined,
    testimonials: '%pageSlots%'.includes('testimonials') ? await fetchContent('%testimonialsSlotId%@%testimonialsSlotVersion%', {route: context}) : undefined,
    highlights: '%pageSlots%'.includes('highlights') ? await fetchContent('%highlightsSlotId%@%highlightsSlotVersion%', {route: context}) : undefined,
    pricing: '%pageSlots%'.includes('pricing') ? await fetchContent('%pricingSlotId%@%pricingSlotVersion%', {route: context}) : undefined,
    faq: '%pageSlots%'.includes('faq') ? await fetchContent('%faqSlotId%@%faqSlotVersion%', {route: context}) : undefined,
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
