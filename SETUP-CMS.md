# 글 관리자(+버튼) 설정 가이드

이 블로그에는 **Sveltia CMS** 관리자 패널이 들어 있어요. 주소 `/admin` 에서
로그인하면 글 목록이 보이고, **+ 버튼 → 폼 작성 → 발행**으로 글을 쓸 수 있어요.
글을 발행하면 `src/content/posts/` 에 `.md` 파일이 자동으로 만들어져요.

쓰는 방법은 두 가지입니다.

---

## 방법 A. 지금 바로, 내 컴퓨터에서 쓰기 (GitHub 불필요)

Chrome 또는 Edge 브라우저에서만 돼요. 설정이 전혀 필요 없어요.

1. 블로그 폴더에서 개발 서버 실행:
   ```bash
   npm run dev
   ```
2. 브라우저에서 `http://localhost:4321/admin/` 접속
3. **"로컬 저장소로 작업"** 클릭 → 창이 뜨면 **blog 폴더**를 선택
4. 이제 **+ 버튼**으로 글을 쓰고 저장하면, 폴더의 `.md` 파일이 바로 만들어져요.

> 저장된 글은 내 컴퓨터에만 있어요. 사이트에 올리려면 그 파일들을
> GitHub에 push 하면 됩니다(배포가 연결돼 있으면 자동 반영).

---

## 방법 B. 배포된 사이트에서 GitHub 로그인으로 쓰기

어디서든(휴대폰 포함) `내사이트/admin` 에 들어가 GitHub로 로그인해 글을 쓰는 방식.
한 번만 아래 설정을 해두면 돼요.

### 사전 준비
- 블로그가 GitHub 저장소에 올라가 있어야 함
- Cloudflare Pages 로 배포돼 있어야 함 (README의 배포 섹션 참고)

### 1) config.yml 에 내 저장소 적기
`public/admin/config.yml` 의 `repo:` 를 본인 저장소로 변경:
```yaml
backend:
  name: github
  repo: 깃허브아이디/저장소이름   # 예: coldlose/secu-blog
  branch: main
```

### 2) GitHub OAuth 앱 만들기
GitHub → Settings → Developer settings → **OAuth Apps** → **New OAuth App**
- Application name: 아무거나 (예: secu-blog CMS)
- Homepage URL: `https://secu.bot.cd`
- Authorization callback URL: `https://sveltia-cms-auth.<본인>.workers.dev/callback`
  (아래 3단계에서 만든 워커 주소. 일단 임시로 두고 나중에 수정해도 됨)
- 만든 뒤 **Client ID** 와 **Client Secret** 을 복사해 둠

### 3) 인증 중계용 Cloudflare 워커 배포
GitHub 로그인을 중계하는 작은 워커가 필요해요. 공식 저장소를 그대로 씁니다:
- https://github.com/sveltia/sveltia-cms-auth
- README의 **Deploy to Cloudflare** 버튼으로 배포
- 배포 시 환경변수 설정:
  - `GITHUB_CLIENT_ID` = 2단계의 Client ID
  - `GITHUB_CLIENT_SECRET` = 2단계의 Client Secret
  - `ALLOWED_DOMAINS` = `secu.bot.cd` (쉼표로 여러 개 가능)
- 배포되면 워커 주소(`https://sveltia-cms-auth.xxx.workers.dev`)를 복사
- 2단계의 **callback URL** 을 `워커주소/callback` 으로 맞춰 저장

### 4) config.yml 에 워커 주소 연결
```yaml
backend:
  name: github
  repo: 깃허브아이디/저장소이름
  branch: main
  base_url: https://sveltia-cms-auth.xxx.workers.dev   # 3단계 워커 주소
```
변경 후 다시 push → 배포되면 `내사이트/admin` 에서 **GitHub로 로그인** 버튼이 작동해요.

---

## 참고
- `/admin` 은 검색엔진에 노출되지 않도록 `noindex` 처리돼 있어요.
- 카테고리/필드를 바꾸려면 `public/admin/config.yml` 의 `fields` 와
  `src/content.config.ts` 의 스키마를 함께 수정하세요.
