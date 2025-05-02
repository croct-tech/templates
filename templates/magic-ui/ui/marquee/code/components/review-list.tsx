"use client";

import { ReviewCard, ReviewCardProps } from "?/./review-card.tsx";
import {Marquee} from "?/**/*/magicui/marquee.tsx";

export interface ReviewListProps extends ReviewListVariantProps {
  variant: "horizontal" | "vertical" | "3d";
}

export function ReviewList({variant, ...props}: ReviewListProps) {
  switch (variant) {
    case "horizontal":
      return <ReviewListHorizontal {...props} />;

    case "vertical":
      return <ReviewListVertical {...props} />;

    case "3d":
      return <ReviewList3d {...props} />;
  }
}

interface ReviewListVariantProps {
  /**
   * The list of reviews to display
   */
  reviews: ReviewCardProps[];

  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;

  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;

  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
}

function ReviewListVertical({reviews, reverse = false, pauseOnHover, repeat}: ReviewListVariantProps) {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover={pauseOnHover} repeat={repeat} reverse={reverse} vertical className="[--duration:10s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse={!reverse} pauseOnHover={pauseOnHover} repeat={repeat} vertical className="[--duration:10s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}

export function ReviewListHorizontal({reviews, reverse = false, pauseOnHover, repeat}: ReviewListVariantProps) {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee reverse={reverse} pauseOnHover={pauseOnHover} repeat={repeat} className="[--duration:10s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse={!reverse} pauseOnHover={pauseOnHover} repeat={repeat} className="[--duration:10s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}

function ReviewList3d({reviews, reverse = false, pauseOnHover, repeat}: ReviewListVariantProps) {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
  const thirdRow = reviews.slice(0, reviews.length / 2);
  const fourthRow = reviews.slice(reviews.length / 2);

  return (
    <div className="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform:
            "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
        }}
      >
        <Marquee reverse={reverse} pauseOnHover={pauseOnHover} repeat={repeat} vertical className="[--duration:10s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse={!reverse} pauseOnHover={pauseOnHover} repeat={repeat} className="[--duration:10s]" vertical>
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse={!reverse} pauseOnHover={pauseOnHover} repeat={repeat} className="[--duration:10s]" vertical>
          {thirdRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse={reverse} pauseOnHover={pauseOnHover} repeat={repeat} className="[--duration:10s]" vertical>
          {fourthRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
