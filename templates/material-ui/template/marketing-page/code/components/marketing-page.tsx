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
  logos?: LogoCollectionProps,
  features?: FeaturesSectionProps,
  testimonials?: TestimonialsSectionProps,
  highlights?: HighlightsSectionProps,
  pricing?: PricingSectionProps,
  faq?: FaqSectionProps,
}

export function MarketingPage(props: PageSectionsProps) {
  const sectionProps = {...defaultContent, ...props};

  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <Navbar {...sectionProps.navbar} />
      <HeroSection {...sectionProps.hero} />
      <div>
        <LogoCollection {...sectionProps.logos} />
        <FeaturesSection {...sectionProps} />
        <Divider />
        <TestimonialsSection {...sectionProps.testimonials} />
        <Divider />
        <HighlightsSection {...sectionProps.highlights} />
        <Divider />
        <PricingSection {...sectionProps.pricing} />
        <Divider />
        <FaqSection {...sectionProps.faq} />
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  )
}

const defaultContent = {
  "navbar": {
    "_component": "material-ui-navbar@1",
    "ctas": [
      {
        "link": "https://example.com/sign-in",
        "label": "Sign in",
        "appearance": "text"
      },
      {
        "link": "https://example.com/sign-up",
        "label": "Sign up",
        "appearance": "contained"
      }
    ],
    "items": [
      {
        "link": "#",
        "label": "Features"
      },
      {
        "link": "#",
        "label": "Testimonials"
      },
      {
        "link": "#",
        "label": "Highlights"
      },
      {
        "link": "#",
        "label": "Pricing"
      },
      {
        "link": "#",
        "label": "FAQ"
      },
      {
        "link": "#",
        "label": "Blog"
      }
    ]
  },
  "hero": {
    "_component": "material-ui-hero-section@1",
    "form": {
      "ctaLabel": "Start now",
      "inputLabel": "Your email address"
    },
    "note": "By clicking \"Start now\" you agree to our [Terms & Conditions](#).",
    "images": {
      "dark": "https://mui.com/static/screenshots/material-ui/getting-started/templates/dashboard-dark.jpg",
      "light": "https://mui.com/static/screenshots/material-ui/getting-started/templates/dashboard.jpg"
    },
    "heading": "Our latest **products**",
    "tagline": "Explore our cutting-edge dashboard, delivering high-quality solutions tailored to your needs. Elevate your experience with top-tier features and services."
  },
  "logos": {
    "_component": "material-ui-logo-collection@1",
    "logos": [
      {
        "dark": "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg",
        "light": "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg"
      },
      {
        "dark": "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg",
        "light": "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg"
      },
      {
        "dark": "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg",
        "light": "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg"
      },
      {
        "dark": "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg",
        "light": "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg"
      },
      {
        "dark": "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg",
        "light": "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg"
      },
      {
        "dark": "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg",
        "light": "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg"
      }
    ],
    "title": "Trusted by the best companies"
  },
  "features": {
    "_component": "material-ui-features-section@1",
    "title": "Product features",
    "features": [
      {
        "icon": "ViewQuiltRounded",
        "title": "Dashboard",
        "images": {
          "dark": "https://cdn.croct.io/workspace/customer-assets/bac910ff-a18e-4ca5-bdd0-155139967ea4/201f193a-7de5-44cf-bdd5-afba5403cc77",
          "light": "https://cdn.croct.io/workspace/customer-assets/bac910ff-a18e-4ca5-bdd0-155139967ea4/d194c8c9-6070-4ca2-ba64-ef28bb972ca9"
        },
        "description": "This item could provide a snapshot of the most important metrics or data points related to the product."
      },
      {
        "icon": "EdgesensorHighRounded",
        "title": "Mobile integration",
        "images": {
          "dark": "https://cdn.croct.io/workspace/customer-assets/bac910ff-a18e-4ca5-bdd0-155139967ea4/d677a355-ef64-4fa5-95ad-4eaebe8789ef",
          "light": "https://cdn.croct.io/workspace/customer-assets/bac910ff-a18e-4ca5-bdd0-155139967ea4/7e410126-57fa-471e-905c-a7c5371e2571"
        },
        "description": "This item could provide information about the mobile app version of the product."
      },
      {
        "icon": "DevicesRounded",
        "title": "Available on all platforms",
        "images": {
          "dark": "https://cdn.croct.io/workspace/customer-assets/bac910ff-a18e-4ca5-bdd0-155139967ea4/ed4cd705-64b4-4889-8e58-5314e4be1e54",
          "light": "https://cdn.croct.io/workspace/customer-assets/bac910ff-a18e-4ca5-bdd0-155139967ea4/47d0fdff-c280-4058-b1df-4d78826610fc"
        },
        "description": "This item could let users know the product is available on all platforms, such as web, mobile, and desktop."
      }
    ],
    "description": "Provide a brief overview of the key features of the product. For example, you could list the number of features, their types or benefits, and add-ons."
  },
  "testimonials": {
    "_component": "material-ui-testimonials-section@1",
    "title": "Testimonials",
    "description": "See what our customers love about our products. Discover how we excel in efficiency, durability, and satisfaction. Join us for quality, innovation, and reliable support.",
    "testimonials": [
      {
        "quote": "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
        "quotee": {
          "logo": {
            "dark": "https://cdn.croct.io/workspace/customer-assets/c933ce73-632b-4f2e-9764-b29e8eb132e4/c109535d-3ce6-48fe-bfe4-6d796ca04194",
            "light": "https://cdn.croct.io/workspace/customer-assets/c933ce73-632b-4f2e-9764-b29e8eb132e4/b4a111bd-285c-48d2-afeb-e53ab9f18b91"
          },
          "name": "Remy Sharp",
          "role": "Senior Engineer",
          "avatar": "https://cdn.croct.io/workspace/customer-assets/bac910ff-a18e-4ca5-bdd0-155139967ea4/535496ad-70bf-47e6-82d9-f85465d3739c"
        }
      },
      {
        "quote": "One of the standout features of this product is the exceptional customer support. In my experience, the team behind this product has been quick to respond and incredibly helpful. It's reassuring to know that they stand firmly behind their product.",
        "quotee": {
          "logo": {
            "dark": "https://cdn.croct.io/workspace/customer-assets/c933ce73-632b-4f2e-9764-b29e8eb132e4/93cd92bb-227e-4058-8c1b-4208b80d22d6",
            "light": "https://cdn.croct.io/workspace/customer-assets/c933ce73-632b-4f2e-9764-b29e8eb132e4/f283f157-7ce4-40bd-9c0b-0cbfada850a4"
          },
          "name": "Travis Howard",
          "role": "Lead Product Designer",
          "avatar": "https://cdn.croct.io/workspace/customer-assets/bac910ff-a18e-4ca5-bdd0-155139967ea4/44346fb8-f14b-4fe0-a08c-3ecf9839a1d1"
        }
      },
      {
        "quote": "The level of simplicity and user-friendliness in this product has significantly simplified my life. I appreciate the creators for delivering a solution that not only meets but exceeds user expectations.",
        "quotee": {
          "logo": {
            "dark": "https://cdn.croct.io/workspace/customer-assets/c933ce73-632b-4f2e-9764-b29e8eb132e4/0eddc328-784c-480e-9c11-2933254c8b6b",
            "light": "https://cdn.croct.io/workspace/customer-assets/c933ce73-632b-4f2e-9764-b29e8eb132e4/a71d7590-8e37-43f8-9557-670233c521f8"
          },
          "name": "Cindy Baker",
          "role": "CTO",
          "avatar": "https://cdn.croct.io/workspace/customer-assets/bac910ff-a18e-4ca5-bdd0-155139967ea4/74ba36b1-0890-4f7a-9f26-e90ddef8bbcf"
        }
      },
      {
        "quote": "I appreciate the attention to detail in the design of this product. The small touches make a big difference, and it's evident that the creators focused on delivering a premium experience.",
        "quotee": {
          "logo": {
            "dark": "https://cdn.croct.io/workspace/customer-assets/c933ce73-632b-4f2e-9764-b29e8eb132e4/84c6303d-0ad5-4895-983f-8cb591b8b364",
            "light": "https://cdn.croct.io/workspace/customer-assets/c933ce73-632b-4f2e-9764-b29e8eb132e4/3494fbab-4143-441a-ba37-ea95f9967ebe"
          },
          "name": "Julia Stewart",
          "role": "Senior Engineer",
          "avatar": "https://cdn.croct.io/workspace/customer-assets/bac910ff-a18e-4ca5-bdd0-155139967ea4/dcc5a472-758a-41e2-843b-aacafdd5a9a4"
        }
      },
      {
        "quote": "I've tried other similar products, but this one stands out for its innovative features. It's clear that the makers put a lot of thought into creating a solution that truly addresses user needs.",
        "quotee": {
          "logo": {
            "dark": "https://cdn.croct.io/workspace/customer-assets/c933ce73-632b-4f2e-9764-b29e8eb132e4/e4b5ea5a-57d2-417b-aa05-2676dfcb1269",
            "light": "https://cdn.croct.io/workspace/customer-assets/c933ce73-632b-4f2e-9764-b29e8eb132e4/0797843f-8c61-4db4-bb79-9163ca87a831"
          },
          "name": "John Smith",
          "role": "Product Designer",
          "avatar": "https://cdn.croct.io/workspace/customer-assets/bac910ff-a18e-4ca5-bdd0-155139967ea4/b861c767-de33-4135-a3e0-a9bb3fd67648"
        }
      },
      {
        "quote": "The quality of this product exceeded my expectations. It's durable, well-designed, and built to last. Definitely worth the investment!",
        "quotee": {
          "logo": {
            "dark": "https://cdn.croct.io/workspace/customer-assets/c933ce73-632b-4f2e-9764-b29e8eb132e4/4d82beb9-5e16-4768-9e6d-ab15ad9cdc28",
            "light": "https://cdn.croct.io/workspace/customer-assets/c933ce73-632b-4f2e-9764-b29e8eb132e4/7b57fdf9-2434-4846-a1a8-b619c2fa384f"
          },
          "name": "Daniel Wolf",
          "role": "CDO",
          "avatar": "https://cdn.croct.io/workspace/customer-assets/bac910ff-a18e-4ca5-bdd0-155139967ea4/c64abe34-fadc-416f-8dd6-d4cf9612c163"
        }
      }
    ]
  },
  "highlights": {
    "_component": "material-ui-highlights-section@1",
    "title": "Highlights",
    "highlights": [
      {
        "icon": "SettingsSuggestRounded",
        "title": "Adaptable performance",
        "description": "Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks."
      },
      {
        "icon": "ConstructionRounded",
        "title": "Built to last",
        "description": "Experience unmatched durability that goes above and beyond with lasting investment."
      },
      {
        "icon": "ThumbUpAltRounded",
        "title": "Great user experience",
        "description": "Integrate our product into your routine with an intuitive and easy-to-use interface."
      },
      {
        "icon": "AutoFixHighRounded",
        "title": "Innovative functionality",
        "description": "Stay ahead with features that set new standards, addressing your evolving needs better than the rest."
      },
      {
        "icon": "SupportAgentRounded",
        "title": "Reliable support",
        "description": "Count on our responsive customer support, offering assistance that goes beyond the purchase."
      },
      {
        "icon": "QueryStatsRounded",
        "title": "Precision in every detail",
        "description": "Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience."
      }
    ],
    "description": "Explore why our product stands out: adaptability, durability, user-friendly design, and innovation. Enjoy reliable customer support and precision in every detail."
  },
  "pricing": {
    "_component": "material-ui-pricing-section@1",
    "plans": [
      {
        "cta": "Sign up for free",
        "name": "Free",
        "price": {
          "value": 0,
          "frequency": "month"
        },
        "features": [
          "10 users included",
          "2 GB of storage",
          "Help center access",
          "Email support"
        ],
        "recommended": false
      },
      {
        "cta": "Start now",
        "name": "Professional",
        "price": {
          "value": 15,
          "frequency": "month"
        },
        "features": [
          "20 users included",
          "10 GB of storage",
          "Help center access",
          "Priority email support",
          "Dedicated team",
          "Best deals"
        ],
        "recommended": true
      },
      {
        "cta": "Contact us",
        "name": "Enterprise",
        "price": {
          "value": 30,
          "frequency": "month"
        },
        "features": [
          "50 users included",
          "30 GB of storage",
          "Help center access",
          "Phone & email support"
        ],
        "recommended": false
      }
    ],
    "title": "Pricing",
    "description": "Quickly build an effective pricing table for your potential customers with this layout.\nIt's built with default Material UI components with little customization."
  },
  "faq": {
    "_component": "material-ui-faq-section@1",
    "title": "Frequently asked questions",
    "questions": [
      {
        "answer": "You can reach our customer support team by emailing [support@email.com](support@email.com) or calling our toll-free number. We're here to assist you promptly.",
        "question": "How do I contact customer support if I have a question or issue?"
      },
      {
        "answer": "Absolutely! We offer a hassle-free return policy. If you're not completely satisfied, you can return the product within [number of days] days for a full refund or exchange.",
        "question": "Can I return the product if it doesn't meet my expectations?"
      },
      {
        "answer": "Our product distinguishes itself through its adaptability, durability, and innovative features. We prioritize user satisfaction and continually strive to exceed expectations in every aspect.",
        "question": "What makes your product stand out from others in the market?"
      },
      {
        "answer": "Yes, our product comes with a [length of warranty] warranty. It covers defects in materials and workmanship. If you encounter any issues covered by the warranty, please contact our customer support for assistance.",
        "question": "Is there a warranty on the product, and what does it cover?"
      }
    ]
  }
};
