---
title: "자바스크립트 기초 3 "
excerpt: "객체, 배열, 반복문, 배열 내장 함수"

categories:
  - lecture
tags:
  - [udemy, javascript]

toc: true
toc_sticky: true

date: 2023-03-29
last_modified_at: 2023-03-30
---

![표지3](https://user-images.githubusercontent.com/110877564/228702927-3b0e9d12-8ed3-4f64-85f4-2a87c4726aa8.png)

<br />

# 1. 객체

객체는 원시형과 달리 여러가지 데이터를 넣을 수 있는 자료형이다.

## 객체를 만드는 방법

객체를 만드는 방법에는 크게 두 가지가 있다.

```javascript
let personA = new Object() // Object 생성자를 이용하는 방법
let personB = {} // 객체 리터럴을 이용하는 방법

let personC = {
  key: "value", //프로퍼티(속성)
  key2: "value2",
}

console.log(personC) //{key: 'value', key2: 'value2'}
```

프로퍼티 키는 반드시 문자열이어야 한다. 반면 프로퍼티 값에는 어떤 자료형이 와도 무방하다.

## 객체의 프로퍼티를 꺼내는 방법

객체의 프로퍼티에 접근하는 방법에는 점 표기법과 대괄호 표기법이 있다.

<mark style='background-color: #ffdce0'>점 표기법</mark>은 `객체이름.프로퍼티 키`로 사용하며 해당하는 프로퍼티 값을 얻을 수 있다.
<mark style='background-color: #ffdce0'>대괄호 표기법</mark>은 `객체이름["프로퍼티 키"]`로 표기하며, 프로퍼티 키를 문자열 형태로 넣어주어야 한다. 만약 문자열로 넣지 않으면 프로퍼티 키를 변수로 인식하게 된다.

```javascript
let person = {
  name: "jack",
  age: 20,
}

console.log(person.name) //jack(점 표기법)
console.log(person["age"]) //20(대괄호 표기법)

console.log(person.key) //없는 프로퍼티에 접근하면 undefined가 출력된다.
```

대괄호 표기법은 프로퍼티 키가 동적으로 변하여 변수에 넣는 경우 유용하게 사용할 수 있다.

```javascript
let person = {
  name: "jack",
  age: 20,
}

const getPropertyValue = (key) => {
  return person[key]
}

console.log(getPropertyValue("name")) //jack
```

## 객체에 프로퍼티를 추가 / 수정 / 삭제하는 방법

```javascript
let person = {
  name: "jack",
  age: 20,
}

/* 프로퍼티 추가 */
person.location = "korea" //프로퍼티 추가(점 표기법)
person["gender"] = "male" //프로퍼티 추가(대괄호 표기법)

/* 프로퍼티 수정 */
person.name = "jack2" //추가와 똑같은 방식을 사용하면 된다.
person["age"] = 28

/* 프로퍼티 삭제 */
delete person.age
//delete person['age'] //대괄호 표기법을 사용해도 괜찮다.
person.gender = null

console.log(person) //{name: "jack2", location: "korea", gender: null}
```

`delete`를 사용하는 방법은 객체와 프로퍼티 간의 연결을 끊을 뿐 메모리에서 삭제되는 것은 아니다. 따라서 `null`을 할당하는 방법이 더 좋다.

🧐 프로퍼티를 추가하고 수정할 때, 원본 객체를 `const`로 선언해도 에러가 나지 않는다. 객체 자체를 수정하는 것이 아니기 때문이다.

```javascript
const person = {
  name: "A",
}

person = {
  age: 20,
} // Assignment to constant variable.
```

⬆ 위의 경우처럼 객체 자체를 수정하려고 하면 에러가 발생한다.

## 객체의 프로퍼티 값으로 함수를 할당하기

```javascript
const person = {
  name: "jack", //함수가 아닌 프로퍼티를 멤버라고 한다.
  age: 20,
  say: function () {
    console.log(`Hello, My name is ${this.name}`) //여기서 this는 자기 자신(person)객체를 말한다
  }, //함수인 프로퍼티를 메서드라고 한다.
}

person.say() //Hello, My name is jack
```

## 객체에 프로퍼티가 존재하는지 아닌지를 알 수 있는 방법

```javascript
const person = {
  name: "jack",
  age: 20,
  say: function () {
    console.log(`Hello, My name is ${this.name}`)
  },
}

console.log(`name: ${"name" in person}`) //name: true  //person에 name이라는 키를 가진 프로퍼티가 있는지?
console.log(`gender: ${"gender" in person}`) //gender: false
```

<br/>

# 2. 배열

배열은 순서가 있는 자료들을 담을 때 유용하게 사용할 수 있는 자료형이다.

## 배열 만들기

배열도 객체와 마찬가지로 생성자를 이용하는 방법과 리터럴을 사용하는 두 가지 방법이 있다.

```javascript
//1. 생성자를 이용하는 방법
const arr = new Array()
//2. 배열 리터럴([])을 사용하는 방법
const arr2 = []
console.log(arr2) //[]
```

## 배열에 값을 할당하는 방법

배열은 쉼표를 사용하여 값들을 넣어주면 된다. 이때 아무 타입이나 넣을 수 있다.

```javascript
const arr = [1, 2, 3, 4]
console.log(arr) //[1, 2, 3, 4]
```

## 배열의 특정 요소에 접근하는 방법

배열은 키 대신 배열의 순서(인덱스)를 이용하여 접근할 수 있다. 인덱스는 0부터 시작한다.

```javascript
const arr = [1, 2, 3, 4, 5]

console.log(arr[0]) //1
console.log(arr[1]) //2
```

## 배열에 요소를 추가하는 방법

배열에 요소를 추가하는 방법은 여러가지가 있는데 그 중에 `push()`는 배열의 가장 마지막에 요소를 추가해주는 메서드이다.

```javascript
arr.push(6)
console.log(arr) //[1, 2, 3, 4, 5, 6]
```

## 배열의 길이를 확인하는 방법

배열의 길이는 `length` 프로퍼티를 이용하여 확인 가능하다

```javascript
console.log(arr.length) //6
```

<br/>

# 3. 반복문

- 반복문은 어떤 코드를 반복해서 사용할 때 **중복되는 코드를 줄이기 위해** 사용할 수 있다.

## for 문

- for문은 중괄호 안에 초기식, 조건식, 증감문을 넣어 반복할 횟수를 정하고, 중괄호 안에 반복해서 수행할 명령을 입력하면 된다.

```javascript
for (초기식; 조건식; 증감문) {
  //반복 수행할 명령
}

//example
for (let i = 1; i <= 100; i++) {
  console.log("jack") //jack(100번 반복)
}
```

### for문으로 배열을 순회하는 방법

반복문은 배열을 순회할 때 효과적으로 사용할 수 있다.

```javascript
const arr = [1, 2, 3]

for (let i = 0; i < arr.length; i++) {
  //인덱스 순서대로 순회하는 방법
  console.log([arr[i]])
}
```

### for문으로 객체를 순회하는 방법

- `Object.keys()`를 사용하면 객체의 키를 배열로 반환받을 수 있다. 이 배열을 순회하면 키를 순회할 수 있다.

```javascript
let person = {
  name: "jack",
  age: 20,
  tall: 170,
}

const personKeys = Object.keys(person) //프로퍼티 키를 배열로 반환해준다.
console.log(personKeys) //  ["name", "age", "tall"]

for (let i = 0; i < personKeys.length; i++) {
  console.log([personKeys[i]]) //["name"] / ["age"] /["tall"]

  //i번째의 키
  const curKey = personKeys[i]
  //i번째의 값
  const curValue = person[curKey]

  console.log(`${curKey} : ${curValue}`) //name : jack / age : 20  / tall : 170
}
```

- 만약 프로퍼티 값만 순회하고 싶다면 `Object.values()`를 사용하면 된다.

```javascript
const personValues = Object.values(person) //프로퍼티 값을 배열로 반환해준다.
console.log(personValues) // ["jack", 20, 170]
```

이렇게 반환받은 배열을 `for문`을 이용하여 순회하면 된다.

<br/>

# 4. 배열 내장 함수

- 배열 내장 함수는 배열이 자체적으로 가지고 있는 함수를 말하는데, 이것들을 잘 활용하면 여러 기능을 사용할 수 있다.

## forEach()

```javascript
const arr = [1, 2, 3, 4]

arr.forEach((el) => console.log(el)) //1 / 2 / 3 / 4

arr.forEach((el) => {
  console.log(el * 2) //파라미터로 전달받은 배열의 요소를 여기서 조작할 수 있다.
})
```

`forEach()`는 배열의 요소를 하나씩 내부의 콜백함수에 파라미터로 전달한다. 전달된 파라미터에 원하는 작업을 해주면 된다.

## map()

배열의 요소를 하나씩 조작한 결과를 배열로 리턴 받고 싶을 때에는 `map()`을 사용하면 된다.

```javascript
const arr = [1, 2, 3, 4]

const newArr = arr.map((el) => {
  return el * 2 //배열의 요소를 하나씩 꺼내어 2를 곱한 값을 배열에 넣고 리턴
})

console.log(newArr) //[2, 4, 6, 8]
```

만약 리턴 문을 사용하지 않은 경우 중괄호가 아니라 소괄호를 사용한다.

```javascript
const arr = [1, 2, 3, 4]

const newArr = arr.map((el) => el * 2)

console.log(newArr) //[2, 4, 6, 8]
```

## includes()

배열 안에 특정 값이 있는지 없는지 확인하려면 `includes`를 사용하면 된다. `includes`는 타입까지 비교한다.

```javascript
const arr = [1, 2, 3, 4]

let number = 3
let number2 = "3"

console.log(arr.includes(number)) //true
console.log(arr.includes(number2)) //false 타입이 다르기 때문에 틀리다!
```

## indexOf()

배열에서 찾는 값이 몇 번째 인덱스에 있는지 확인하고 싶을 때는 `indexOf()`를 사용한다. 만약 찾는 값이 없으면 `-1`을 리턴한다.

```javascript
const arr = [1, 2, 3, 4]

let number = 3
let number2 = "3"

console.log(arr.indexOf(number)) //2
console.log(arr.indexOf(number2)) //-1
```

🤔 배열에 찾는 값이 여러 개 있을 때에는 어떤 인덱스가 리턴될까?

```javascript
const arr = [1, 3, 3, 4]

let number = 3

console.log(arr.indexOf(number)) //1
```

⬆️ 찾는 값이 여러 개인 경우 첫 번째로 나오는 값의 인덱스가 리턴된다.

## findIndex()

객체 배열에서 원하는 속성을 가진 프로퍼티를 찾고 싶을 땐 `findIndex()`를 사용한다.

```javascript
const arr = [
  {color: "red"},
  {color: "black"},
  {color: "blue"},
  {color: "green"},
]

console.log(arr.findIndex((el) => el.color === "blue")) //2
```

`findIndex()`는 콜백함수에 요소를 하나씩 전달해서 `true`를 반환하는 첫 번째 요소를 리턴한다.

위에서 `el`에는 객체가 하나씩 콜백함수의 파라미터로 전달된다.

```javascript
arr.findIndex((el) => {
  return console.log("el:", el)
})
```

<p align="center">
<img width="283" alt="스크린샷 2023-03-30 오전 9 19 52" src="https://user-images.githubusercontent.com/110877564/228696605-a19adbb3-b8b5-4ebe-bfd4-95d617277796.png">
</p>

## find()

배열의 인덱스가 아니라 요소에 직접 접근하고 싶을 때에는 `find()`를 사용한다.

```javascript
const arr = [
  {color: "red"},
  {color: "black"},
  {color: "blue"},
  {color: "green"},
]

const element = arr.find((el) => el.color === "blue")
console.log(element) //{color: "blue"}
```

## filter()

`filter()`는 전달한 콜백함수가 true를 반환하는 모든 요소를 배열로 반환한다.

```javascript
const arr = [
  {num: 1, color: "red"},
  {num: 2, color: "black"},
  {num: 3, color: "blue"},
  {num: 4, color: "green"},
  {num: 5, color: "blue"},
]

// 위 배열에서 color가 blue인 요소들만 가지고 오고 싶을 때에는 어떻게 해야할까?

let blueColor = arr.filter((el) => el.color === "blue")
console.log(blueColor) //⬇
```

<p align="center">
<img width="283" alt="스크린샷 2023-03-30 오전 9 28 19" src="https://user-images.githubusercontent.com/110877564/228697429-dd85c51a-ae81-408b-84b2-0c23e92161d2.png">
</p>

## slice()

배열을 인덱스를 기준으로 자르고 싶을 때에는 `slice()`를 사용하면 된다.

```javascript
const arr = [1, 2, 3, 4, 5]

//그대로 자르기 - 배열을 그대로 복사하고 싶을 때 사용하면 좋다!
console.log(arr.slice()) //[1, 2, 3, 4, 5]

//시작 지점만 정하기
//1번째 인덱스에서 마지막 인덱스까지 모두 자른다
console.log(arr.slice(1)) //[2, 3, 4, 5]

/*
  시작 지점과 마지막 지점 모두 설정
  두 번째 인자로 전달한 값-1까지 자른다
  이 경우 arr[0]부터 arr[1]까지 자른 것!
*/
console.log(arr.slice(0, 2)) //[1, 2]
```

## concat()

배열을 붙이고 싶을 때에는 `concat()`을 사용한다. 첫 번째 배열의 뒤에 두 번째 배열을 붙인 후 하나의 배열로 돌려준다.

```javascript
const arr1 = [1, 2, 3]
const arr2 = [4, 5]

console.log(arr1.concat(arr2)) // [1, 2, 3, 4, 5]
```

## sort()

배열을 정렬할 때에는 `sort()`를 사용한다.

```javascript
let chars = ["나", "다", "가"]

chars.sort()

console.log(chars) // ["가", "나", "다"]
```

`sort()`의 경우 새로운 배열을 반환하는 것이 아니라 원본 배열을 바꿔서 반환한다.

다음으로 숫자도 정렬해보자.

```javascript
let nums = [0, 1, 3, 2, 7, 20]

nums.sort()
console.log(nums) //[0, 1, 2, 20, 3, 7]
```

숫자의 경우 기대하는 것과 다르게 반환된다. `sort()`가 문자열을 기준으로 정렬하기 때문에, 사전 순으로 0,1,2,3..이런 식으로 정렬되기 때문이다.

숫자를 기준으로 정렬하고 싶을 때에는 다음과 같이 정렬한다.

```javascript
nums.sort((a, b) => a - b)
console.log(nums) //(6) [0, 1, 2, 3, 7, 20]
```

위의 정렬이 어떻게 동작하는지 자세히 살펴보자.

```javascript
const compare = (a, b) => {
  if (a > b) {
    //크다
    return 1 //a가 뒤로 간다
  }
  if (a < b) {
    //작다
    return -1 //a가 앞으로 간다
  }
  //같다
  return 0
}

console.log(nums.sort(compare)) // [0, 1, 2, 3, 7, 20]
```

`sort((a, b) => a - b)` 안은 `compare()` 처럼 동작한다.
만약 내림차순으로 정렬하고 싶을 때에는 `sort((a,b)=>b-a)`로 작성해주면 된다.

## join()

배열 안의 요소들을 하나의 문자열로 만들고 싶을 때에는 `join()`을 사용한다.
이때 `join()` 안에 넣는 값이 구분자가 된다.

```javascript
const arr = ["h", "e", "l", "l", "o"]

console.log(arr.join()) // h,e,l,l,o(디폴트)
console.log(arr.join("")) // hello
console.log(arr.join(" ")) // h e l l o
console.log(arr.join("🥳")) // h🥳e🥳l🥳l🥳o
```

이외에도 많은 배열 내장 함수가 있다.
전부 공부하기보다 필요할 때 찾아가면서 하면 좋을 것 같다.

참고 <br/>
[한입 크기로 잘라 먹는 리액트](https://www.udemy.com/course/winterlood-react-basic/) <br/>
[Array-Javascript MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array) <br/>
[배열과 메서드](https://ko.javascript.info/array-methods)
{: .notice--primary}
