---
title: "[Programmers] 18. 삼진법 뒤집기
  (javascript)"
excerpt: "삼진법 뒤집기"

categories:
  - programmers
tags:
  - [study, recursive, javascript, Lv.1]

toc: true
toc_sticky: true

date: 2023-03-15
last_modified_at: 2023-03-15
---

## 🤔 문제

자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

## 제한사항

- n은 1 이상 100,000,000 이하인 자연수입니다.

## 입출력 예시

| n   | result |
| --- | ------ |
| 45  | 7      |
| 2   | 229    |

## 의사코드

- toString()에 매개변수를 넣을 경우 매개변수에 넣은 진수로 변환이 가능하다
- parseInt()의 두 번째 매개변수는 string의 진수를 나타낸다.

## 제출한 답

```javascript
const solution = (n) => parseInt([...n.toString(3)].reverse().join(""), 3)
```

[Object.prototype.toString()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)

💡 알고리즘 스터디 Recursive에서 공부한 내용 정리
{: .notice--danger}
