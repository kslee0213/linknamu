import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { getDb } from "@/lib/mongodb";

type ClickDoc = { _id: string; count: number };

const linkIds = links.map((link) => link.id);

// 모든 링크의 클릭 수를 한 번에 돌려줍니다. 클릭 기록이 없는 링크는 응답에 없습니다.
export async function GET() {
  const db = await getDb();
  const docs = await db
    .collection<ClickDoc>("clicks")
    .find({ _id: { $in: linkIds } })
    .toArray();

  return NextResponse.json({
    counts: Object.fromEntries(docs.map((doc) => [doc._id, doc.count])),
  });
}

// 링크별 클릭 수를 clicks 컬렉션에 저장합니다. 문서 하나가 링크 하나입니다.
export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { id?: unknown } | null;
  const id = body?.id;

  if (typeof id !== "string" || !links.some((link) => link.id === id)) {
    return NextResponse.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  const db = await getDb();
  const doc = await db
    .collection<ClickDoc>("clicks")
    .findOneAndUpdate({ _id: id }, { $inc: { count: 1 } }, { upsert: true, returnDocument: "after" });

  return NextResponse.json({ ok: true, count: doc?.count ?? 1 });
}
