# 라쿠텐심포니 코리아 Frontend Developer 기술 과제 (개인 과제)

<br>

## 🚀 정보

- [배포주소 바로가기](https://affectionate-darwin-4a7a11.netlify.app/7725NJHW/)

<br>

## 👀 프로젝트 빌드 및 실행 방법

1. 상단 `Code` 버튼을 눌러 레포지토리를 클론 받습니다.

```
$ git clone https://github.com/wanted-team2/3week_ncnc.git
```

2. 패키지를 설치합니다.

```
$ yarn install
```

3. 서버를 실행합니다.

```
$ yarn start
```

<br>

## 🏗 특이사항

#### 1. thumbnailUrl 이미지
- 주어진 API로(thumbnailUrl) 이미지 설정시 403 오류가 발생하여 error 발생시 기본 이미지 출력하도록 설정함

#### 2. 파일 만료기간
- 주어진 API로 파일 만료기간 설정시 파일들이 모두 유효기간이 만료되어 제대로 된 동작을 보여줄 수 없음
- 따라서 getExpiresDate 함수에서 임의로 날짜 변경함 (src > utils)
```tsx
export const getExpiresDate = (date: number) => {
  // @NOTE: 임의로 날짜 변경
  // const expiresDate = new Date(date * 1000).getTime();
  // const nowDate = new Date().getTime();
```


<br>
<br>

## 📈 디렉토리 구조

```
.
├── README.md
├── public
│   ├── svgs
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── components
│   ├── constants
│   ├── pages
│   ├── styles
│   ├── utils
│   ├── App.tsx
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.ts
├── .editorconfig
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .prettierrc.js
├── babel.config.js
├── config-overrides.js
├── package.json
├── tsconfig.json
├── yarn-error.log
└── yarn.lock
```
