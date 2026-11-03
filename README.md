# secu-blog

[Astro](https://astro.build) 기반 정적 보안 블로그. 기존 secu.bot.cd(티스토리)의
모노크롬 다크 디자인을 그대로 옮긴 테마 — Pretendard 폰트, 개수 표시 카테고리 탭,
번호 페이지네이션, 프로필 About 페이지, RSS를 제공합니다.

## 실행

```bash
npm install      # 최초 1회
npm run dev      # 개발 서버 (http://localhost:4321)
npm run build    # dist/ 로 정적 빌드
npm run preview  # 빌드 결과 미리보기
```

## 글 쓰기

`src/content/posts/` 에 `.md` 파일을 추가하면 됩니다. 파일명이 URL 경로가 됩니다
(`my-post.md` → `/posts/my-post/`). 프런트매터 형식:

```md
---
title: 글 제목
date: 2026-11-03
category: CTF        # Memory | Study | CTF | Bugbounty | Analysis
description: 목록/검색/RSS에 쓰일 한 줄 설명 (선택)
draft: false         # true면 빌드 시 숨김 (선택)
---

본문 (Markdown)
```

- 글 번호(01, 02…)는 작성일 오름차순으로 자동 부여됩니다.
- 읽기 시간은 본문 길이로 자동 계산됩니다.

## 사이트 정보 수정

- `src/config.ts` — 블로그 제목, 작성자, 이메일, GitHub, 카테고리, 메뉴
- `src/pages/about.astro` — About 페이지의 수상/자격증/활동/학력
- `public/images/profile.png` — About 프로필 사진 (이 파일만 교체하면 바뀜)
- `astro.config.mjs` — 배포 도메인(`site`)
- `src/styles/global.css` — 색상/디자인 (`:root` 변수)

카테고리를 바꾸려면 `src/config.ts`의 `CATEGORIES`와
`src/content.config.ts`의 `category` enum을 함께 수정하세요.

## 배포 (Cloudflare Pages)

1. 이 폴더를 GitHub 저장소로 push
2. Cloudflare Pages → Create → 저장소 연결
3. 빌드 설정: **Build command** `npm run build`, **Output directory** `dist`
4. 배포 후 Custom domains에서 `secu.bot.cd` 연결

정적 사이트이므로 Vercel/Netlify/GitHub Pages로도 동일하게 배포됩니다.
