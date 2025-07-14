import { SignInSection } from "?/**/*/SignInSection.{js,jsx,ts,tsx}"
import { LinkButton } from "@croct/template-ui/react"
import { fetchContent } from "@croct/plug-next/server"

export default async function Page() {
  const {content} = await fetchContent('%slotId%@%slotVersion%');

  return (
    <>
      <SignInSection {...content} />
      <LinkButton
        branded
        label="Edit this content"
        href="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.material_ui&utm_content=sign_in_side&utm_term=nextjs"
        target="_blank"
        position="bottom-right"
      />
    </>
  );
}
