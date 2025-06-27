import { MarketingPage } from "?/**/*/MarketingPage.{js,jsx,ts,tsx}"
import { LinkButton } from "@croct/template-ui/react"
import { useContent } from "@croct/plug-react"
import { useColorScheme } from "@mui/material/styles";

export default function Page() {
  const content = {
    /*header*/header: useContent('%headerSlotId%@%headerSlotVersion%')/*header*/,
    /*hero*/hero: useContent('%heroSlotId%@%heroSlotVersion%')/*hero*/,
    /*featuresCards*/featuresCards: useContent('%featuresCardsSlotId%@%featuresCardsSlotVersion%')/*featuresCards*/,
    /*featuresTitle*/featuresTitle: useContent('%featuresTitleSlotId%@%featuresTitleSlotVersion%')/*featuresTitle*/,
    /*stats*/stats: useContent('%statsSlotId%@%statsSlotVersion%')/*stats*/,
  }

  const theme = useColorScheme();

  return (
    <>
      <MarketingPage {...content} />
      <LinkButton
        branded
        theme={theme.mode}
        label="Edit content"
        href="%workspaceUrl%/slots?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.mantine&utm_content=marketing_page&utm_term=nextjs"
        target="_blank"
        position="bottom-right"
      />
    </>
  );
}

