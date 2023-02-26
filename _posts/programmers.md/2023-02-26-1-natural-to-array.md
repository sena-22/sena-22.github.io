---
title: "[Programmers] 10. 자연수 뒤집어 배열로 만들기 (javascript)"
excerpt: "자연수 뒤집어 배열로 만들기"

categories:
  - programmers
tags:
  - [study, recursive, javascript, Lv.1]

toc: true
toc_sticky: true

date: 2023-02-26
last_modified_at: 2023-02-26
---

## 🤔 문제

자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

## 제한사항

- n은 10,000,000,000이하인 자연수입니다.

## 입출력 예시

| n     | return      |
| ----- | ----------- |
| 12345 | [5,4,3,2,1] |

## 의사코드

1. 빈 배열 생성
2. n을 배열로 만들기
3. 배열의 앞쪽부터 하나씩 빼서 새로운 배열의 맨 앞에 넣기

## 제출한 답

```javascript
function solution(n) {
  const arr = [];
  n = (n + "").split("").map((el) => arr.unshift(Number(el)));
  return arr;
}
```

## 예전 풀이

```javascript
function solution(n) {
  let arr = [];
  n = String(n).split("");
  for (let i = 0; i < n.length; i++) {
    arr.unshift(Number(n[i]));
  }
  return arr;
}
```

💡 알고리즘 스터디 Recursive에서 공부한 내용 정리
{: .notice--danger}
