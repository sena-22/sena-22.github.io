---
title: "[Programmers] 7. 짝수와 홀수 (javascript)"
excerpt: "짝수와 홀수"

categories:
  - programmers
tags:
  - [study, recursive, javascript, Lv.1]

toc: true
toc_sticky: true

date: 2023-02-20
last_modified_at: 2023-02-20
---

## 🤔 문제

정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

## 제한사항

- num은 int 범위의 정수입니다.
- 0은 짝수입니다.

## 입출력 예시

| maps | answer |
| ---- | ------ |
| 3    | "Odd"  |
| 4    | "Even" |

## 의사코드

> 3항 연산자를 사용해서 나머지가 0이면 짝수, 0이 아니면 홀수를 리턴한다.

## 제출한 답

```javascript
function solution(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
```

💡 알고리즘 스터디 Recursive에서 공부한 내용 정리
{: .notice--danger}
