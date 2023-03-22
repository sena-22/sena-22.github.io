---
title: "[Programmers] 28. 크기가 작은 부분 문자열
  (javascript)"
excerpt: "크기가 작은 부분 문자열"

categories:
  - programmers
tags:
  - [study, recursive, javascript, Lv.1]

toc: true
toc_sticky: true

date: 2023-03-22
last_modified_at: 2023-03-22
---

## 🤔 문제

숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서, 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.

예를 들어, t="3141592"이고 p="271" 인 경우, t의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다. 이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개 입니다.

## 제한 조건

- 1 ≤ p의 길이 ≤ 18
- p의 길이 ≤ t의 길이 ≤ 10,000
- t와 p는 숫자로만 이루어진 문자열이며, 0으로 시작하지 않습니다.

## 입출력 예시

| t              | p     | result |
| -------------- | ----- | ------ |
| "3141592"      | "271" | 2      |
| "500220839878" | "7"   | 8      |

## 의사코드

- 이중으로 for문을 돌려서 두 개의 수를 더한 값을 구한다.
- 빈 배열에 넣는다.
- 만약 이미 배열에 있는 숫자면 넣지 않는다.
- 모든 숫자를 담은 배열을 정렬한 뒤 리턴한다.

## 제출한 답

```javascript
const solution = (t, p) => {
  let count = 0
  let pLeng = p.length
  for (let i = 0; i < t.length - pLeng + 1; i++) {
    let part = t.slice(i, i + pLeng)
    if (part <= p) count++
  }
  return count
}
```

- 많이 사용되지 않는 변수는 선언을 하지 않고 바로 사용하도록 고쳐보았다.

```javascript
const solution = (t, p) => {
  let count = 0
  for (let i = 0; i <= t.length - p.length; i++) {
    if (t.slice(i, i + p.length) <= p) count++
  }
  return count
}
```

💡 알고리즘 스터디 Recursive에서 공부한 내용 정리
{: .notice--danger}
