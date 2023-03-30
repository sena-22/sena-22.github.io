---
title: "자바스크립트 응용 1 "
excerpt: "Truthy & Falsy, 삼항 연산자, 단락회로 평가, 조건문 업그레이드"

categories:
  - lecture
tags:
  - [udemy, javascript]

toc: true
toc_sticky: true

date: 2023-03-30
last_modified_at: 2023-03-30
---

![응용1](https://user-images.githubusercontent.com/110877564/228704872-4eb88205-3c9e-40b5-accf-e788aec9ebf4.png)

<br />

# 1. Truthy & Falsy

- 자바스크립트는 자기만의 기준으로 값을 true나 false로 분류한다.
- if문이나 for문 같은 제어문, 삼항 조건 연산자의 조건식은 불리언 값으로 표현되어야 한다. 이때 불리언 타입이 아닌 값을 Truthy나 Falsy 값으로 구분하여, Truthy 값은 true로, Falsy 값은 false로 암묵적으로 타입을 바꿔버린다.

**Truthy 값** <br>
[], {}, 비어있지 않은 문자열, 숫자(Infinity 포함) 등
{: .notice--danger}

**Falsy 값** <br>
false, undefined, null, 0, -0, NaN, ''
{: .notice--danger}

## 어디에 사용하면 좋을까?

```javascript
const getName = (person) => {
  return person.name //에러가 난다
}

let person

const name = getName(person)
console.log(name) //error!
```

위의 코드에서 person은 `undefined`로 초기화되어 있다. 따라서 `undefined.name`을 리턴할 수 없어 에러가 발생한다. 이를 해결하기 위해 person이 `undefined`일 때의 예외 처리를 추가해줄 수 있다.

```javascript
const getName = (person) => {
  if (person === undefined) {
    return "객체가 아닙니다"
  }
  return person.name
}
```

하지만 person이 `null`이라면? 조건을 추가해야 한다. 만약 모든 함수에서 이런 식으로 일일이 예외 처리를 해줘야 한다면 번거로울 것이다. 이럴 때 `falsy`를 이용하면 좋다.

```javascript
const getName = (person) => {
  if (!person) {
    //!false => true => if문 실행
    return "객체가 아닙니다"
  }
  return person.name
}
```

  <br />

# 2. 삼항 연산자

삼항 연산자를 사용하면 간단한 조건문을 짧게 줄일 수 있다!

일반적인 조건문은 이렇게 작성한다.

```javascript
let a = 3

if (a > 0) {
  console.log("양수")
} else {
  console.log("음수")
}
```

이것을 삼항 연산자로 바꾸려면 다음과 같이 작성하면 된다.

`조건 ? true일 때 수행할 식: false일 때 수행할 식`

```javascript
a >= 0 ? console.log("양수") : console.log("음수")
```

삼항 연산자의 결과를 변수에 담을 수도 있다.

```javascript
let a = []

const result = a.length === 0 ? "빈 배열" : "안 빈 배열"
console.log(result) //빈 배열
```

## truthy와 falsy를 삼항연산자와 함께 사용하기

```javascript
let a = [] //빈 배열은 truthy한 값

const result = a ? true : false
console.log(result) //true
```

## 삼항 연산자를 중첩해서 사용하는 방법

```javascript
//90점 이상 : A+
//50점 이상 : B+
//둘 다 아니면 F

let score = 100

let result = score >= 90 ? "A+" : score >= 50 ? "B+" : "F"
console.log(result) //A+
```

삼항 연산자를 중첩해서 사용할 경우 코드는 짧지만 가독성에 문제가 생길 수 있기 때문에 if문으로 작성하는 것이 더 좋을 수도 있다.

<br />

# 3. 단락회로 평가

논리 연산자에서 왼쪽에서 조건을 충족하면 뒤의 값은 안 건드리고 평가를 멈추는 것을 **단락 평가**라고 한다.

## ||의 경우

```javascript
true || true //true //왼쪽이 true면 바로 true
false || true //true //왼쪽이 false면 뒤에도 확인
true || false //true
false || false //false
```

## &&의 경우

```javascript
true && true //true //왼쪽이 true이면 뒤에 확인
false && true //false //왼쪽이 false이면 바로 false
true && false //false
false && false //false
```

## 단락 회로 평가 이용하기

위에서 만들었던 `getName()` 함수를 단락 평가를 이용해 더 간단하게 바꿀 수 있다.

```javascript
const getName = (person) => {
  const name = person && person.name
  return name || "객체가 아닙니다"
}
let person
const name = getName(person)
console.log(name) //객체가 아닙니다
```

person이 `undefined`인 경우, 뒤를 보지 않고 바로 person의 값인 `undefiend`를 리턴한다. 이 값을 `name`에 넣고, `|| 연산자`를 사용하면 `name`이 `undefined(falsy)`이므로, 뒤의 값을 리턴하게 된다.

<br />

# 4. 조건문 업그레이드✨

```javascript
//1. includes 활용하기
function isKoreanFood(food) {
  if (["불고기", "떡볶이", "비빔밥"].includes(food)) {
    return true
  }
  return false
}

const food1 = isKoreanFood("불고기")
const food2 = isKoreanFood("파스타")
console.log(food1)
console.log(food2)

//2. 객체의 괄호 표기법을 활용하기
const meal = {
  한식: "불고기",
  중식: "멘보샤",
  일식: "파스타",
}

const getMeal = (mealType) => {
  //mealType 키를 가진 값을 가져옴 => true가 되어 바로 리턴
  //만약 없으면 false가 되어 뒤의 문 실행
  return meal[mealType] || "굶기"
}

console.log(getMeal("한식")) //불고기
console.log(getMeal("중식")) //멘보샤
console.log(getMeal()) //굶기
```
