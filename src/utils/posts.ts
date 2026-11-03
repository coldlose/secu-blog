import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'> & {
  number: number;
  readingMinutes: number;
};

// 한글 기준 대략 분당 500자로 읽기 시간 추정.
function estimateReading(body: string): number {
  const chars = body.replace(/\s/g, '').length;
  return Math.max(1, Math.round(chars / 500));
}

// 모든 글을 불러와 번호(오래된 글=01)를 매기고 최신순으로 반환합니다.
export async function getPosts(): Promise<Post[]> {
  const all = await getCollection('posts', ({ data }) =>
    import.meta.env.PROD ? data.draft !== true : true
  );

  const ascending = [...all].sort(
    (a, b) => a.data.date.getTime() - b.data.date.getTime()
  );

  const numbered: Post[] = ascending.map((post, i) => ({
    ...post,
    number: i + 1,
    readingMinutes: estimateReading(post.body ?? ''),
  }));

  return numbered.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

// 2026년 7월 29일 형식
export function formatDateKo(date: Date): string {
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
}

// 번호 두 자리 패딩 (1 -> "01")
export function pad(n: number): string {
  return String(n).padStart(2, '0');
}
