---
title: "[Wanted Pre Onboarding] 1. 사전 과제"
excerpt: "wanted project"

categories:
  - mini project
tags:
  - [project, react, typesciprt, redux]

toc: true
toc_sticky: true

date: 2023-03-01
last_modified_at: 2023-03-01
---

# 초기 환경 설정

## CRA & typescript 설치

```javascript
npx create-react-app <프로젝트 이름> --templage typescript
```

## styled-components 설치

```javascript
npm i styled-components

//type definition
npm i -D @types/styled-components
```

## styled-reset 설치 및 적용

### styled-reset 설치

```javascript
npm i styled-reset
```

### styled-reset 적용

```javascript
import { createGlobalStyle } from "styled-components";

import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`${reset}`;

function App() {
  return (
    <div>
      <GlobalStyles />
    </div>
  );
}
export default App;
```

[styled-reset 이란? / 사용법](https://defineall.tistory.com/919)
{: .notice--primary}

## redux-toolkit 설치

```javascript
npm install @reduxjs/toolkit react-redux
```
