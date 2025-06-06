'use client';

import CssBaseline from "@mui/material/CssBaseline"
import Divider from "@mui/material/Divider"
import { FaqSection, type FaqSectionProps } from "?/./faq-section.{js,jsx,ts,tsx}"
import { HeroSection, type HeroSectionProps } from "?/./hero-section.{js,jsx,ts,tsx}";
import { LogoCollection, type LogoCollectionProps } from "?/./logo-collection.{js,jsx,ts,tsx}";
import { FeaturesSection, type FeaturesSectionProps } from "?/./features-section.{js,jsx,ts,tsx}";
import { HighlightsSection, type HighlightsSectionProps } from "?/./highlights-section.{js,jsx,ts,tsx}";
import { Navbar, type NavbarProps } from "?/./navbar.{js,jsx,ts,tsx}";
import { PricingSection, type PricingSectionProps } from "?/./pricing-section.{js,jsx,ts,tsx}";
import { TestimonialsSection, type TestimonialsSectionProps } from "?/./testimonials-section.{js,jsx,ts,tsx}";
import { AppTheme } from "?/./AppTheme.{js,jsx,ts,tsx}"
import { Footer } from "?/./footer.{js,jsx,ts,tsx}"

export type PageSectionsProps = {
  navbar?: NavbarProps,
  hero?: HeroSectionProps,
  logoCollection?: LogoCollectionProps,
  features?: FeaturesSectionProps,
  testimonials?: TestimonialsSectionProps,
  highlights?: HighlightsSectionProps,
  pricing?: PricingSectionProps,
  faq?: FaqSectionProps,
}

export function MarketingPage(props: PageSectionsProps) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Navbar {...props.navbar} />
      <HeroSection {...props.hero} />
      <div>
        <LogoCollection {...props.logoCollection} />
        <FeaturesSection {...props.features} />
        <Divider />
        <TestimonialsSection {...props.testimonials} />
        <Divider />
        <HighlightsSection {...props.highlights} />
        <Divider />
        <PricingSection {...props.pricing} />
        <Divider />
        <FaqSection {...props.faq} />
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  )
}
