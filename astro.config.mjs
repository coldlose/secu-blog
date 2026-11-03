// @ts-check
import { defineConfig } from 'astro/config';

// 배포 도메인에 맞게 site 값을 바꾸세요 (RSS/사이트맵 절대경로에 쓰입니다).
export default defineConfig({
  site: 'https://secu.bot.cd',
  markdown: {
    shikiConfig: {
      // 코드 블록 다크 테마
      theme: 'github-dark',
      wrap: true,
    },
  },
});
