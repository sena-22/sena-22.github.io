---
title: "[Deep Dive] 14. 함수 객체의 프로퍼티"
excerpt: "일급객체, 함수 객체의 프로퍼티"

categories:
  - javascript
tags:
  - [javascript, function]

toc: true
toc_sticky: true

date: 2023-03-24
last_modified_at: 2023-03-24
---

# 일급 객체

함수는 일급 객체이다. 그래서 객체처럼 사용할 수 있다.

객체처럼 사용할 수 있다는 건 값처럼 사용할 수 있다는 뜻이고, 값처럼 사용한다는 의미는 변수에 할당하거나, 객체에 저장하거나, 매개변수로 사용할 수도 있다는 뜻이다.

```javascript
//함수를 변수에 할당할 수 있다.
const sum = (a, b) => {
  return a + b
}

console.log(typeof sum) //function

//함수를 객체에 저장할 수 있다
const save = { sum }

//함수의 매개변수에 전달하거나 반환값으로 사용할 수 있다.
function doubleSum(save) {
  let num = 1

  return function () {
    num = sum(num, num)
    return num
  }
}

const getSum = doubleSum(save.sum)
console.log("result:", getSum()) //result: 2
```

## 함수 객체 vs 일반 객체

### 함수 객체와 일반 객체의 공통점

- 함수의 매개변수에 전달할 수 있다.
- 함수의 반환 값으로 사용할 수 있다.

### 함수 객체와 일반 객체의 차이점

- 일반 객체는 호출이 불가능하지만 **함수 객체는 호출할 수 있다**
- 일반 객체에는 없는 <Mark style='background-color: #ffdce0'>함수 고유의 프로퍼티</Mark>를 가진다.

<br/>

# 함수 객체의 프로퍼티

