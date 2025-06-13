import type { GetServerSideProps } from "next"
import type { SlotContent } from "@croct/plug-next"
import { SignInSection } from "?/**/*/SignInSection.{js,jsx,ts,tsx}"
import { LinkButton } from "@croct/template-ui/react"
import { fetchContent } from "@croct/plug-next/server"

export type PageProps = {
  content: SlotContent<'%slotId%@%slotVersion%'>
}

export const getServerSideProps: GetServerSideProps<PageProps> = async context => ({
  props: await fetchContent('%slotId%@%slotVersion%', {route: context})
});

export default function Page({content}: PageProps) {
  return (
    <>
      <SignInSection {...content} />
      <LinkButton
        branded
        label="Edit side content"
        href="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.material_ui&utm_content=sign_in_side&utm_term=nextjs"
        target="_blank"
        position="bottom-right"
      />
    </>
  );
}
