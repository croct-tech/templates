import { PricingSection } from "@/components/pricing-section";
import {fetchContent} from "@croct/plug-next/server";

export default async function Page() {
  const {content} = await fetchContent('%slotId%@1');

  return (<PricingSection {...content} />);
}
