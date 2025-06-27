'use client';

import { HeaderSimple, type HeaderSimpleProps } from "?/./HeaderSimple.{js,jsx,ts,tsx}";
import { HeroBullets, type HeroBulletsProps } from "?/./HeroBullets.{js,jsx,ts,tsx}";
import { FeaturesCards, type FeaturesCardsProps } from "?/./FeaturesCards.{js,jsx,ts,tsx}";
import { FeaturesTitle, type FeaturesTitleProps } from "?/./FeaturesTitle.{js,jsx,ts,tsx}";
import { StatsGroup, type StatsGroupProps } from "?/./StatsGroup.{js,jsx,ts,tsx}";
import { FooterLinks } from "?/./Footer.{js,jsx,ts,tsx}";

export type PageSectionsProps = {
  header: HeaderSimpleProps,
  hero: HeroBulletsProps,
  featuresCards: FeaturesCardsProps,
  featuresTitle: FeaturesTitleProps,
  stats: StatsGroupProps,
}

export function MarketingPage(props: PageSectionsProps) {
    const sectionProps = {...defaultContent, ...props};

    return (
        <div>
            <HeaderSimple {...sectionProps.header} />
            <HeroBullets {...sectionProps.hero} />
            <FeaturesCards {...sectionProps.featuresCards} />
            <FeaturesTitle {...sectionProps.featuresTitle} />
            <StatsGroup {...sectionProps.stats} />
            <FooterLinks />
        </div>
    )
}

const defaultContent: PageSectionsProps = {
    "header": {
        "items": [
            {
                "link": "#features",
                "label": "Features"
            },
            {
                "link": "#pricing",
                "label": "Pricing"
            },
            {
                "link": "#learn",
                "label": "Learn"
            },
            {
                "link": "#community",
                "label": "Community"
            }
        ]
    },
    "hero": {
        "heading": "A **modern** React components library",
        "tagline": "Build fully functional accessible web applications faster than ever – Mantine includes more than 120 customizable components and hooks to cover you in any situation",
        "bullets": [
            {
                "title": "TypeScript based",
                "description": "build type safe applications, all components and hooks export types",
            },
            {
                "title": "Free and open source",
                "description": "all packages have MIT license, you can use Mantine in any project",
            },
            {
                "title": "No annoying focus ring",
                "description": "focus ring will appear only when user navigates with keyboard",
            }
        ],
        "primaryCta": {
            "label": "Get started",
            "link": "#"
        },
        "secondaryCta": {
            "label": "Source code",
            "link": "#"
        },
        "image": "https://cdn.croct.io/workspace/customer-assets/bac910ff-a18e-4ca5-bdd0-155139967ea4/d6e0cf03-1bd4-4f52-9f0e-fd632fc7cd47"
    },
    "featuresCards": {
        "preTitle": "BEST COMPANY EVER",
        "title": "Integrate effortlessly with any technology stack",
        "description": "Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try biting a Steel-type Pokémon.",
        "features": [
            {
                "icon": "gauge",
                "title": "Extreme performance",
                "description": "This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit"
            },
            {
                "icon": "user",
                "title": "Privacy focused",
                "description": "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma"
            },
            {
                "icon": "cookie",
                "title": "No third parties",
                "description": "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves"
            }
        ]
    },
    "featuresTitle": {
        "title": "A fully featured React components library for your next project",
        "description": "Build fully functional accessible web applications faster than ever – Mantine includes more than 120 customizable components and hooks to cover you in any situation",
        "cta": {
            "label": "Get started",
            "link": "#"
        },
        "features": [
            {
                "icon": "receipt",
                "title": "Free and open source",
                "description": "All packages are published under MIT license, you can use Mantine in any project"
            },
            {
                "icon": "file",
                "title": "TypeScript based",
                "description": "Build type safe applications, all components and hooks export types"
            },
            {
                "icon": "cicle",
                "title": "No annoying focus ring",
                "description": "With new :focus-visible selector focus ring will appear only when user navigates with keyboard"
            },
            {
                "icon": "flame",
                "title": "Flexible",
                "description": "Customize colors, spacing, shadows, fonts and many other settings with global theme object"
            }
        ]
    },
    "stats": {
        "statistic": [
            {
                "stats": "456,133",
                "title": "Page views",
                "description": "24% more than in the same month last year, 33% more that two years ago" 
            },
            {
                "stats": "2,175",
                "title": "New users",
                "description": "13% less compared to last month, new user engagement up by 6%" 
            },
            {
                "stats": "1,994",
                "title": "Completed orders",
                "description": "1994 orders were completed this month, 97% satisfaction rate" 
            }
        ]
    }
}