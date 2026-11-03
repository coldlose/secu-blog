import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 글(posts) 컬렉션. src/content/posts/*.md 파일을 읽습니다.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Memory', 'Study', 'CTF', 'Bugbounty', 'Analysis']),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
