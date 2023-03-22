---
title: "개발할 때 유용한 vscode extension"
excerpt: "vscode extension"

categories:
  - notes
tags:
  - [vscode extension, TODO Highlight]

toc: true
toc_sticky: true

date: 2023-03-23
last_modified_at: 2023-03-23
---

# TODO Highlight

<p align="center">
<img width="459" alt="스크린샷 2023-03-23 오전 6 37 27" src="https://user-images.githubusercontent.com/110877564/227044317-05a798e3-1e39-4305-ae4e-06efa89d1114.png">
</p>

`TODO Highlight`를 설치하고 다음과 같이 `TODO:`를 입력하면 하이라이트가 자동으로 만들어진다.

<p align="center">
<img width="566" alt="스크린샷 2023-03-23 오전 6 38 28" src="https://user-images.githubusercontent.com/110877564/227044446-6a36745e-ca1c-46b2-81b2-ae15de34cb8b.png">
</p>

- 이때 기본적으로 `Todo:`,`TODO :` 처럼 소문자로 입력하거나 콜론을 띄어 쓰면 인식되지 않는다. 만약 다른 단어나 스타일을 적용하고 싶으면 설정을 바꿔준다.

```json
//settings.json
 "todohighlight.defaultStyle": {
    //원하는 디폴트 설정
  },
"todohighlight.keywords": [
      "DEBUG:", //디폴트로 설정할 키워드들
      ...
    {
      "text": "REVIEW:", //키워드별로 설정을 바꿔주고 싶을 때
      "color": "aliceblue",
      "border": "1px solid ##bb88ed",
      "borderRadius": "2px",
      "backgroundColor": "#bb88ed",
      "isWholeLine": false
    }
    ...
]
```

원하는 설정으로 바꾼 후 사용하면 된다.

<p align="center">
<img width="572" alt="스크린샷 2023-03-23 오전 7 11 30" src="https://user-images.githubusercontent.com/110877564/227050099-6d12c502-2f7a-4427-a8eb-62fe549df782.png">
</p>

# ES7+ React/Redux/React-Native snippets

스니펫을 사용하면 React/Redux/React-Native를 사용할 때 템플릿 자동 완성 기능을 사용할 수 있다.

## 설치

[ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

## imr (리액트 import)

```javascript
import React from "react"
```

## rafce (리액트 함수형 컴포넌트)

<p align="center">
<img width="481" alt="스크린샷 2023-03-22 오후 10 58 29" src="https://user-images.githubusercontent.com/110877564/227055477-95c4f921-2fc0-46bd-9ea1-dae830a59098.png">
</p>
컴포넌트 이름은 파일 이름으로 만들어진다. 다음은 `Sidebar.js` 파일에서 `rafce`를 입력한 결과이다.

<p align="center">
<img width="481" alt="스크린샷 2023-03-22 오후 10 58 42" src="https://user-images.githubusercontent.com/110877564/227055466-8476d563-5753-4339-8755-04a230d4b6b1.png">
</p>

다른 스니펫 목록은 [여기](https://github.com/ults-io/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md)에서 확인 가능하다.

# Auto Rename Tag, Auto Close Tag

태그 수정할 때 닫힘 태그도 자동으로 수정 / 태그 생성 시 닫힘 태그도 자동으로 만들어주는 익스텐션이다.

# Material Icon Theme

폴더나 파일들을 보기 쉽게 만들어주는 아이콘 테마이다. 종류가 여러가지 있어서 마음에 드는 테마를 사용하면 된다.

<p align="center">
<img width="163" alt="스크린샷 2023-03-23 오전 7 55 03" src="https://user-images.githubusercontent.com/110877564/227056646-91c88773-7210-43dd-afbf-c36520f0babe.png">
</p>
