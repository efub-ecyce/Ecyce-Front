# 🌳KARMA : 의류 업사이클링 중개 플랫폼
> EFUB 2학기 토이프로젝트 팀 이끼끼 프론트 레포지토리

## 🧩 규칙

#### 커밋 컨벤션

- `gitmoji + commit type + commit message (한글)`

    - ✨ feat : 새로운 기능 추가
    - 🐛 fix : 버그 수정
    - 🎨 style : 코드 구조 및 형태 개선
    - 💄 Design : UI, 스타일 관련 파일 추가 및 업데이트
    - 🔥 Remove : 코드 or 파일 삭제
    - 🛠️ build : 빌드 관련 수정
    - 📝 docs : 문서 파일 추가 및 업데이트
    - ♻️ refactor : 코드 리팩토링
    - ✅ test : 테스트 코드 추가/업데이트 또는 테스트 통과
    - 🔖 release : 버전 릴리즈
    - 🔧 chore : 패키지 매니저 수정, 그 외 기타 수정

<br>

#### PR 템플릿

```
# 구현 기능
  - 구현한 기능을 요약하여 정리합니다.

# 구현 상태 (선택)
  - img, gif, video...
  - 혹은 내용 정리

# Resolve
  - 이슈 태그(ex: #7)
```

<br>

#### issue 규칙

- 각 기능에 맞는 이슈 템플릿 작성 (작업 및 변경사항 확인용)
- to-do에 구현해야할 기능을 작성하고, 구현이 끝나면 체크표시

<br>

#### branch 규칙

- 브랜치 네이밍 규칙: `feat/#{issue 번호}`
- - 이슈 생성후, branch에서 추가할 내용(ex. feat, design, refactor, ...)과 이슈번호를 branch 이름으로 생성
  - 예시: `feat/#12`, `design/#27`
- `feat -> dev -> main` 순으로 merge
- `feat` : 각 기능을 개발하는 브랜치
- `dev` : 각 기능의 개발을 완료하고 테스트 완료 후 병합하는 브랜치
- `main` : 배포 브랜치
