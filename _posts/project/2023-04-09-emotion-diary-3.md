---
title: "[Mini Project] 감성 일기장 업그레이드 3. Header, Button 컴포넌트에 타입스크립트 적용하기"
excerpt: "wanted challenge"

categories:
  - mini project
tags:
  - [project, wanted challenge, react, typescript]

toc: true
toc_sticky: true

date: 2023-04-09
last_modified_at: 2023-04-11
---

<img src="https://blog.kakaocdn.net/dn/dYlhpD/btr92s0glXD/7IHzdhiot6la2QFHZhK97K/img.png" data-origin-width="1260" data-origin-height="891" data-filename="제목을-입력해주세요_-003 (1).png" data-mce-src="https://blog.kakaocdn.net/dn/dYlhpD/btr92s0glXD/7IHzdhiot6la2QFHZhK97K/img.png" data-is-animation="false" data-mce-selected="1">

여러 페이지에서 공통으로 쓰이는 컴포넌트인 헤더와 버튼 컴포넌트를 먼저 ts로 바꿔주려고 한다.

# Button 컴포넌트

```javascript
const MyButton = {type = "default", text, onClick}: MyButtonProps) => {
  //이상한 타입이면 강제로 디폴트 타입으로 변경
  const btnType = ["positive", "negative"].includes(type) ? type : "default"

  return (
    <button
      className={["MyButton", `MyButton_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

MyButton.defaultProps = {
  type: "default",
}

export default MyButton
```

버튼 컴포넌트는 이렇게 되어 있다. 타입과 버튼 이름을 props로 받아서 버튼 색상과 이름을 상황별로 리턴하는 컴포넌트이다. 만약 타입을 지정하지 않으면 디폴트로 지정되는 구조이다.

여기서 문제가 되는 부분은 props였다. 만약 타입을 버튼을 사용하는 쪽에서 정의하는 경우 사용하는 곳마다 써야할 것 같아 버튼 내에서 지정해주기로 했다.

```typescript
interface MyButtonProps {
  type?: "positive" | "negative" | "default"
  text: string
  onClick: () => void
}
```

`type`은 `"positive" | "negative" | "default"` 셋 중에 하나가 되므로, 리터럴 타입으로 지정하면 된다. 만약 세 개의 문자열 외의 값이 들어오면 오류가 발생하므로 오타를 방지하는 데에 도움이 된다.
`onClick` 속성은 함수가 들어오게 되므로 함수를 지정해주었다.

interface를 정의한 후에 props에 지정해주면 된다.

```typescript
const MyButton = ({type = "default", text, onClick}: MyButtonProps) => {}
```

# Header

헤더 컴포넌트도 버튼 컴포넌트와 거의 유사한 방식으로 props의 타입을 지정해주었다.

```javascript
//js
const MyHeader = {headText, leftChild, rightChild} => {
  return (
    <header>
      <div className="head_btn_left">{leftChild}</div>
      <div className="head_text">{headText}</div>
      <div className="head_btn_right">{rightChild}</div>
    </header>
  )
}

export default MyHeader
```

헤더의 경우 `leftChild`와 `rightChild`에 버튼 컴포넌트가 내려온다. 예를 들어 Home 페이지에서는 다음처럼 내려준다.

```typescript
//Home.jsx
<MyHeader
  headText={headText}
  leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
  rightChild={<MyButton text={">"} onClick={increaseMonth} />}
/>
```

따라서 타입을 정의할 때는 `JSX.Element` 타입을 지정해주면 된다.

```typescript
interface MyHeaderProps {
  headText: string
  leftChild: JSX.Element
  rightChild: JSX.Element
}
```

버튼과 마찬가지로 props에 타입 지정을 해주면 된다.

참고
[문자열 리터럴 타입 (String Literal Types)](https://typescript-kr.github.io/pages/literal-types.html)
{: .notice--primary}
