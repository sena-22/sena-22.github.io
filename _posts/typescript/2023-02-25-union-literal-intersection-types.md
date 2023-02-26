---
title: "[typescript] 리터럴, 유니온, 교차 타입"
excerpt: "literal, union, intersection type"

categories:
  - typescript
tags:
  - [typescript, literal type, union type, intersection type]

toc: true
toc_sticky: true

date: 2023-02-25
last_modified_at: 2023-02-26
---

# 리터럴 타입

리터럴 타입은 구체적인 문자열과 숫자 값을 타입으로 지정하여, 지정한 값만 사용할 수 있게 만든 타입이다.

```typescript
//const로 선언한 원시 값은 재할당이 불가능하다.
// 리터럴 타입의 표현 방식은 const 키워드가 작동하는 방식과 유사하다.
const userName1 = 'jack';

//let으로 선언한 값은 재할당이 가능하다. 이 경우 숫자도 함께 지정했기 때문에 숫자로 재할당이 가능하다
let userName2 = string|number = 'clive'
userName2 = 3;

type Job = 'police' |'developer'|'teacher'; //리터럴 타입

interface User {
  name:string;
  job:Job
}

const user:User = {
  name : 'Jack',
  job:'developer' //위에서 선언한 목록만 사용 가능하다.
}
```

# 유니언 타입

유니언 타입은 타입을 조합하는 방법 중에 하나이며, `or` 조건을 나타낼 때 사용한다.

```typescript
interface Car {
  name: "car";
  color: string;
  start(): void;
}

interface Mobile {
  name: "mobile";
  color: string;
  call(): void;
}

//Car | Mobile처럼 |를 사용한 타입을 유니온타입이라고 한다.
function getGift(gift: Car | Mobile) {
  console.log(gift.color); //둘다 가지고 있는 속성은 사용 가능
  gift.start(); // 하나에만 있는 속성은 사용 불가능 (에러 발생)

  if (gift.name === "car") {
    //이런 식으로 조건문을 달아서 사용 가능
    gift.start();
  } else {
    gift.call();
  }
}
```

# 교차 타입

유니언 타입과 마찬가지로 타입을 조합할 수 있는데, `and` 조건을 나타낼 때 사용한다.

```typescript
interface Car2 {
  name: string;
  start(): void;
}

interface Toy {
  name: string;
  color: string;
  price: number;
}

//Toy와 Car의 모든 속성을 적어줘야 한다
const toyCar: Toy & Car2 = {
  name: "tayo",
  start() {},
  color: "blue",
  price: 1000,
};
```
