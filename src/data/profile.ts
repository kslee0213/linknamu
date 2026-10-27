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
  name: "이경수",
  bio: "경영 컨설턴트 ¦ 중소기업이 AI를 활용도를 높여 경쟁력을 높여드립니다",
  photoSrc: "/profile.jpeg",
};

export const links: LinkItem[] = [
  { id: "github", title: "🛜 깃허브", url: "https://github.com/kslee0213" },
  {
    id: "youtube",
    title: "🖊️ 유튜브",
    url: "https://youtube.com/@ajjesjdjeiwiwowoossks?si=CEP8iEvzL6sRrVhL",
  },
  { id: "email", title: "📧 이메일", url: "mailto:0213kyungsoo@gmail.com" },
];
