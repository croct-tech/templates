import { TweetCard } from "?/**/*/magicui/tweet-card.tsx";

interface TweetCardProps {
  id: string;
}

export function Tweet({ id }: TweetCardProps) {
  return <TweetCard id={id} />;
}
