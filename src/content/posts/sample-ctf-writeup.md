---
title: Write-up 작성 템플릿
date: 2026-10-20
category: CTF
description: CTF 문제 풀이를 기록할 때 쓰는 기본 틀 — 샘플 글입니다.
---

> 이 글은 글 작성 방식을 보여주기 위한 샘플입니다. 자유롭게 수정하거나 삭제하세요.

## Challenge

- **대회**: Example CTF 2026
- **분야**: Web
- **점수**: 300

문제 설명을 여기에 적습니다.

## Recon

먼저 엔드포인트를 살펴봅니다.

```bash
curl -s https://target.example/ | grep -i flag
```

## Vulnerability

취약점을 설명합니다. 코드 블록은 이렇게 하이라이팅됩니다.

```python
import requests

r = requests.post("https://target.example/login", data={"user": "admin' -- "})
print(r.text)
```

## Exploit

| 단계 | 설명 |
| --- | --- |
| 1 | 인증 우회 |
| 2 | SQL 인젝션으로 플래그 추출 |

## Flag

```
FLAG{this_is_a_sample_flag}
```
