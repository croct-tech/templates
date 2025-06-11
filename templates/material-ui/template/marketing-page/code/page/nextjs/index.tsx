import type {GetServerSideProps} from "next"
import {MarketingPage, type MarketingPageProps} from "?/**/*/MarketingPage.{js,jsx,ts,tsx}"
import {LinkButton} from "@croct/template-ui/react"
import {fetchContent} from "@croct/plug-next/server"

export type PageProps = {
    content: MarketingPageProps
}

export const getServerSideProps: GetServerSideProps<PageProps> = async context => {
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
        /*faq*/fetchContent('%faqSlotId%@%faqSlotVersion%', {route: context})/*faq*/,
        /*features*/fetchContent('%featuresSlotId%@%featuresSlotVersion%', {route: context})/*features*/,
        /*hero*/fetchContent('%heroSlotId%@%heroSlotVersion%', {route: context})/*hero*/,
        /*highlights*/fetchContent('%highlightsSlotId%@%highlightsSlotVersion%', {route: context})/*highlights*/,
        /*logos*/fetchContent('%logosSlotId%@%logosSlotVersion%', {route: context})/*logos*/,
        /*navbar*/fetchContent('%navbarSlotId%@%navbarSlotVersion%', {route: context})/*navbar*/,
        /*pricing*/fetchContent('%pricingSlotId%@%pricingSlotVersion%', {route: context})/*pricing*/,
        /*testimonials*/fetchContent('%testimonialsSlotId%@%testimonialsSlotVersion%', {route: context})/*testimonials*/,
    ]);

    return {
        props: {
            content: {
                /*faq*/faq/*faq*/,
                /*features*/features/*features*/,
                /*hero*/hero/*hero*/,
                /*highlights*/highlights/*highlights*/,
                /*logos*/logos/*logos*/,
                /*navbar*/navbar/*navbar*/,
                /*pricing*/pricing/*pricing*/,
                /*testimonials*/testimonials/*testimonials*/,
            }
        }
    }
}

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
