"use client";

import HeroVideoDialog from "?/**/*/magicui/hero-video-dialog.tsx";

export interface HeroVideoPlayerProps {
  animationStyle: "from-bottom"
    | "from-center"
    | "from-left"
    | "from-right"
    | "from-top"
    | "left-in-right-out"
    | "top-in-bottom-out"
    | "fade";
  thumbnailSrc: string;
  thumbnailAlt?: string;
  videoSrc: string;
}

export function HeroVideoPlayer(props: HeroVideoPlayerProps) {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle={props.animationStyle}
        videoSrc={props.videoSrc}
        thumbnailSrc={props.thumbnailSrc}
        thumbnailAlt={props.thumbnailAlt}
      />
    </div>
  );
}
