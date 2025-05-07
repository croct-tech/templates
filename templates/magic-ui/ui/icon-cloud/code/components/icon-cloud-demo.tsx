"use client";

import { IconCloud } from "?/**/*/magicui/icon-cloud.tsx"

interface IconCloudDemoProps {
  images: string[];
}

export function IconCloudDemo({images}: IconCloudDemoProps) {
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
