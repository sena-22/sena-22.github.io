---
title: "[Mini Project] 감성 일기장에 업그레이드 1. typescript 설치하기"
excerpt: "wanted challenge"

categories:
  - mini project
tags:
  - [project, wanted challenge, react, typescript]

toc: true
toc_sticky: true

date: 2023-04-08
last_modified_at: 2023-04-08
---

![표지](https://user-images.githubusercontent.com/110877564/230747785-5da65ff1-f4e1-437d-a7f4-5010571622ab.png)

<br/>

[<mark style='background-color: #ffdce0'>한입 크기로 잘라 먹는 리액트(React.js)</Mark>](https://www.udemy.com/course/winterlood-react-basic/?couponCode=1B3AC13BE3B6AE66BCE1)를 수강하면서 만들었던 감성 일기장을 타입스크립트로 마이그레이션 해보려고 한다.

강의에서 만들었던 감성 일기장은 [여기](https://reyna-emotion-diary.firebaseapp.com/)에 배포해두었다.
{: .notice--primary}

<br/>

# 타입스크립트 설치하기

- `create-react-app`을 이용하여 새로 프로젝트를 생성하면서 타입스크립트를 설치할 땐 이렇게 한다.

```javascript
npx create-react-app my-app --template typescript
```

`--template`는 CRA에서 제공하는 기본 템플릿 대신 다른 템플릿을 사용할 수 있도록 해주는 옵션이다. 여기서는 typesciprt 템플릿을 사용한다고 지정하는 것이다.
{: .notice--primary}

- 이번에는 이미 만들어진 프로젝트에 타입스크립트를 설치하는 것이므로, 다음 패키지들을 설치했다.

```javascript
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

`@types`가 붙은 패키지들은 타입스크립트에서 사용할 수 있도록 **타입 정의 파일**을 제공해주는 패키지이다.

<br/>

# tsconfig.json 설정하기

타입스크립트를 설치한 후에는 `tsconfig.json`파일을 설정해주어야 한다.

`tsconfig.json` 파일은 프로젝트를 컴파일하는 루트 파일과 컴파일러 옵션을 지정할 수 있다.

[여기](https://www.typescriptlang.org/tsconfig)에서 종류를 확인할 수 있다.
{: .notice--primary}

## 1. compilerOptions

타입스크립트 컴파일러가 사용해야 하는 옵션을 지정할 수 있는 속성이다.
`target`, `module`, `lib`, `esModuleInterop`, `outDir` 등의 옵션을 지정할 수 있다.

```typescript
{
 "compilerOptions": {

	"target" : "es5",          /* 사용할 특정 ECMAScript 버전 설정: 'ES3'(default), 'ES5', 'ES2015', 'ES2016' 등 */
	"module": "commonjs",      /* 어떤 import 문법을 사용할 지 설정 : 'commonjs', 'amd', 'es2015', 'esnext' */
	"allowJs": true,           /* 자바스크립트 파일 컴파일 허용 여부 */
	"checkJs": true,           /* .js 파일의 오류 검사 여부 */
	"jsx": "preserve",         /* JSX 코드 생성 설정: 'preserve'(JSX 유지), 'react-native', 혹은 'react'. */

	"strict": true,            /* 모든 strict 옵션 활성화 여부 */
	"noImplicitAny": true,     /* 암묵적인 'any' 금지 여부 */
},

	"files": [],                /* 프로그램에 포함할  파일을 지정 */

	"include": ["src/**/*"],    /* 프로그램에 포함할 파일 이름 혹은 패턴의 배열을 지정 */
	"exclude": ["node_modules"] /* 제외할 파일 지정 */
}
```

## 2. include

타입스크립트 컴파일러가 컴파일해야 하는 파일의 경로를 지정한다.

```json
{
  "include": ["src/**/*"]
}
```

## 3. exclude

`include`와 반대로 컴파일을 건너뛸 파일 경로를 지정한다.

## 4. files

include와 exclude 대신에, 명시적으로 포함할 파일의 배열을 지정할 수 있다. 여기에 설정된 파일이 없으면 오류가 발생한다.

```json
 "files": [
   "core.ts",
   "sys.ts",
   "types.ts",
 ]
```

프로젝트에는 다음과 같이 설정했다.

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["DOM", "es5", "es6", "es7"],
    "module": "commonjs",
    "allowJs": true,
    "checkJs": true,
    "jsx": "react",
    "removeComments": true,
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

이외에도 설정할 수 있는 속성이 너무 많은데 일단 몇 가지만 사용하고 필요할 때 추가하기로 했다.

<br/>

# Module not found 에러

여기까지 설정한 후에 일단 파일을 전부 `ts`로 바꿨더니 에러가 끝도 없이 발생했다.. 다시 되돌리고 `App`과 `index`만 `ts`로 바꾸고 다시 리액트 앱을 실행했다.

실행한 뒤 발생한 에러 중에 모듈을 찾을 수 없다는 에러가 발생했다.

<img width="883" alt="스크린샷 2023-04-08 오후 11 36 29" src="https://user-images.githubusercontent.com/110877564/230727053-4a0d6d0c-0447-443b-a9ef-bd212e1718cd.png">

에러 내용이 모두 `DiaryEditor` 컴포넌트에서 발생했는데, 파일을 모두 `.js`로 불러오고 있었다. 에러를 해결하려면 확장자를 `.jsx`로 변경하거나, 타입스크립트로 바꿔줘야 한다.

`.js`, `.jsx`의 차이? <br/>
.js 파일은 일반적인 자바스크립트 파일이고, .jsx 파일은 리액트에서 사용되는 자바스크립트의 확장 문법이다.
{: .notice--primary}

확장자를 변경해서 컴포넌트에서 발견하는 에러가 해결되었다.

```javascript
/* 에러 */
import MyHeader from "./MyHeader.js"
/* 에러 해결 1 */
import MyHeader from "./MyHeader"
/* 에러 해결 2 */
import MyHeader from "./MyHeader.jsx"
```

기본적인 설정을 끝냈다! 다음 포스팅부터는 `App.js`부터 타입스크립트 파일로 바꿔갈 예정이다.
