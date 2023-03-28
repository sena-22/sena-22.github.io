---
title: "자바스크립트 기초 1 "
excerpt: "변수와 상수, 자료형과 형 변환, 연산자, 조건문"

categories:
  - lecture
tags:
  - [udemy, javascript, variable]

toc: true
toc_sticky: true

date: 2023-03-27
last_modified_at: 2023-03-27
---

![표지](https://user-images.githubusercontent.com/110877564/227923612-082dc19a-ec51-43da-a752-c5e8c546d734.png)

# 서론

웹 사이트를 만들기 위해서는 HTML, CSS, Javascript가 필요하다.

움직이는 인형을 만든다고 가정하자. HTML은 뼈대를 만드는 도구이다. HTML을 이용하여 인형의 각 부위를 만들고 연결할 수 있다.
CSS는 만들어진 뼈대에 피부를 씌우고, 색을 칠하고, 옷을 입히는 역할을 한다. 여기에 Javascript를 사용하면 인형을 움직이게 만들 수 있다.

웹 사이트를 만들 때도 마찬가지로 HTML이 각 요소를 배치하고 내용을 기술하면 CSS가 스타일링을 맡아서 요소에 색을 입히거나 크기를 조절한다. 이 요소들을 선택하고 클릭했을 때 동적으로 움직이게 만드는 도구가 <mark style='background-color: #ffdce0'>Javascript</Mark>이다.
([<Mark style='color:orange'>이 링크</Mark>](https://html-css-js.com/)에서 HTML/CSS/Javascript에 대해 더 자세히 알아볼 수 있다.)

본 포스팅에서는 [<Mark style='color:orange'>한입 크기로 잘라 먹는 리액트(React.js)</Mark>](https://www.udemy.com/course/winterlood-react-basic/?couponCode=1B3AC13BE3B6AE66BCE1) 강의와 [<Mark style='color:orange'>모던 JavaScript 튜토리얼</Mark>](https://ko.javascript.info/)을 기반으로 자바스크립트의 기초적인 개념들을 간단하게 살펴보려고 한다.

<br/>

# 1. 변수와 상수

## 변수

변수는 하나의 값을 저장하기 위해 확보한 <mark style='background-color: #ffdce0'>메모리 공간 자체</Mark> 혹은 <mark style='background-color: #ffdce0'>메모리 공간을 식별하기 위해 붙인 이름</Mark>을 말한다.
간단하게는 이름이 붙은 상자로 생각하면 된다.

## 변수를 언제, 어떻게 사용할까?

- 변수는 계속해서 바뀌는 값을 저장하고 싶을 때 사용하고, `let` 키워드를 사용하여 선언할 수 있다.

```javascript
let name //name이라는 변수를 선언한다.
name = "jack" //name이라는 변수에 'jack'이라는 값을 할당한다.
console.log(name) //'jack'
name = "mini" //다른 값을 할당할 수 있다.
console.log(name) //'mini'
```

- `let`은 키워드인데, 키워드는 어떤 명령을 수행하라고 미리 정의해놓은 단어들을 말한다고 생각하면 된다. `let`의 경우 `let` 뒤에 오는 단어를 변수명으로 하여 변수를 선언하라는 의미를 가진다.
- `let`과 변수명 뒤에 오는 `=`를 할당연산자라고 한다.

흔히 '같다'는 의미로 많이 쓰이지만 자바스크립트에서는 뒤에 오는 값을 앞에다 넣으라는 의미로 사용된다. 자바스크립트에서 '같음'을 알기 위해서는 `==`나 `===`을 사용한다. [동등 비교 연산자 / 일치 비교 연산자 참고](http://127.0.0.1:4000/javascript/operator/#31-%EB%8F%99%EB%93%B1-%EB%B9%84%EA%B5%90-%EC%97%B0%EC%82%B0%EC%9E%90--%EC%9D%BC%EC%B9%98-%EB%B9%84%EA%B5%90-%EC%97%B0%EC%82%B0%EC%9E%90)
{: .notice--danger}

## ❌ 변수명을 지을 때 주의할 점!

변수의 이름을 지을 때 주의해야할 규칙으로 크게 세 가지가 있다.

(1) `언더스코어(\_)`와 `달러($)` 외의 기호를 사용할 수 없다.

(2) 변수명은 반드시 `문자로 시작`해야 한다. (숫자는 금지!)

- 중간이나 뒤에는 숫자가 와도 무방하다.

(3) `예약어는 피해야` 한다.

- 예약어란? 미리 사용하기로 한 단어들을 말한다. 예를 들어 `if`, `for` 등은 조건문을 쓸 때 사용된다.
- [자바스크립트의 예약어 목록](https://www.w3schools.com/js/js_reserved.asp)

## var

책이나 다른 코드들을 보다보면 `var` 키워드를 이용해서 변수를 선언한 경우가 종종 보인다. `var` 역시 변수를 선언하는 키워드이다. 그렇다면 `let`과의 차이점은 무엇일까?

```javascript
let name = "jack" //선언과 할당을 이렇게 한 번에 할 수 있다.
console.log(name) //'jack'
let name = "mini"
console.log(name) // ??
```

위에서 보았던 코드에서 재할당을 하는 대신 다시 한 번 let 키워드를 선언해서 값을 할당하면 어떻게 될까?

`let name = "mini"`에서 `name`은 이미 선언되었다는 내용의 오류가 발생한다.
`let` 키워드는 재선언을 허용하지 않기 때문이다.
하지만 `var`로 선언할 경우, `var`는 재선언을 허용하기 때문에 위의 코드는 오류를 발생시키지 않는다.

```javascript
var name = "jack"
console.log(name) //'jack'
var name = "mini"
console.log(name) // 'mini'
```

만약 코드량이 많다면, 이렇게 선언과 재선언을 반복하면 문제가 생길 가능성이 높아진다. 이 문제를 개선하기 위해 되도록 `var`보다는 `let`을 사용하여 변수를 선언하는 것이 좋다.

## 상수

- 상수는 변하지 않는 값이라는 뜻이다.
- 상수를 선언하기 위해서는 `const`라는 키워드를 사용하며, 선언 방법은 `let`과 동일하다.

### let과 const의 차이점은 무엇일까?

- let과 const의 가장 큰 차이점은 재할당 여부이다. 앞서 `let`으로 선언한 변수는 재선언이 불가능하지만, 재할당은 가능했다. 하지만 `const`로 선언한 상수의 경우 재선언은 물론 재할당도 불가능하다.

```javascript
const name = "jack"
console.log(name) //'jack'
name = "mini" //Assignment to constant variable.
```

- 두 번째 차이점은 const의 경우 선언과 할당을 동시에 해야 한다는 점이다. 선언 이후에 값을 바꿀 수 없기 때문이다.

```javascript
let name //let 키워드는 선언과 할당을 분리해서 할 수 있다.
name = "jack"
const age //error! const 키워드는 선언과 할당을 동시에 해야 한다.
```

<br/>
# 2. 자료형과 형 변환

<p align="center">
<img width="1134" alt="스크린샷 2023-03-27 오후 9 05 49" src="https://user-images.githubusercontent.com/110877564/227937024-ec1b0d8b-92be-4ae9-a900-f207f789995c.png">
</p>
(강의자료 참고)

자바스크립트의 자료형은 크게 원시 타입과 비 원시 타입으로 나뉜다. 원시 타입은 한번에 하나의 값만 가질 수 있다. 반대로 비 원시 타입은 한번에 여러 개의 고정되지 않은 값을 가질 수 있다.

원시 타입의 종류로는 숫자, 문자, 불리언, undefined, null의 다섯 가지가 있다.

## 1. number

- 자바스크립트에서는 정수와 실수를 구분하지 않고, 모든 수를 실수로 처리한다.
- 흔히 떠오르는 숫자들(110,127.1...)는 물론이고 양의 무한대(Infinity), 음의 무한대(-Infinity), 산술연산불가(NaN:Not a Number)도 숫자 타입이다.

## 2. string

- 문자열 타입은 쌍따옴표나 작은 따옴표, 백틱을 사용하여 표현할 수 있다. 이중 백틱을 사용해 표현하는 문자열 표기법을 <mark style='background-color: #ffdce0'>템플릿 리터럴</mark>이라고 하는데, `${}`을 이용해 표현식을 삽입할 수 있다는 특징이 있다.

```javascript
let name = "jack" //쌍따옴표 사용

let name2 = `name is ${name}`
console.log(name2) //'name is jack'
```

## 3. boolean

- 불리언 타입은 `true`와 `false` 뿐이다.

## 4. null

- '아무것도 없다'는 뜻이다.
- `undefined`와 다른 점은, `null`의 경우 의도적으로 '아무것도 없음'을 나타내기 위해 사용한다는 것이다.

```javascript
let a
console.log(a) //undefined
let b = null //일부러 null을 할당
console.log(b) //null
```

## 5. undefined

- 변수를 선언하고 값을 할당하지 않으면 `undefined`가 반환된다.
- 함수에 리턴 값이 없을 때도 `undefined`가 반환된다.

## 🍬 형 변환

숫자에 숫자를 곱하면 숫자가 나온다.

```javascript
let a = 1
let b = 2
console.log("a * b:", a * b) //a * b: 2
```

숫자에 문자열을 곱하면 자바스크립트 엔진이 문자열을 숫자로 변환해서 곱한 결과가 나온다.

```javascript
let c = 1
let d = "2"
console.log("c * d:", c * d) //c * d: 2
```

이때 만약 문자열을 숫자로 바꿀 수 없으면 NaN이 출력되게 된다.

```javascript
let e = 1
let f = "f"
console.log("e * f:", e * f) //e * f: NaN
```

이런 식으로 값은 유지하면서 자료형을 바꾸는 것을 <mark style='background-color: #ffdce0'>형 변환(타입 캐스팅)</mark>이라고 한다.

형 변환에는 <mark style='background-color: #ffdce0'>명시적인 변환</mark>과 <mark style='background-color: #ffdce0'>암묵적인 변환</mark>이 있다. 방금 본 예제는 암묵적 타입 변환의 경우이다.

숫자에 문자열을 더할 경우 반대로 숫자를 문자열로 바꿔서 문자열들이 붙은 형태가 리턴된다.

```javascript
let g = 1
let h = "2"
console.log("g + h:", g + h) //g + h: 12
```

만약 더할 때도 곱하기를 했을 때처럼 문자열을 숫자처럼 만들고 싶으면, `parseInt()`를 사용하여 문자열을 숫자로 바꾼다. `parseInt()`는 문자열을 받아서 숫자로 돌려주는 함수이다.

```javascript
let i = 1
let j = "2"
console.log("i + j:", i + parseInt(j)) //i + j: 3
```

이렇게 의도적으로 타입을 변환하는 것을 명시적 타입 변환이라고 한다.

<br/>

# 3. 연산자

## 1. 대입(할당) 연산자

할당 연산자(=)는 오른쪽에 있는 식의 결과를 왼쪽에 할당한다.

```javascript
let a
a = 10 + 10
console.log(a) // 20
```

## 2. 산술 연산자

산술 연산자는 사칙연산과 동일하게 덧셈(`+`), 뺄셈(`-`), 곱셈(`*`), 나눗셈(`/`) 등이 있다. 주의할 점은 나눗셈은 `/`를 사용하고, 나머지를 구할 때는 `%`를 사용한다는 점이다.

```javascript
5 / 2 //2.5

5 % 2 //1
```

## 3. 연결 연산자

연결 연산자(+)는 값들을 이어 붙여주는 역할을 한다.

만약 한쪽이 숫자이면 암묵적으로 문자열로 변환한 후 연결한다.

```javascript
console.log("1" + 2) // '12'
```

더 복잡한 경우도 있다.

```javascript
console.log(2 + 2 + "1") //'41'
//2+2가 먼저 실행된 후, 4 + '1'이 실행된다.
```

📍 만약 + 연산자가 단항 연산자로 사용될 경우, 숫자형이 아닌 경우 숫자로 변환된다.

```javascript
let a = "1"
console.log(typeof a) //string
console.log(typeof +a) //number

console.log(+true) //1
console.log(+"") //0
```

## 4. 복합 연산자

`a = a + 10` 처럼 a를 두 번 반복해서 적는 것은 비효율적이다! 이럴 때는 복합연산자를 사용해서 `a += 10` 으로 나타내서 간결하게 표현할 수 있다.
`-=`, `*=`, `/=` 역시 사용 가능하다.

```javascript
a = a + 1
a += 1
```

## 5. 증감 연산자

- 증감 연산자는 숫자형에만 사용 가능하다.

```javascript
let a = 10
a++ //a+=1 처럼 동작한다.
console.log(a) //1
```

- `--`도 가능하다.

- 증감 연산자는 앞에 붙는지, 뒤에 붙는지에 따라 결과가 달라진다.

```javascript
let a = 10
console.log(a++) //10 => 뒤에 쓰면 라인이 끝나고 값이 올라간다.(후위연산)
console.log(a) //11
console.log(++a) //12 => 앞에 쓰면 값이 바로 올라간다.(전위연산)
```

## 6. 논리 연산자

- `boolean` 자료형을 위한 연산자

### !(not)

- `true`는 `false`로, `false`는 `true`로 바꾼다.

```javascript
console.log(!false) // true
console.log(!true) // false
```

### && (and)

- 피연산자가 모두 true인 경우에만 true가 나온다.

```javascript
console.log(true && true) //true
console.log(true && false) //false
console.log(false && false) //false
```

### || (or)

- 둘 중 하나만 참이어도 참이다.

```javascript
console.log(true || true) //true
console.log(true || false) //true
console.log(false || false) //false
```

## 7. 비교 연산자

### 동등(같음) / 부등(같지 않음) 연산자

```javascript
let compareA = 1 == "1"
console.log(compareA) //true
```

`==`처럼 사용하면 값만 비교하고 타입은 비교하지 않기 때문에 true가 나온다. 타입도 비교하기 위해서는 `===`를 사용해야 한다.

```javascript
let compareA = 1 === "1"
console.log(compareA) //false
```

값이 같지 않음을 알기 위해서는 `!=`를 사용한다. 또한 마찬가지로 타입까지 비교할 때는 `!==`를 사용한다.

```javascript
let compareA = 1 != "1"
console.log(compareA) //false

let compareB = 1 !== "1"
console.log(compareB) //true
```

### 💡 '=='과 '==='

`==`를 동등 (비교) 연산자라고 하는데, 이 연산자는 종종 예상하지 못한 문제를 일으킨다.

```javascript
console.log(0 == false) //true
console.log("" == false) //true
```

위의 코드는 동등 연산자가 비교할 때 피연산자를 숫자로 바꾸기 때문에 발생한다. 빈 문자열과 `false`는 숫자형으로 변환하면 0이 된다. 여기서 일치 (비교) 연산자 `===`를 사용하면 다음과 같은 결과가 나온다.

```javascript
console.log(0 === false) //false
console.log("" === false) //false
```

일치 연산자가 더 염격한 비교를 하기 때문에, 되도록이면 동등 연산자보다 일치 연산자를 사용하는 것이 좋다고 한다.

### 대소 비교 연산자

대소 비교 연산자는 흔히 사용하는 `<, >, <=, =>`를 이용한다. 특이한 점은 문자열의 경우에도 비교가 가능하다는 점인데, 유니코드 순으로 뒤쪽에 있는 문자열이 앞쪽에 있는 문자열보다 크다고 판단한다.

```javascript
"Z" > "A" //true
```

비교 시에는 대소문자를 구분한다. 소문자가 대문자보다 크다.

```javascript
"a" > "A" //true
```

만약 유니코드 값을 알고 싶으면 `charCodeAt()`이라는 메서드를 사용하면 된다.

```javascript
console.log("a".charCodeAt()) //97
console.log("A".charCodeAt()) //65
```

## 8. typeof 연산자

`typeof` 연산자는 뒤에 오는 값의 타입을 문자열로 돌려준다.

```javascript
typeof 1 //'number'
typeof "1" //'string'
typeof true //'boolean'
```

`null`의 경우 `object`로 나타나는 문제가 있으므로, `null` 값을 확인하고 싶을 때는 일치 연산자(===)를 사용한다.

## 9. null 병합 연산자

- `??` 왼쪽이 `null`이거나 `undefined`인 경우, 오른쪽 값을 돌려준다.
- 그게 아니면 왼쪽 값을 돌려준다.
- 변수에 기본 값을 설정할 때 사용하면 좋다.

```javascript
let a //선언하고 아무것도 할당하지 않으면 자동으로 undefined이 할당된다.
a = a ?? 10 //왼쪽이 undefined이므로 오른쪽 값을 돌려준다.
console.log(a) //10

let b = 10
b = b ?? 15
console.log(b) //10
```

<br/>

# 4. 조건문

## 조건문이란?

- 어떤 연산의 참 / 거짓에 따라 다른 명령을 실행할 수 있도록 도와주는 문법

예를 들어 어떤 사람이 20세 이상인지 미만인지에 따라 다른 조건을 결과를 만들고 싶을 때, 조건문을 사용하면 편하다.

## if문

```javascript
let personA = 20

if (personA >= 20) {
  //괄호 안의 값이 참인지/거짓인지 판별
  console.log("20세 이상입니다.") //괄호 안의 값이 참일때 실행
} else {
  console.log("20세 미만입니다.") //괄호 안의 값이 거짓일때 실행
}
```

만약 조건을 여러가지로 만들고 싶을 땐 `else if`를 사용한다.

```javascript
let personA = 20

if (personA >= 20) {
  console.log("20세 이상입니다.") //20세 이상일 때 실행
} else if (personA >= 10) {
  console.log("10세 이상입니다.") //20세 미만 & 10세 이상일 때 실행
} else {
  //위에 있는 식이 다 아닐 때 실행된다
  console.log("10세 미만입니다.") //10세 미만일 때 실행
}
```

## switch

조건이 다양할 때는 `switch`문을 사용하면 좋다.

```javascript
let country = "ko"

switch (country) {
  case "ko": //여기에 조건을 적어준다.
    console.log("한국") //위의 케이스가 참일 때 실행할 문
    break //밑의 코드를 생략하기 위해 써준다
  case "cn":
    console.log("중국")
    break
  case "en":
    console.log("영국")
    break
  default: //어디에도 해당되지 않을 때
    console.log("미분류")
    break
}
```
