import type { GetServerSideProps, GetServerSidePropsContext } from "next"
import type { SlotContent } from "@croct/plug-next"
import { PageContent } from "?/./content.{jsx,tsx}";
import { AnnouncementBar } from "?/**/*/announcement-bar.{jsx,tsx}";
import { TemplateCanvas } from "@croct/template-ui/next"
import { fetchContent, evaluate, type FetchResponse } from "@croct/plug-next/server"
import type { JsonObject } from "@croct/plug-next"

export type PageProps = {
  content: SlotContent<'%slotId%@%slotVersion%'>
}

export const getServerSideProps: GetServerSideProps<PageProps> = async context => ({
  /*
   * 💡Pro tip
   *
   * Croct provides a feature called Dynamic values, which enables
   * personalized content directly through the interface.
   *
   * The function below uses the Evaluate API to fetch context and
   * manually replace placeholders in the message.
   *
   * While functional, this approach is generally not recommended when
   * Dynamic values are available.
   *
   * Advantages of using Dynamic values:
   *
   * - They allow referencing any available context information
   * - You do not need to manually implement logic for each property
   * - You avoid fetching data that might not be used
   *
   * With Dynamic values enabled, the same result could be achieved with:
   *
   * props: fetchContent('%slotId%@%slotVersion%');
   *
   * Learn more in the documentation:
   * https://docs.croct.com/reference/content/definition/introduction#dynamic-values
   */
  props: await fetchPersonalizedContent(context)
});

export default function Page({content}: PageProps) {
  return (
    <TemplateCanvas
      theme="light"
      title="Announcement bar"
      ctaLabel="Edit this content"
      ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.use_case_location&utm_content=geomarketing&utm_term=nextjs"
      ctaTarget="_blank"
      src="#"
      fullScreen
      portal
    >
      <AnnouncementBar {...content} />
      <PageContent />
    </TemplateCanvas>
  );
}

async function fetchPersonalizedContent(context: GetServerSidePropsContext): Promise<FetchResponse<'%slotId%@%slotVersion%'>> {
  const [response, location] = await Promise.all([
    fetchContent('%slotId%@%slotVersion%', {route: context}),
    evaluate<JsonObject>('location', {route: context}),
  ]);

  if (response.content.bar !== undefined) {
    response.content.bar.message = interpolate(response.content.bar.message, location)
        ?? "Sign up for our upcoming **launch event** in your region!";
  }

  return response;
}

function interpolate(message: string, properties: JsonObject): string|null {
  let result = message;
  for (const [key, value] of Object.entries(properties)) {
    const placeholder = `%${key}%`;

    if (typeof value !== 'string') {
      let result = message;

      for (const [key, value] of Object.entries(properties)) {
        if (typeof value === 'string') {
          result = result.replace(`%${key}%`, value);
        }
      }

      return /%\S+%/.test(result) ? null : result;
  }

  return /%\S+%/.test(result) ? null : result;
}
