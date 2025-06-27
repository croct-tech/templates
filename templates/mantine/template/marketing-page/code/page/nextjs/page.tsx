import { MarketingPage } from "?/**/*/MarketingPage.{js,jsx,ts,tsx}"
import { LinkButton } from "@croct/template-ui/react"
import { fetchContent } from "@croct/plug-next/server"

export default async function Page() {
  const [
    /*header*/{content: header}/*header*/,
    /*hero*/{content: hero}/*hero*/,
    /*featuresCards*/{content: featuresCards}/*featuresCards*/,
    /*featuresTitle*/{content: featuresTitle}/*featuresTitle*/,
    /*stats*/{content: stats}/*stats*/,
  ] = await Promise.all([
    /*header*/fetchContent('%headerSlotId%@%headerSlotVersion%')/*header*/,
    /*hero*/fetchContent('%heroSlotId%@%heroSlotVersion%')/*hero*/,
    /*featuresCards*/fetchContent('%featuresCardsSlotId%@%featuresCardsSlotVersion%')/*featuresCards*/,
    /*featuresTitle*/fetchContent('%featuresTitleSlotId%@%featuresTitleSlotVersion%')/*featuresTitle*/,
    /*stats*/fetchContent('%statsSlotId%@%statsSlotVersion%')/*stats*/,
  ]);

  const content = {
    /*header*/header/*header*/,
    /*hero*/hero/*hero*/,
    /*featuresCards*/featuresCards/*featuresCards*/,
    /*featuresTitle*/featuresTitle/*featuresTitle*/,
    /*stats*/stats/*stats*/,
  };

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
