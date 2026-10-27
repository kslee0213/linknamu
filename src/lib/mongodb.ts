import { MongoClient } from "mongodb";

// 개발 서버의 핫 리로드마다 새 연결이 만들어지지 않도록 전역에 보관합니다.
const globalForMongo = globalThis as unknown as {
  mongoClientPromise?: Promise<MongoClient>;
};

export async function getDb() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI 환경 변수가 설정되어 있지 않습니다.");
  }

  globalForMongo.mongoClientPromise ??= new MongoClient(uri).connect().catch((error) => {
    // 연결에 실패하면 다음 요청에서 다시 연결을 시도합니다.
    globalForMongo.mongoClientPromise = undefined;
    throw error;
  });

  const client = await globalForMongo.mongoClientPromise;
  return client.db("linknamu");
}
