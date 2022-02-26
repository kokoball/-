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

## 🏗 프로젝트 설계

#### 1. 검색 기능 debounce 적용
- [x] 콜백 함수의 불필요한 실행을 줄여주기위해 검색 기능에 `debounce` 적용
- [x] 불필요한 서버 리퀘스트를 막고, 불필요한 통신을 줄임과 동시에 필요 없는 렌더링 또한 막을 수 있음

#### 2. UI/UX
- [x] 데스크탑과 모바일 두 가지 버전의 레이아웃을 구성
- [x] `데스크탑` 버전에서는 넓은 스크린이라는 특성에 맞추어 많은 양의 데이터를 조회할 수 있도록  `페이지네이션` 추가<br> `브랜드 버튼`과 `제품 버튼`을 제공하여 항목별 검색가능
- [x] `모바일` 버전에서는 화면이 터치가능하다는 특성에 맞추어 `브랜드 태그`를 추가해 브랜드별 상품들을 쉽게 조회할 수 있도록 구성

#### 3. 검색 초기화 버튼
- [x] 검색리스트 조회요청 시 검색창이 초기화되도록 설계하여 이후 재검색을 필요로 하는 상황에서 불필요한 행동을 줄이고 더 빠르게 사용 가능

#### 4. 검색어 필터 기능
- [x]  대소문자 구분 x
- [x]  제품명, 브랜드명 으로 필터링 한 뒤 리스트 병합

#### 6. 검색 기록 제공
- [ ] 검색창 클릭 시 하단에 이전 검색 기록이 제공되도록 설계<br> 이전에 검색했던 상품을 확인할 수 있어 자주 구매하는 상품을 빠르게 확인 및 검색 가능


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
