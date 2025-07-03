import { SignInSection } from "?/**/*/SignInSection.{js,jsx,ts,tsx}"
import { LinkButton } from "@croct/template-ui/react"
import { useContent } from "@croct/plug-react"

export default function Page() {
  const content = useContent('%slotId%@%slotVersion%');

  return (
    <>
      <SignInSection {...content} />
      <LinkButton
        branded
        label="Edit side content"
        href="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.material_ui&utm_content=sign_in_side&utm_term=react"
        target="_blank"
        position="bottom-right"
      />
    </>
  );
}

