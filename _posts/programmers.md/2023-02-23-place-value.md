---
title: "[Programmers] 9. 자릿수 더하기 (javascript)"
excerpt: "자릿수 더하기"

categories:
  - programmers
tags:
  - [study, recursive, javascript, Lv.1]

toc: true
toc_sticky: true

date: 2023-02-23
last_modified_at: 2023-02-23
---

## 🤔 문제

자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요. <br/>
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

## 제한사항

- N의 범위 : 100,000,000 이하의 자연수

## 입출력 예시

| maps | answer |
| ---- | ------ |
| 123  | 6      |
| 987  | 24     |

## 의사코드

1. `Array.from()` 메서드를 사용해서 N을 배열로 만든다.
2. `reduce()`로 각 자리의 합을 구한다.

## 제출한 답

```javascript
function solution(n) {
  let arr = Array.from(String(n), Number);
  let result = arr.reduce((acc, cur) => acc + cur, 0);
  return result;
}
```

## 숫자를 배열로 분할하기

### 1. Array.from()

`Array.from()`은 첫 번째 인자로 배열로 바꾸고 싶은 유사배열 객체나 이터러블 객체(인덱스를 가지고, 반복할 수 있는 객체) 를 전달하고, 두 번째 인자로 배열의 모든 요소에 대해 호출되는 함수를 전달한다.
이 문제의 경우 문자열로 변환된 숫자와 Number 생성자를 전달한다.

```javascript
// Array.from(String(num), Number)
let arr1 = Array.from(String(12345), Number); //[1, 2, 3, 4, 5]
// 두 번째 인자를 전달하지 않으면 각 요소가 문자열로 반환된다.
let arr2 = Array.from(String(12345)); //['1', '2', '3', '4', '5']
```

### 2. split 메서드를 사용하는 방법

```javascript
let strArr = String(12345).split(""); //['1', '2', '3', '4', '5']
let numArr = String(12345).split("").map(Number); //[1, 2, 3, 4, 5]
```

숫자를 문자로 변환할 때 String 생성자를 사용하는 방법 외에도 암묵적 타입 변환을 사용하는 방법도 있다.

```javascript
let arr = (12345 + "").split("").map(Number); //[1, 2, 3, 4, 5]
```

## 다른 풀이

```javascript
function solution(n) {
  return (n + "").split("").reduce((acc, cur) => acc + parseInt(cur), 0);
}
```

배열을 숫자 타입으로 바꾼 후 reduce를 사용하지 않고 reduce를 사용하면서 요소를 하나씩 숫자 타입으로 바꾼 방법이다.

💡 [숫자를 문자로 바꾸기](https://sena-22.github.io/javascript/2-type/#1-%EB%AC%B8%EC%9E%90%EC%97%B4-%ED%83%80%EC%9E%85%EC%9C%BC%EB%A1%9C-%EB%B3%80%ED%99%98) <br/>
💡 [JavaScript에서 숫자를 배열로 분할하는 방법](https://codingbeautydev.com/blog/javascript-split-number-into-array/)
{: .notice--primary}

💡 알고리즘 스터디 Recursive에서 공부한 내용 정리
{: .notice--danger}
