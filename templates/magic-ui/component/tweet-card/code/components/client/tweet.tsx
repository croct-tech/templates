"use client";

import { useTweet } from "react-tweet"
import {
  MagicTweet,
  TweetNotFound,
  TweetSkeleton,
} from "?/**/*/magicui/tweet-card.tsx";

interface TweetCardProps {
  id: string;
}

export function Tweet({ id }: TweetCardProps) {
  const { data, error, isLoading } = useTweet(id);

  if (isLoading) return <TweetSkeleton />;

  if (error || !data) {
    return <TweetNotFound error={error} />;
  }

  return <MagicTweet tweet={data}/>;
}

