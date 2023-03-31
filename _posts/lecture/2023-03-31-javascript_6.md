---
title: "[한입 크기로 잘라 먹는 리액트] 자바스크립트 응용 3 "
excerpt: "동기 & 비동기, Promise & 콜백 지옥, async & await, API 호출하기"

categories:
  - lecture
tags:
  - [udemy, javascript]

toc: true
toc_sticky: true

date: 2023-03-31
last_modified_at: 2023-03-31
---

![응용3](https://user-images.githubusercontent.com/110877564/228953631-192e638f-06d5-4490-9a24-82c419602d2f.png)

<br />

# 1. 동기 & 비동기

<mark>동기적 방식</mark>은 앞의 작업이 끝나기를 기다렸다가, 뒤의 작업을 이어서 하는 방식을 말한다. 그리고 작업이 스레드에서 수행되고 있을 때, 다른 작업을 동시에 할 수 없는 방식을 블로킹 방식이라고 한다.

<img width="1042" alt="스크린샷 2023-03-31 오전 5 15 44" src="https://user-images.githubusercontent.com/110877564/228954069-e52c3aff-ab55-4b3b-8ff2-b2e4812b2325.png">

동기적 방식의 단점은 앞의 작업이 오래 걸릴 때, 그 다음 작업은 시작도 못하기 때문에 하염없이 기다려야 한다는 것이다. 만약 카페에 갔는데 앞의 사람이 주문하고 음료를 제조해서 받을 때까지 다음 사람은 주문조차 불가능한 상황을 생각해보면 쉽게 이해가 갈 것이다.

<img width="1042" alt="스크린샷 2023-03-31 오전 5 23 37" src="https://user-images.githubusercontent.com/110877564/228955695-463a17a9-6d81-4679-ba8f-cbb8cd1149f1.png">

이런 문제를 해결하기 위해 자바스크립트는 <mark>비동기</mark>로 동작한다.

<img width="1042" alt="스크린샷 2023-03-31 오전 5 26 04" src="https://user-images.githubusercontent.com/110877564/228956202-8ea7e7b5-0067-4d4a-a368-6a8ebbced681.png">

비동기는 여러 개의 작업을 동시에 실행시켜, 먼저 끝나는 순서대로 종료하는 방식이다.

비동기 작업은 작업 속도를 증가시키지만, 순서를 보장하지 않기 때문에 만약 앞의 일이 끝난 결과를 알아야 실행할 수 있는 일이 있다면 문제가 생길 수 있다. 이런 문제를 해결하기 위해 콜백 함수를 이용할 수 있다. 앞의 작업의 콜백 함수로 다음 작업을 넣으면, 필요한 부분을 동기적으로 처리할 수 있다.

<img width="788" alt="스크린샷 2023-03-31 오후 12 34 29" src="https://user-images.githubusercontent.com/110877564/229016405-8fee6c6a-9d32-4023-b91b-6442262ef986.png">

위에서 `taskA()` 함수가 끝나는 걸 기다리지 않고 다음 콘솔이 출력된다. 비동기적으로 작동하고 있다는 것을 알 수 있다.

```javascript
function taskA(a, b, ab) {
  setTimeout(() => {
    const res = a + b
    ab(res)
  }, 3000)
}

function taskB(a, ab) {
  setTimeout(() => {
    const res = a * 2
    ab(res)
  }, 1000) //1초만 기다려서 먼저 출력
}

function taskC(a, ab) {
  setTimeout(() => {
    const res = a * -1
    ab(res)
  }, 2000)
}

taskA(3, 4, (res) => {
  console.log("A TASK RESULT:", res)
})
console.log("코드 끝")

taskB(7, (res) => {
  console.log("B TASK RESULT:", res)
})

taskC(5, (res) => {
  console.log("C TASK RESULT:", res)
})
```

<img width="371" alt="스크린샷 2023-03-31 오후 12 54 24" src="https://user-images.githubusercontent.com/110877564/229018764-731854a6-1d65-4a06-8d1b-4bc993581918.png">

위의 코드는 setTimeout()이라는 함수 때문에 작업 시간이 각각 다르고, 비동기로 처리되어 먼저 끝나는 작업부터 출력된다. 만약 앞의 작업의 결과가 뒤에 작업할 때 필요한 경우, 다음과 같이 처리한다.

```javascript
taskA(3, 4, (a_res) => {
  console.log("A TASK RESULT:", a_res)
  taskB(a_res, (b_res) => {
    console.log("B TASK RESULT:", b_res)
    taskC(b_res, (c_res) => {
      console.log("C TASK RESULT:", c_res)
    })
  })
})
```

<img width="260" alt="스크린샷 2023-03-31 오후 1 48 18" src="https://user-images.githubusercontent.com/110877564/229025346-3d03c880-4fbd-4e26-8a99-6a6ce8e25116.png">

콜백 함수의 단점은 이런 작업이 많으면 많을수록 코드의 가독성이 어려워지고, 더 심각한 것은 유지보수가 힘들다는 점일 것이다.

<img width="958" alt="스크린샷 2023-03-31 오후 1 42 15" src="https://user-images.githubusercontent.com/110877564/229025554-b6f04756-fb90-4b0c-a9c1-1e8bea6b6f6f.png">

위와 같이 콜백이 계속 깊어지는 것을 콜백 지옥, 또는 콜백 헬이라고 부른다.

이런 현상을 해결하기 위한 도구가 `Promise`이다.

<br/>

# 2. Promise & 콜백 지옥

프로미스는 비동기 작업을 쉽게 할 수 있게 해주는 기능이다.
new 키워드를 사용하여 만들 수 있다.

```javascript
const promise = new Promise((resolve, reject) => {
  // 구현할 내용
})
```

이 프로미스를 콘솔에 찍어보면 `Promise {<pending>}`이라고 나온다.

```
console.log(promise) //Promise {<pending>}
```

여기서 `pending`은 promise의 상태를 나타낸다. 상태는 총 3가지가 있다.
`pending`는 대기 상태를 나타내거나 혹은 시작도 못하면 이렇게 나온다.
`fulfilled`는 작업이 성공했을 때, `rejected`는 서버가 응답하지 않거나 시간이 초과하는 등 작업이 실패했을 때 나타나게 된다.

<img width="949" alt="스크린샷 2023-03-31 오후 1 56 10" src="https://user-images.githubusercontent.com/110877564/229036631-bb2709f3-f793-4053-878e-59e1aba63643.png">

프로미스는 비동기 처리를 진행할 콜백 함수(executor함수라고도 한다!)를 전달받는데, 이 콜백 함수는 또 `resolve`와 `reject`라는 함수를 인수로 전달받는다.

```javascript
const promise = new Promise((resolve, reject)=>{
  if(/* 비동기 처리 성공 */) {
    resolve('결과')
  } else { /* 비동기 처리 실패 */
    reject('실패 이유')
  }
})
```

이때 비동기 처리가 성공하면 `resolve 함수`를 호출해서 프로미스를 `fulfilled` 상태로 변경하고, 실패하면 `reject 함수`를 호출하고 프로미스를 `rejected` 상태로 변경한다.

이렇게 프로미스의 상태가 한번 변화하고 나면, 이 결과를 후속 메서드인 then이나 catch를 이용하여 무언가를 할 수 있다.

## then()

then은 두 개의 콜백 함수를 인수로 전달받는다. 하나는 프로미스가 성공했을 때 호출되고, 다른 하나는 프로미스가 실패했을 때 호출된다.

```javascript
//fullfilled
new Promise((resolve) => resolve("fulfilled")).then(
  (v) => console.log(v), //fulfilled
  (e) => console.error(e)
)

//rejected
new Promise((_, reject) => reject(new Error("rejected"))).then(
  (v) => console.log(v),
  (e) => console.error(e) //Error: rejected
)
```

`then()` 메서드는 언제나 프로미스를 반환한다. 따라서 다시 `then()`을 이어 쓸 수 있다.(이렇게 이어서 쓰는 것을 체이닝이라고 한다.)

## catch()

`catch`는 하나의 콜백 함수를 인수로 받으며, 이 콜백 함수는 프로미스가 `rejected`상태일 때만 호출된다.

```javascript
new Promise((_, reject) => reject(new Error("rejected"))).catch(
  (e) => console.error(e) //Error: rejected
)
```

에러 처리를 사용할 때에는 `then()`의 두 번째 콜백 함수로 전달하기보다 catch를 사용하는 것이 가독성이 더 좋다.

<br/>

# 3. async & await

## async

`async`는 asynchronous(비동기)라는 뜻 그대로 비동기를 위한 키워드이다.

함수 앞에 `async`를 붙이면 그 함수는 `async 함수`가 되며, 프로미스를 반환한다.

```javascript
async function helloAsync() {
  console.log("hello async!!")
}

console.log("result:", helloAsync()) //result: Promise {<pending>}
```

참고로 화살표 함수에서는 이렇게 쓴다.

```javascript
const helloAsync = async () => {
  console.log("hello arrow async!!")
}
```

`async 함수`는 프로미스를 반환하기 때문에 `then()`과 같은 후속 메서드를 사용할 수 있다.

```javascript
const helloAsync = async (n) => n
helloAsync("hello").then((v) => console.log(v)) //hello
```

## await

`await` 키워드는 프로미스가 처리될 때까지 기다렸다가, `resolve`한 처리 결과를 반환한다. 이걸 이용하면 처리 순서를 제어할 수 있다.

✔️ await을 사용할 때 주의할 점은, 반드시 `async 함수` 안에서 사용해야 한다는 것이다.

```javascript
const helloAsync = async (n) => {
  const a_res = await new Promise((resolve) =>
    setTimeout(() => resolve(n), 3000)
  )
  const b_res = await new Promise((resolve) =>
    setTimeout(() => resolve(a_res + 1), 2000)
  ) //앞의 프로미스가 끝나면 실행된다.
  console.log("A_RESULT:", a_res) //A_RESULT: 1
  console.log("B_RESULT:", b_res) //B_RESULT: 1
}
helloAsync(1).then((v) => console.log(v))
```

<br/>

# 4. API 호출하기

api는 아직도 정확하게 이해하고 있지 못하다는 생각이 드는데, 일단은 메뉴판 정도로 생각하고 있다.
api를 보고 이 메뉴를 주문하려면 어떻게 주문해야 한다! 는 걸 알고 있는 상태에서 api 호출, 즉 실제 주문을 하는 것이다.

api의 특징 중 하나는, 호출을 했을 때, 언제 메뉴가 나올지 모른다는 것이다. 왜냐하면 보통 클라이언트와 서버는 다른 환경을 가지고 있기 때문이다.

만약 배달 음식을 시켰는데 우리가 동기적으로 행동한다면 정확히 언제 도착할지 모르는 음식이 도착할 때까지 문앞에서 기다려야 할 것이다(..) 컴퓨터에서도 마찬가지이기 때문에 프로미스를 활용해야 한다.

[json placeholder](https://jsonplaceholder.typicode.com/)는 api 호출을 통해 더미 데이터를 보내주는 서비스이다.

<img width="989" alt="스크린샷 2023-03-31 오후 5 10 57" src="https://user-images.githubusercontent.com/110877564/229063688-5e33a938-80d4-44f7-8d54-1e7ecb4e7024.png">

이 주소로 데이터를 요청하면,

<img width="989" alt="스크린샷 2023-03-31 오후 5 10 45" src="https://user-images.githubusercontent.com/110877564/229063691-7713f90a-9237-4f56-87e9-4c637a9f0a4b.png">

이런 결과를 보내준다는 뜻이다.

이 서비스를 활용하여 api를 호출해보자.

```javascript
//feth는 api호출을 할 수 있게 해주는 js 내장 함수이다. 프로미스를 반환한다.
let response = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => {
    console.log(res)
  }
)
```

이렇게 바로 res를 리턴하면 이런 결과가 나온다.

<img width="399" alt="스크린샷 2023-03-31 오후 5 13 14" src="https://user-images.githubusercontent.com/110877564/229064211-4d8647e7-cf00-4635-aa1d-1ca857455731.png">

바로 리턴한 res는 보낸 사람이나 받는 사람의 이런 저런 정보가 담긴 편지봉투라고 생각하면 된다. 안의 내용을 보려면 포장을 뜯어야 한다. `json placeholder`가 보내주는 데이터는 `json 형식`이므로, 다음과 같이 내용물을 꺼내면 된다.

```javascript
async function getData() {
  let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts")
  let jsonResponse = await rawResponse.json()
  console.log(jsonResponse)
}

getData()
```

<img width="399" alt="스크린샷 2023-03-31 오후 5 17 20" src="https://user-images.githubusercontent.com/110877564/229065167-8a30070e-fcae-4fa5-ab17-cce0a41d3b7c.png">

이제 원하는 데이터가 나왔으므로 이 데이터를 이용해서 원하는 작업을 하면 된다.

참고 <br/>
[한입 크기로 잘라 먹는 리액트](https://www.udemy.com/course/winterlood-react-basic/) <br/>
{: .notice--primary}
