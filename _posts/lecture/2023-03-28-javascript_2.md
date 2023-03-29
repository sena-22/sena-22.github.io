---
title: "자바스크립트 기초 2 "
excerpt: "함수"

categories:
  - lecture
tags:
  - [udemy, javascript]

toc: true
toc_sticky: true

date: 2023-03-28
last_modified_at: 2023-03-28
---

![표지](https://user-images.githubusercontent.com/110877564/228106760-9b80b1e4-dff6-4fbf-9a89-5010548ce3c2.png)

<br/>

# 1. 함수

## 함수가 왜 필요할까?

함수는 같은 동작을 하는 유사한 코드의 중복을 줄이기 위해 사용한다. 먼저 함수를 사용하지 않고 직사각형의 넓이를 구하는 식을 만들어보자.

```javascript
let width1 = 10
let height1 = 10

let area1 = width1 * height1
console.log(area1) //100
```

마찬가지로 길이가 다른 직사각형을 만드는 식도 만들어보자.

```javascript
let width2 = 20
let height2 = 20

let area2 = width2 * height2
console.log(area2) //400
```

area1과 area2를 구하는 공식은 숫자만 달라졌을 뿐 작동 방식은 동일하다. 만약 같은 방식으로 직사각형을 10개, 100개를 만들어야 한다면 중복되는 코드가 계속 늘어날 것이다.

이런 상황에서 함수를 사용하면 코드를 간단하게 만들 수 있다.

```javascript
function getArea(width, height) {
  console.log(width * height)
}
```

함수를 만드는 방식에는 여러가지가 있는데, 이와 같이 `function` 키워드를 사용하여 만드는 방식을 <mark>함수 선언 방식</mark>이라고 한다.

함수는 선언하는 것만으로는 아무 일도 일어나지 않는다. 함수를 호출해서 사용해야 중괄호({})안의 문이 실행된다.

```javascript
function getArea(width, height) {
  let area = width * height
  console.log(area)
}

getArea(10, 10) //100
getArea(20, 20) //400
```

위와 같이 `getArea()`라는 함수를 사용하기만 하면 넓이를 쉽게 구할 수 있다. 만약 함수의 결과를 다시 사용하고 싶을 때에는, `return`문을 이용한다.

```javascript
function getArea(width, height) {
  let area = width * height
  return area
}

let area1 = getArea(10, 10) //100 //getArea(10,10)을 실행한 결과(리턴값)가 area1에 저장된다.

let area2 = getArea(20, 20) //400

console.log(area1 + area2) //500
```

## 함수 내부의 변수

💡 함수 내부에서 선언된 변수는 지역 변수로 사용된다. 지역 변수와 대비되는 개념으로는 전역 변수가 있는데, 말 그대로 전역에서 사용되느냐, 지역에서 사용되느냐의 차이를 가진다.

`getArea()`함수 내부에서 정의된 area는 함수 내의 지역 변수이므로, 함수 밖에서 호출하면 정의되지 않았다는 에러가 뜬다.

```javascript
function getArea(width, height) {
  let area = width * height
  return area
}

console.log(area) // area is not defined
```

반대로 함수 외부에서 선언된 변수는 전역 변수이므로 함수 내부에서 사용이 가능하다.

```javascript
let global = 100
function getGlobal() {
  console.log("global", global)
}

getGlobal() //100
```

<br/>

# 2. 함수 표현식과 화살표 함수

## 함수 표현식

함수 표현식은 함수를 값처럼 취급해서, 변수에 담을 수 있는 함수 선언 방식이다.

```javascript
let hello = function () {
  //함수의 이름을 지정할 필요가 없다.
  return "Hello!!"
}

console.log(hello) //f(){} // 함수가 담겨있다!

const helloText = hello() // 함수를 호출한 결과를 변수에 담았다.
console.log(helloText) //"Hello!!"
```

### 함수 선언식 vs 함수 표현식

```javascript
console.log(helloB()) //"Hello!!"
console.log(helloA()) //helloA is not a function
//함수 표현식
let helloA = function () {
  return "Hello!!"
}

//함수 선언식
function helloB() {
  return "Hello!!"
}
```

함수 선언식으로 정의한 함수는 코드 최상단으로 호이스팅되어 함수가 선언되기도 전에 실행이 가능하다. 반면 함수 표현식으로 정의한 함수는 호이스팅되지 않아 실제로 정의하기 전에 실행이 불가능하다.

## 화살표 함수

화살표 함수를 사용하면 함수 표현식을 더 간결하게 작성할 수 있다. 화살표 함수도 호이스팅 대상이 아니기 때문에 정의 전에 사용할 수 없다.

```javascript
let helloA = () => {
  return "Hello A!!"
}

let helloB = () => "Hello B!!" //문장이 한 줄일때는 이렇게도 사용 가능

console.log(helloA()) //Hello A!!
console.log(helloB()) //Hello B!!
```

# 3. 콜백함수

## 콜백함수

함수를 함수의 인수로 전달하고, 인수로 전달한 함수를 나중에 필요할 때 호출할 때, 인수로 전달된 함수를 콜백함수라고 한다.

```javascript
function checkMood(mood, goodCallback, badCallback) {
  if (mood === "good") {
    // 기분이 좋을 때 하는 동작
    goodCallback()
  } else {
    //기분이 좋지 않을 때 하는 동작
    badCallback()
  }
}

function cry() {
  console.log("ACTION :: CRY")
}

function sing() {
  console.log("ACTION :: SING")
}

function dance() {
  console.log("ACTION :: DANCE")
}

checkMood("sad", sing, cry)
```

콜백 함수를 이용하면 위의 코드와 같이 호출할 때 사용할 함수를 선택해서 전달할 수 있으므로 유용하게 사용할 수 있다.