적당한 함수를 정의하고 console.dir()로 호출해보면 다음과 같이 나온다. console.dir()는 객체의 속성을 확인할 수 있다. ([참고](https://developer.mozilla.org/ko/docs/Web/API/console/dir))

<img width="500" alt="스크린샷 2023-03-24 오전 10 52 57" src="https://user-images.githubusercontent.com/110877564/227404536-330bdb1a-0ce1-461a-8331-5be07a8dd89d.png">

`arguments`,`caller` 등이 함수 객체의 프로퍼티가 되는데, 여기서 `arguments`, `length` `name` 프로퍼티에 대해 정리해보려고 한다.

## arguments 프로퍼티

`arguments` 프로퍼티의 값은 `arguments 객체`이다. `arguments 객체`는 호출할 때 전달된 인수들의 정보를 담고 있다.

<img width="503" alt="스크린샷 2023-03-24 오전 11 02 34" src="https://user-images.githubusercontent.com/110877564/227405665-fa5ea9e6-0fd0-4b84-81ce-5b8f15debd74.png">

콘솔에서 `arguments`를 보면 호출할 때 넣은 인수가 프로퍼티 값으로 들어가 있다. 프로퍼티 키는 들어간 인수의 순서를 나타낸다.

이때 특이한 점은 함수를 선언할 때 설정된 매개변수의 수와 상관없이 <Mark style='background-color: #ffdce0'>호출할 때 넣은 인수가 모두 저장</mark>된다는 점이다.

사용되는 매개변수보다 인수가 모자라면 리턴 값이 제대로 나오지 않고, 매개변수보다 인수가 많으면 남는 인수는 무시되지만 그것과는 별개로 `arguments` 객체에 모두 저장되어 있다.

### 🧐 어디에 사용할까?

- `arguments` 프로퍼티는 <Mark style='background-color: #ffdce0'>매개변수 개수를 모를 때</mark> 사용할 수 있다.

```javascript
function sum() {
  let result = 0

  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i]
  }

  return result
}

console.log(sum()) //0
console.log(sum(1, 2, 3)) //6
```

그런데 `arguments`는 배열이 아니기 때문에 배열 메서드를 바로 사용하기는 어렵고 다른 메서드를 사용해서 배열로 반환한 다음 배열 메서드를 사용해야 한다는 단점이 있다.

이때 ES6에서 나온 `rest 파라미터`를 사용하면 이런 단점을 해결할 수 있다.

```javascript
//arguments를 사용하여 배열을 만드는 경우
function sum() {
  //메서드를 한 번 더 사용해야 한다
  const arr = Array.prototype.slice.call(arguments)
  console.log(arr)
}

sum(1, 2, 3) // [1,2,3]

//rest 파라미터를 사용하여 배열을 만드는 경우
function sum(...args) {
  console.log(args)
}

sum(1, 2, 3) // [1,2,3]
```

## length 프로퍼티

함수 객체의 `length` 프로퍼티는 함수를 정의할 때 선언한 매개변수의 개수를 나타낸다. 이때 주의할 점은 인수의 개수와 다를 수 있다는 점이다.

`인수의 개수는 arguments 객체의 length로 알 수 있고, 매개변수의 개수는 함수 객체의 length로 알 수 있다.`

<img width="375" alt="스크린샷 2023-03-24 오전 11 49 10" src="https://user-images.githubusercontent.com/110877564/227411715-5f7130ca-f51c-4f78-9340-316715d137de.png">

## name 프로퍼티

name 프로퍼티는 함수의 이름을 나타낸다.

여기서 주의할 점은 함수 이름과 함수 객체를 가리키는 식별자가 다르다는 것이다. 함수를 호출할 때는 함수 이름이 아니라 함수 객체를 가리키는 식별자로 호출한다.

함수를 선언할 때 함수 표현식을 사용하면 함수 이름을 생략해도 된다.

```javascript
let sum = function (a, b) {
  return a + b
}

sum(1, 2) // 3
```

위에서 sum은 함수 이름이 아니고, sum 함수는 익명함수이다.
그런데 name 프로퍼티를 콘솔에 출력해보면 함수 이름이 sum이라고 나온다.

```javascript
let sum = function (a, b) {
  return a + b
}

console.log(sum.name) //sum
```

이렇게 나오는 이유는 name 프로퍼티가 함수 객체를 가리키는 변수 이름을 값으로 가지기 때문이다. ES5까지는 빈 문자열을 값으로 가지고 있었지만, ES6부터는 위와 같이 동작한다.

### 만약 함수 표현식에 이름을 붙이면 어떻게 될까?

함수 표현식에 이름을 붙여보자.

```javascript
let sum = function func(a, b) {
  return a + b
}
```

이렇게 함수 이름을 붙여 정의한 함수 표현식을 **기명 함수 표현식** 이라고 한다.
이렇게 정의해도 함수를 호출하는 건 동일하다.

```javascript
let sum = function func(a, b) {
  return a + b
}

sum(1, 2) //3
func(1, 2) //func is not defined (함수 이름은 외부에서 호출 불가능)
```

다만 이 경우에는 함수 이름과 함수 객체를 가리키는 식별자가 다르기 때문에 `func`는 다른 동작을 할 수 있다.

1. 이름을 사용해서 함수 표현식 내부에서 자기 자신을 참조할 수 있다.
2. 함수 표현식 외부에선 이름을 사용할 수 없다.

일반적으로 중첩 호출을 사용할 때는 다음처럼 작성하기 쉽다.

```javascript
let sum = function (a, b) {
  if (!b) {
    return sum(a, 1)
  } else {
    return a + b
  }
}

sum(1, 2) //3
sum(1) //2
```

그런데 만약 함수를 다른 변수에 할당하고, 기존 변수 sum에 null을 할당한다면, 중첩함수를 더 이상 호출할 수 없게 된다.

```javascript
let sum = function (a, b) {
  if (!b) {
    return sum(a, 1)
  } else {
    return a + b
  }
}

let getSum = sum
sum = null

getSum(1, 2) //3
getSum(1) //sum is not a function (중첩 함수는 호출이 불가능하다)
```

이럴 때 함수에 이름을 붙여주면 이런 에러를 방지할 수 있다.

```javascript
let sum = function func(a, b) {
  if (!b) {
    return func(a, 1)
  } else {
    return a + b
  }
}

let getSum = sum
sum = null

getSum(1, 2) //3
getSum(1) // 2 (중첩 함수를 호출할 수 있다!)
```

deep dive 18장 참고
{: .notice--danger}
