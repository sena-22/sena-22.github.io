---
title: "[Programmers] 12. x만큼 간격이 있는 n개의 숫자 (javascript)"
excerpt: "x만큼 간격이 있는 n개의 숫자"

categories:
  - programmers
tags:
  - [study, recursive, javascript, Lv.1]

toc: true
toc_sticky: true

date: 2023-02-28
last_modified_at: 2023-02-28
---

## 🤔 문제

함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

## 제한사항

- x는 -10000000 이상, 10000000 이하인 정수입니다.
- n은 1000 이하인 자연수입니다.

## 입출력 예시

| x   | n   | answer       |
| --- | --- | ------------ |
| 2   | 5   | [2,4,6,8,10] |
| 4   | 3   | [4,8,12]     |
| -4  | 2   | [-4,-8]      |

## 의사코드

1. 빈 배열 생성
2. 1~n만큼 순회를 돌면서 arr에 x\*i를 push
3. 배열 리턴

## 제출한 답

```javascript
function solution(x, n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(x * i);
  }
  return arr;
}
```

💡 알고리즘 스터디 Recursive에서 공부한 내용 정리
{: .notice--danger}
