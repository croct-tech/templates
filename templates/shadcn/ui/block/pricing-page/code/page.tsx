import {PricingSection} from "?/**/*/pricing-section.tsx";
import {fetchContent} from "@croct/plug-next/server";

export default async function Page() {
  const {content} = await fetchContent('%slotId%@%slotVersion%');

  return (<PricingSection {...content} />);
}
