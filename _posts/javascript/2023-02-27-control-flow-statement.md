---
title: "[Deep Dive]  7. 제어문"
excerpt: "control flow statement"

categories:
  - javascript
tags:
  - [javascript, control flow statement]

toc: true
toc_sticky: true

date: 2023-02-27
last_modified_at: 2023-02-27
---

제어문은 조건에 따라 코드 블록을 실행하거나 반복 실행할 때 사용한다.

# 블록문

- 블록문(코드 블록, 블록)은 0개 이상의 문을 중괄호({})로 묶은 것을 말한다.
- 블록문은 자체 종결성을 가지기 때문에 끝에 세미콜론을 붙이지 않는다.

# 조건문

## 1. if...else 문

```javascript
if (조건식) {
  //조건식이 true일 때 실행
} else {
  //조건식이 false일 때 실행
}
```

조건이 2개 이상인 경우 else if 문을 추가한다.

```javascript
if (조건식1) {
  //조건식1이 true일 때 실행
} else if (조건식2) {
  //조건식2가 true일 때 실행
} else {
  //조건식이 모두 false일 때 실행
}
```

코드블록 내의 문이 하나면 중괄호를 생략할 수 있다.

```javascript
if (조건식1)  //조건식1이 true일 때 실행
else if (조건식2)   //조건식2가 true일 때 실행
else   //조건식이 모두 false일 때 실행
```

## 2. switch 문

```javascript
switch(표현식) {
  case 표현식1:
    // 표현식과 표현식1이 일치하면 실행
    break;
  case 표현식2:
    // 표현식과 표현식2가 일치하면 실행
    break;
  ...
  default:
    // 표현식과 일치하는 case문이 없을 때 실행
}
```

switch문은 조건이 많을 때 사용하면 좋다.

# 반복문

## 1. for문

조건식이 거짓으로 평가될 때까지 코드 블록을 반복 실행한다.

```javascript
  for(변수 선언문(할당문); 조건식; 증감식) {
    //조건식이 참인 경우 반복해서 실행할 문
  }
```

- 변수 선언문은 한 번만 실행된다.
- 조건식이 true이면 코드 블록이 실행된다
- 코드 블록이 종료되면 증감식이 실행된다
- 다시 조건식이 실행되고, 조건식이 false가 될 때까지 반복된다. 조건식이 false가 되면 for문이 종료된다.

## 2. while문

조건식의 평가 결과가 참인 동안 코드 블록이 반복 실행된다. for문은 반복 횟수가 정해져 있을 때, while문은 횟수가 명확하지 않을 때 사용하면 좋다.

```javascript
while (조건식) {
  //조건식이 참인 경우 반복해서 실행할 문
}
```

만약 조건식이 계속 true이면 무한 루프가 발생한다.
여기서 빠져나가려면 코드 블록 내에 if문을 넣고, if문의 조건이 true일 때 break 문을 사용하면 탈출할 수 있다.

```javascript
while (true) {
  //조건식이 참인 경우 반복해서 실행할 문

  if (조건식) break; //조건식이 참이면 코드 블록 탈출
}
```

## 3. do...while문

do...while문은 코드 블록을 먼저 실행하고 조건식을 평가한다.

```javascript
do {
  // 최초 한 번 + 조건식이 참인 경우 반복해서 실행할 문
} while (조건식);
```

# break 문

레이블 문, 반복문, switch문의 코드 블록을 탈출한다

레이블 문은 식별자가 붙은 문을 말한다. switch문의 `case:`나 `defuault:`도 레이블 문이다.

# continue 문

continue문은 반복문의 코드 블록 실행을 중지하고, 증감식으로 실행 흐름을 이동시킨다. <br/>
break문처럼 반복문을 탈출하지는 않는다.
