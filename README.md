# 라쿠텐심포니 코리아 Frontend Developer 기술 과제 (개인 과제)

<br>

## 🚀 정보

- [배포주소 바로가기](https://affectionate-darwin-4a7a11.netlify.app/)

<br>

## 📝 스택

<br/>

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"> <img alt="SCSS" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/></a>


## 👀 프로젝트 빌드 및 실행 방법

1. 상단 `Code` 버튼을 눌러 레포지토리를 클론 받습니다.

```
$ git clone https://github.com/kokoball/4week_rakuten.git
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

## ✨ 구현 사항

링크 목록 화면

- [x] 링크로 공유한 파일(들)을 다운로드 받을 수 있는 링크 목록 확인
- [x] 링크 아이템 클릭하여 상세 페이지로 이동
- [x] 제목 아래 URL 표시
  - 유효 기간 이내: 도메인 주소를 포함한 상세페이지로 이동하는 경로
  - 유효 기간 만료: 만료됨
- [x] URL 클릭 시 동작
  - 유효 기간 이내: URL을 클립보드에 복사, ${링크 제목} 주소가 복사되었습니다 alert 창 표시
  - 유효 기간 만료: 아무 동작하지 않음
- [x] 파일 개수 숫자 3자리 단위마다 콤마
- [x] 파일 사이즈 표시
  - 소수점 둘째 자리까지
  - 단위는 B, KB, MB, GB, TB로 표기 (ex. 10.86KB)
- [x] 유효 기간 표시는 실시간 반영
  - 48시간 미만: XX시간 XX분
  - 48시간 이상: X일
  - 만료: 만료됨
- [x] 받은 사람 <Avatar /> 컴포넌트 이용해 표시

링크 상세 화면

- [x] 링크가 가지고 있는 파일 목록 확인 및 공유
- [x] 링크 정보 표시
- [x] 받기 버튼 누르면 alert로 '다운로드 되었습니다.' 
- [x] 링크 유효 기간이 만료되지 않았을 경우에만 파일 목록 표시

<br>

## 🏗 프로젝트 특이사항

#### 1. thumbnailUrl 이미지
- 주어진 API로(thumbnailUrl) 이미지 설정 시 403 오류가 발생하여 error 발생 시 기본 이미지 출력하도록 설정함

#### 2. 파일 만료기간
- 주어진 API로 파일 만료 기간 설정 시 파일들이 모두 유효기간이 만료되어 제대로 된 동작을 보여줄 수 없음
- 따라서 getExpiresDate 함수에서 임의로 날짜 변경함 (src > utils), 설정 날짜는 constants에 따로 보관함
```tsx
export const getExpiresDate = (date: number) => {
  // @NOTE: 임의로 날짜 변경
  // const expiresDate = new Date(date * 1000).getTime();
  // const nowDate = new Date().getTime();
```
#### 3. NotFoundPage 추가
- 데이터가 없을 때 나타나는 페이지 추가

#### 4. 링크 상세 화면 만료됨 전체 경로 만료됨 표시 추가
- 데이터가 만료되었을 시 전체 경로 대신 만료됨 표시 설정


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
