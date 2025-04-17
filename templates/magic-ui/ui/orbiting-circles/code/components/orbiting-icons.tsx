"use client";

import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

interface Orbit {
  icons: string[];
  style?: {
    iconSize?: number;
    radius?: number;
    path?: boolean,
    speed?: number;
    delay?: number;
    reverse?: boolean;
    duration?: number;
  }
}

interface OrbitingIconsProps {
  orbits: Orbit[];
}

export function OrbitingIcons({orbits}: OrbitingIconsProps) {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      {orbits.map(({style, ...orbit}, orbitIndex) => (
        <OrbitingCircles key={orbitIndex} {...style}>
          {
            orbit.icons.map((icon, iconIndex) => (
              <img src={icon} alt="Icon" key={iconIndex}  />
            ))
          }
        </OrbitingCircles>
      ))}
    </div>
  );
}
