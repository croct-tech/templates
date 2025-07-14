import { SignUpSection } from "?/**/*/SignUpSection.{js,jsx,ts,tsx}"
import { LinkButton } from "@croct/template-ui/react"
import { useContent } from "@croct/plug-react"

export default function Page() {
  const content = useContent('%slotId%@%slotVersion%');

  return (
    <>
      <SignUpSection {...content} />
      <LinkButton
        branded
        label="Edit this content"
        href="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.material_ui&utm_content=sign_up_form&utm_term=react"
        target="_blank"
        position="bottom-right"
      />
    </>
  );
}

