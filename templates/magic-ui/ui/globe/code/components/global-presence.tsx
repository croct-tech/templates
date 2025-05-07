"use client";

import { Globe } from "?/**/*/magicui/globe.tsx"
import { COBEOptions } from "cobe"

interface GlobeMaker {
  latitude: number;
  longitude: number;
  size: number;
}

interface GlobalPresenceProps {
  markers?: GlobeMaker[]
}

const GLOBE_CONFIG: Omit<COBEOptions, "markers"> = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
};

export function GlobalPresence({markers = []}: GlobalPresenceProps) {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Globe
      </span>
      <Globe
        className="top-28"
        config={{
          ...GLOBE_CONFIG,
          markers: markers.map(marker => ({
            location: [marker.latitude, marker.longitude],
            size: marker.size,
          })),
        }}
      />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}
