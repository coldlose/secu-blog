// 사이트 전역 설정. 여기만 고치면 블로그 전체에 반영됩니다.
export const SITE = {
  title: 'coldlose',
  subtitle: "coldlose's blog",
  description: '보안을 공부하는 고등학생의 기록 — Web & Infra, CTF, Bug Bounty',
  // 배포 도메인 (astro.config.mjs 의 site 와 맞추세요)
  url: 'https://secu.bot.cd',
  lang: 'ko',
};

export const AUTHOR = {
  name: '이찬진 Lee ChanJin',
  handle: 'coldlose',
  role: 'CYBER SECURITY · INFRA',
  bio: '보안을 공부하는 고등학생입니다.',
  field: 'Web & Infra',
  email: 'coldlose125@gmail.com',
  github: 'https://github.com/coldlose',
  githubLabel: 'github.com/coldlose',
  location: 'Gwangju, South Korea',
};

// 글 카테고리. content.config.ts 의 enum 과 순서를 맞추면 좋습니다.
export const CATEGORIES = ['Memory', 'Study', 'CTF', 'Bugbounty', 'Analysis'] as const;
export type Category = (typeof CATEGORIES)[number];

export const NAV = [
  { label: 'Blog', href: '/' },
  { label: 'About', href: '/about' },
];
