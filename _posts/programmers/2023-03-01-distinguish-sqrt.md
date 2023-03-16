---
title: "[Programmers] 13. 정수 제곱근 판별 (javascript)"
excerpt: "정수 제곱근 판별"

categories:
  - programmers
tags:
  - [study, recursive, javascript, Lv.1]

toc: true
toc_sticky: true

date: 2023-03-01
last_modified_at: 2023-03-01
---

## 🤔 문제

임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

## 제한사항

- n은 1이상, 50000000000000 이하인 양의 정수입니다.

## 입출력 예시

| n   | return |
| --- | ------ |
| 121 | 144    |
| 3   | -1     |

## 의사코드

1. n의 제곱근을 구한다.
2. n이 정수이면 (x+1)의 제곱을 리턴한다.
3. 정수가 아니면 -1을 리턴한다.

## 제출한 답

```javascript
function solution(n) {
  const x = Math.sqrt(n);
  return Number.isInteger(x) ? (x + 1) ** 2 : -1;
}
```

💡 알고리즘 스터디 Recursive에서 공부한 내용 정리
{: .notice--danger}
