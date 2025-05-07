"use client";

import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "?/**/*/magicui/bento-grid.tsx"
import { cn } from "?/**/*/utils.ts"

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

const gridClasses = {
  row: {
    start: ['row-start-1', 'row-start-2', 'row-start-3', 'row-start-4'],
    end: ['row-end-1', 'row-end-2', 'row-end-3', 'row-end-4'],
  },
  column: {
    start: ['col-start-1', 'col-start-2', 'col-start-3', 'col-start-4'],
    end: ['col-end-1', 'col-end-2', 'col-end-3', 'col-end-4'],
  }
};

export function FeatureGrid({cards}: FeatureGridProps) {
  return (
    <BentoGrid className="grid lg:grid-rows-3">
      {cards.map(({grid, icon, ...card}) => (
        <BentoCard
          key={card.name}
          {...card}
          Icon={icons[icon]}
          background={<img className="absolute -right-20 -top-20 opacity-60" />}
          className={cn(
            gridClasses.row.start[grid.rowStart - 1],
            gridClasses.row.end[grid.rowEnd - 1],
            gridClasses.column.start[grid.columnStart - 1],
            gridClasses.column.end[grid.columnEnd - 1]
          )}
        />
      ))}
    </BentoGrid>
  );
}
