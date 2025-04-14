"use client";

import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "?/**/*/magicui/bento-grid.tsx";

interface FeatureCardProps {
  name: string;
  icon: "BellIcon" | "CalendarIcon" | "FileTextIcon" | "GlobeIcon" | "InputIcon";
  description: string;
  href: string;
  cta: string;
  grid: {
    columnStart: number;
    columnEnd: number;
    rowStart: number;
    rowEnd: number;
  }
}

export interface FeatureGridProps {
  cards: FeatureCardProps[];
}

const icons = {
  BellIcon: BellIcon,
  CalendarIcon: CalendarIcon,
  FileTextIcon: FileTextIcon,
  GlobeIcon: GlobeIcon,
  InputIcon: InputIcon,
}

export function FeatureGrid({cards}: FeatureGridProps) {
  return (
    <BentoGrid className="grid lg:grid-rows-3">
      {cards.map(({grid, icon, ...card}) => (
        <BentoCard
          key={card.name}
          {...card}
          Icon={icons[icon]}
          background={<img className="absolute -right-20 -top-20 opacity-60" />}
          className={[
            `lg:row-start-${grid.rowStart}`,
            `lg:row-end-${grid.rowEnd}`,
            `lg:col-start-${grid.columnStart}`,
            `lg:col-end-${grid.columnEnd}`,
          ].join(' ')}
        />
      ))}
    </BentoGrid>
  );
}
