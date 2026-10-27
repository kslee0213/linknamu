import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { getDb } from "@/lib/mongodb";

// 링크별 클릭 수를 clicks 컬렉션에 저장합니다. 문서 하나가 링크 하나입니다.
export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { id?: unknown } | null;
  const id = body?.id;

  if (typeof id !== "string" || !links.some((link) => link.id === id)) {
    return NextResponse.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  const db = await getDb();
  await db
    .collection<{ _id: string; count: number }>("clicks")
    .updateOne({ _id: id }, { $inc: { count: 1 } }, { upsert: true });

  return NextResponse.json({ ok: true });
}
