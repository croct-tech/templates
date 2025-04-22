import { NotificationList } from "?/**/*/notification-list.tsx"
import { TemplateCanvas } from "@croct/template-ui/next"
import { fetchContent } from "@croct/plug-next/server"

export default async function Page() {
  const {content} = await fetchContent('%slotId%@%slotVersion%');

  return (
    <TemplateCanvas
      theme="light"
      title="Magic UI - Animated list"
      ctaLabel="Edit this content"
      ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.magic_ui&utm_content=animated_list&tum_term=nextjs"
      ctaTarget="_blank"
      src="#"
      fullScreen
      portal
    >
      <div className="p-10">
        <NotificationList {...content} />
      </div>
    </TemplateCanvas>
  );
}
