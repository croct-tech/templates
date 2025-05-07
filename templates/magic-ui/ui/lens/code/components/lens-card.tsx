"use client";

import { Button } from "?/**/*/ui/button.tsx"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "?/**/*/ui/card.tsx";
import { Lens } from "?/**/*/magicui/lens.tsx"

interface LensCardProps {
  image: string;
  zoomFactor?: number;
  lensSize?: number;
  lensColor?: string;
  duration?: number;
}

export function LensCard({image, ...props}: LensCardProps) {
  return (
    <Card className="relative max-w-md shadow-none">
      <CardHeader>
        <Lens
          zoomFactor={2}
          lensSize={150}
          isStatic={false}
          ariaLabel="Zoom Area"
          {...props}
        >
          <img
            src={image}
            alt="Thumbnail"
            width={500}
            height={500}
          />
        </Lens>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-2xl">Your next camp</CardTitle>
        <CardDescription>
          See our latest and best camp destinations all across the five
          continents of the globe.
        </CardDescription>
      </CardContent>
      <CardFooter className="space-x-4">
        <Button>Let&apos;s go</Button>
        <Button variant="secondary">Another time</Button>
      </CardFooter>
    </Card>
  );
}
