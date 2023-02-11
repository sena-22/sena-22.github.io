---
title: "[Programmers] 1. 같은 숫자는 싫어 (javascript)"
excerpt: "같은 숫자는 싫어"

categories:
  - programmers
tags:
  - [study, recursive, javascript]

toc: true
toc_sticky: true

date: 2022-11-25
last_modified_at: 2023-02-12
---

## 🤔 문제

주어진 배열에서 연속으로 나오는 숫자를 하나만 남기고 제거하고 남은 수들을 리턴하는 함수 만들기

## 제한사항

배열 arr의 크기 : 1,000,000 이하의 자연수
배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

## 입출력 예시

| 입력            | 출력      |
| --------------- | --------- |
| [1,1,3,3,0,1,1] | [1,3,0,1] |
| [4,4,4,3,3]     | [4,3]     |

## 의사코드

>

1. 빈 배열을 선언해준다.
2. 주어진 배열을 순회하면서 => `for` 문 사용
3. 배열의 `i`번째 수와 `i+1`번째 수를 비교해서 같지 않은 경우에만 빈 배열에 `push` 해준다.
4. 새로운 배열을 리턴한다.

## 제출한 답

```javascript
function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) answer.push(arr[i]);
  }
  return answer;
}
```

## 다른 풀이

```javascript
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
```

[문제](https://school.programmers.co.kr/learn/courses/30/lessons/12906)
{: .notice--primary}

💡 알고리즘 스터디 Recursive에서 공부한 내용 정리
{: .notice--danger}
