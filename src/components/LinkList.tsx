"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 데이터를 받기 전에는 비어 있으므로 카드에 0회로 보입니다.
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    let ignore = false;

    async function loadCounts() {
      const res = await fetch("/api/click", { cache: "no-store" });
      if (!res.ok) return;
      const data = (await res.json()) as { counts: Record<string, number> };
      // 클릭 직후 받은 값이 더 최신이므로 이미 있는 값을 우선합니다.
      if (!ignore) setCounts((prev) => ({ ...data.counts, ...prev }));
    }

    loadCounts().catch(() => undefined);
    return () => {
      ignore = true;
    };
  }, []);

  function handleClick(id: string) {
    // 집계 실패가 링크 이동을 막지 않도록 응답 실패는 무시합니다.
    async function increment() {
      const res = await fetch("/api/click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
        keepalive: true,
      });
      if (!res.ok) return;
      const data = (await res.json()) as { count: number };
      setCounts((prev) => ({ ...prev, [id]: data.count }));
    }

    increment().catch(() => undefined);
  }

  return (
    <ul className="flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard {...link} count={counts[link.id] ?? 0} onClick={handleClick} />
        </li>
      ))}
    </ul>
  );
}
