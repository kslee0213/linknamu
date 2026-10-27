"use client";

import type { LinkItem } from "@/data/profile";

export default function LinkCard({ id, title, url }: LinkItem) {
  function handleClick() {
    // 집계 실패가 링크 이동을 막지 않도록 응답은 무시합니다.
    fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true,
    }).catch(() => undefined);
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="flex h-16 w-full items-center justify-center rounded-3xl border border-white/60 bg-white/40 px-6 text-center font-medium text-ink shadow-[0_10px_30px_-14px_rgba(120,60,20,0.35)] backdrop-blur-md transition-colors duration-200 hover:bg-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
    >
      {title}
    </a>
  );
}
