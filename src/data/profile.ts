export type Profile = {
  name: string;
  bio: string;
  photoSrc?: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

// 임시 데이터입니다. DB 연동 전까지 여기서 관리합니다.
export const profile: Profile = {
  name: "이곰자",
  bio: "세상에서 가장 착한 강아지",
  photoSrc: "/profile-placeholder.svg",
};

export const links: LinkItem[] = [
  { id: "github", title: "Github", url: "https://example.com/github" },
  { id: "linkedin", title: "LinkedIn", url: "https://example.com/linkedin" },
  { id: "blog", title: "Blog", url: "https://example.com/blog" },
];
