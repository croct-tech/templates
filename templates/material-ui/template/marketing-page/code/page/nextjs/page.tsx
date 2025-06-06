import { MarketingPage } from "?/**/*/marketing-page.{js,jsx,ts,tsx}"
import { LinkButton } from "@croct/template-ui/react"
import { fetchContent } from "@croct/plug-next/server"

export default async function Page() {
  const navbar = 'material-ui-navbar' != undefined ? await fetchContent('material-ui-navbar@1') : undefined;
  const hero = 'material-ui-home-hero' != undefined ? await fetchContent('material-ui-home-hero@1') : undefined;
  const logoCollection = 'material-ui-logo-collection' != undefined ? await fetchContent('material-ui-logo-collection@1') : undefined;
  const features = 'material-ui-home-features' != undefined ? await fetchContent('material-ui-home-features@1') : undefined;
  const testimonials = 'material-ui-testimonials-section' != undefined ? await fetchContent('material-ui-testimonials-section@1') : undefined;
  const highlights = 'material-ui-home-highlights' != undefined ? await fetchContent('material-ui-home-highlights@1') : undefined;
  const pricing = 'material-ui-home-pricing' != undefined ? await fetchContent('material-ui-home-pricing@1') : undefined;
  const faq = 'material-ui-faq-section' != undefined ? await fetchContent('material-ui-faq-section@1') : undefined;

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
