import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      {/* 글래스 카드가 비쳐 보이도록 뒤에 흐린 색 덩어리를 깔아 둡니다. */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-20 size-72 rounded-full bg-orange-200/60 blur-3xl" />
        <div className="absolute top-1/3 -right-24 size-80 rounded-full bg-rose-200/50 blur-3xl" />
        <div className="absolute -bottom-20 left-1/4 size-64 rounded-full bg-amber-100/80 blur-3xl" />
      </div>
      <main className="relative mx-auto flex w-full max-w-md flex-1 flex-col gap-12 px-8 py-16">
        <ProfileHeader {...profile} />
        <LinkList links={links} />
      </main>
    </>
  );
}
