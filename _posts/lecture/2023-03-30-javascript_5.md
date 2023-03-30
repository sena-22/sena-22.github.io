---
title: "자바스크립트 응용 2 "
excerpt: "비구조화 할당, spread 연산자"

categories:
  - lecture
tags:
  - [udemy, javascript]

toc: true
toc_sticky: true

date: 2023-03-30
last_modified_at: 2023-03-30
---

![응용2](https://user-images.githubusercontent.com/110877564/228815715-a321bcdb-2004-4991-aeaf-0ab93f920925.png)

<br/>

# 1. 비구조화 할당(구조분해할당)

## 배열의 비구조화 할당

배열의 요소를 하나씩 꺼내서 변수를 선언하는 방법은 이렇다.

```javascript
let arr = ["one", "two", "three"]

let one = arr[0]
let two = arr[1]
let three = arr[2]
```

이때 비구조화 할당을 사용하면 위의 할당 과정을 한 줄로 줄일 수 있다!

```javascript
let [one, two, three] = arr
console.log(one, two, three) //one two three
```

arr이라는 변수를 아예 사용하지 않을 수도 있다. 이를 <mark>배열의 선언 분리 비구조화 할당</mark>이라고 한다.

```javascript
let [one, two, three] = ["one", "two", "three"]
console.log(one, two, three) //one two three
```

🤔 배열의 인덱스를 넘어가는 수를 할당받으려고 하면 undefined가 나온다.

```javascript
let [one, two, three, four] = ["one", "two", "three"]
console.log(one, two, three, four) //one two three undefined
```

만약 `undefined`가 나오면 안 되는 상황인 경우, 기본값을 지정해두면 된다.

```javascript
let [one, two, three, four = "four"] = ["one", "two", "three"]
console.log(one, two, three, four) //one two three four
```

### 비구조화 할당을 swap에 활용하는 방법

원래 swap을 위해서는 임시 변수(temp)를 만들어서 변경해주었다.

```javascript
let a = 10
let b = 20

let temp = 0
temp = a
a = b
b = temp
console.log(a, b) //20 10
```

비구조화 할당을 사용하면 훨씬 편하게 swap이 가능하다.

```javascript
;[a, b] = [b, a]
console.log(a, b) //20 10
```

## 객체의 비구조화 할당

객체도 배열과 마찬가지로 비구조화 할당을 사용할 수 있다.

```javascript
let object = {one: "one", two: "two", three: "three", named: "jack"}

//비구조화 할당을 사용하지 않는 경우
let one = object.one
let two = object.two
let three = object.three

//비구조화 할당 사용하기
let {one, two, three, named} = object //키 값을 기준으로 할당한다.
//프로퍼티 키가 named에 해당하는 프로퍼티 값을 named라는 변수에 저장한다.
console.log(one, two, three, named) //one two three jack
```

이렇게 사용할 경우 변수명이 키 값으로 고정되어버리는 문제가 생긴다. 다른 변수명을 사용하고 싶을 땐 다음과 같이 할당한다.

```javascript
let {named: myName} = object //키가 named인 프로퍼티의 값(jack)을 myName에 할당한다
// console.log(named); //named is not defined
console.log(myName) //jack
```

객체도 배열과 마찬가지로 기본 값을 할당할 수 있다.

```javascript
let {age = 20} = object
console.log(age) //20
```

<br/>

# 2. spread 연산자

스프레드 연산자는 뜻 그대로 펼치는 연산자이다.

```javascript
const cookie = {
  base: "cookie",
  madeIn: "korea",
}

const chocochipCookie = {
  base: "cookie",
  madeIn: "korea",
  toping: "chocochip",
}

const strawberryCookie = {
  base: "cookie",
  madeIn: "korea",
  toping: "strawberry",
}

const blueberryCookie = {
  base: "cookie",
  madeIn: "korea",
  toping: "blueberry",
}
```

위의 코드에서 `base`와 `madeIn`을 중복해서 사용하고 있다. 이럴 때 스프레드 연산자를 사용하면 좋다.

```javascript
const cookie = {
  base: "cookie",
  madeIn: "korea",
}

const chocochipCookie = {
  ...cookie,
  toping: "chocochip",
}

const strawberryCookie = {
  ...cookie,
  toping: "strawberry",
}

const blueberryCookie = {
  ...cookie,
  toping: "blueberry",
}

console.log(chocochipCookie) // {base: "cookie", madeIn: "korea", toping: "chocochip"}
```

`...`을 사용하면 쿠키 객체의 모든 값을 펼쳐서 넣어준다.

스프레드 연산자를 배열에 사용할 수도 있다.

```javascript
const noTopingCookies = ["촉촉한쿠키", "안촉촉한쿠키"]
const topingCookies = ["딸기쿠키", "바나나쿠키", "초코칩쿠키"]

const allCookies = [...noTopingCookies, "함정쿠키💣", ...topingCookies]
console.log(allCookies) //["촉촉한쿠키", "안촉촉한쿠키", "함정쿠키💣", "딸기쿠키", "바나나쿠키", "초코칩쿠키"]
```

두 배열을 그냥 합치기만 하는 `concat()` 메서드와 달리 중간에 다른 값을 넣어줄 수도 있다.
