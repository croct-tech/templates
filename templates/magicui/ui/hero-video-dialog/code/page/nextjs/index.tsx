import type {GetServerSideProps} from 'next'
import type {SlotContent} from '@croct/plug-next'
import {HeroVideoPlayer} from "?/**/*/hero-video-player.tsx"
import {TemplateCanvas} from "@croct/template-ui/next"
import {fetchContent} from "@croct/plug-next/server"

export type PageProps = {
  content: SlotContent<'%slotId%@%slotVersion%'>
}

export const getServerSideProps: GetServerSideProps<PageProps> = async context => ({
  props: await fetchContent('%slotId%@%slotVersion%', {route: context})
});

export default function Page({content}: PageProps) {
  return (
    <TemplateCanvas
      title="Magic UI - Hero video dialog"
      ctaLabel="Edit this content"
      ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%"
      ctaTarget="_blank"
      src="#"
      fullScreen
      portal
    >
      <div className="flex absolute h-full w-full items-center justify-center p-10">
        <div className="w-1/2">
          <HeroVideoPlayer {...content} />
        </div>
      </div>
    </TemplateCanvas>
  );
}
