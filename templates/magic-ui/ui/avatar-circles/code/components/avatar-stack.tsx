import { AvatarCircles } from "?/**/*/magicui/avatar-circles.tsx"

interface AvatarProps {
  imageUrl: string;
  profileUrl: string;
}

interface AvatarStackProps {
  numPeople?: number;
  avatars: AvatarProps[]
}

export function AvatarStack({avatars, numPeople}: AvatarStackProps) {
  return <AvatarCircles avatarUrls={avatars} numPeople={numPeople} />;
}

