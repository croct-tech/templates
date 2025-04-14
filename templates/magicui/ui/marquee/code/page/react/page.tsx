import { ReviewList } from "?/**/*/review-list.tsx"
import { TemplateCanvas } from "@croct/template-ui/react"
import { useContent } from "@croct/plug-react"

export default function Page() {
  const content = useContent('%slotId%@%slotVersion%');

  return (
    <TemplateCanvas
      title="Magic UI - Marquee reviews"
      ctaLabel="Edit this content"
      ctaLink="https://app.croct.com/organizations/vercel/workspaces/vercel/slots/edit/magic-ui-marquee-reviews/1"
      maxWidth="1200px"
      src="#"
      fullScreen
      portal
    >
      <div className="flex absolute h-full w-full items-center justify-center p-10">
        <ReviewList {...content} />
      </div>
    </TemplateCanvas>
  );
}
