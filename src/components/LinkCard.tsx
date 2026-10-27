import type { LinkItem } from "@/data/profile";

type Props = LinkItem & {
  count: number;
  onClick: (id: string) => void;
};

export default function LinkCard({ id, title, url, count, onClick }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => onClick(id)}
      className="relative flex h-16 w-full items-center justify-center rounded-3xl border border-white/60 bg-white/40 px-6 text-center font-medium text-ink shadow-[0_10px_30px_-14px_rgba(120,60,20,0.35)] backdrop-blur-md transition-colors duration-200 hover:bg-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
    >
      {title}
      <span className="absolute right-6 text-xs tabular-nums text-muted">{count}회</span>
    </a>
  );
}
