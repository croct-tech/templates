import type { GetServerSideProps } from "next"
import { MarketingPage, type MarketingPageProps } from "?/**/*/MarketingPage.{js,jsx,ts,tsx}"
import { LinkButton } from "@croct/template-ui/react"
import { fetchContent } from "@croct/plug-next/server"

export type PageProps = {
  content: MarketingPageProps
}

export const getServerSideProps: GetServerSideProps<PageProps> = async context => {
  const [
    /*header*/{content: header}/*header*/,
    /*hero*/{content: hero}/*hero*/,
    /*featuresCards*/{content: featuresCards}/*featuresCards*/,
    /*featuresTitle*/{content: featuresTitle}/*featuresTitle*/,
    /*stats*/{content: stats}/*stats*/,
  ] = await Promise.all([
    /*header*/fetchContent('%headerSlotId%@%headerSlotVersion%', {route: context})/*header*/,
    /*hero*/fetchContent('%heroSlotId%@%heroSlotVersion%', {route: context})/*hero*/,
    /*featuresCards*/fetchContent('%featuresCardsSlotId%@%featuresCardsSlotVersion%', {route: context})/*featuresCards*/,
    /*featuresTitle*/fetchContent('%featuresTitleSlotId%@%featuresTitleSlotVersion%', {route: context})/*featuresTitle*/,
    /*stats*/fetchContent('%statsSlotId%@%statsSlotVersion%', {route: context})/*stats*/,
  ]);

  return {
    props: {
      content: {
        /*header*/header/*header*/,
        /*hero*/hero/*hero*/,
        /*featuresCards*/featuresCards/*featuresCards*/,
        /*featuresTitle*/featuresTitle/*featuresTitle*/,
        /*stats*/stats/*stats*/,
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
        href="%workspaceUrl%/slots?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.mantine&utm_content=marketing_page&utm_term=nextjs"
        target="_blank"
        position="bottom-right"
      />
    </>
  );
}
