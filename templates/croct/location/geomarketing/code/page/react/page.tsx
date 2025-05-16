import { PageContent } from "?/./content.{jsx,tsx}";
import { AnnouncementBar } from "?/**/*/announcement-bar.{jsx,tsx}"
import { TemplateCanvas } from "@croct/template-ui/react"
import { useContent, useEvaluation, type SlotContent, type JsonObject } from "@croct/plug-react"

export default function Page() {
  /*
   * 💡Pro tip
   *
   * Croct provides a feature called Dynamic values, which enables
   * personalized content directly through the interface.
   *
   * The hook below uses the Evaluate API to fetch context and
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
   * const content = useContent('%slotId%@%slotVersion%');
   *
   * Learn more in the documentation:
   * https://docs.croct.com/reference/content/definition/introduction#dynamic-values
   */
  const content = usePersonalizedContent();

  return (
    <TemplateCanvas
      theme="light"
      title="Announcement bar"
      ctaLabel="Edit this content"
      ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.use_case_location&utm_content=geomarketing&utm_term=react"
      ctaTarget="_blank"
      fullScreen
      isolated
    >
      <AnnouncementBar {...content} />
      <PageContent />
    </TemplateCanvas>
  );
}

function usePersonalizedContent(): Promise<SlotContent<'%slotId%@%slotVersion%'>> {
  const content = useContent('%slotId%@%slotVersion%');
  const location = useEvaluation<JsonObject>('location');

  if (content.bar !== undefined) {
    content.bar.message = interpolate(content.bar.message, location)
        ?? "Sign up for our upcoming **launch event** in your region!";
  }

  return content;
}

function interpolate(message: string, properties: JsonObject): string|null {
  let result = message;

  for (const [key, value] of Object.entries(properties)) {
    if (typeof value === 'string') {
      result = result.replace(`%${key}%`, value);
    }
  }

  return /%\S+%/.test(result) ? null : result;
}
