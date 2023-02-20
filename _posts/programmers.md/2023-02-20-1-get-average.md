---
title: "[Programmers] 6. 평균 구기 (javascript)"
excerpt: "게임 맵 최단거리"

categories:
  - programmers
tags:
  - [study, recursive, javascript]

toc: true
toc_sticky: true

date: 2023-02-20
last_modified_at: 2023-02-20
---

## 🤔 문제

상대 팀 진영에 최대한 빨리 도착하기 위해 지나가야 하는 칸의 개수의 최솟값.
상대 팀 진영에 도착할 수 없을 때는 -1을 return 한다.

## 제한사항

- arr은 길이 1 이상, 100 이하인 배열입니다.
- arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

## 입출력 예시

| maps      | answer |
| --------- | ------ |
| [1,2,3,4] | 2.5    |
| [5,5]     | 5      |

## 의사코드

> reduce 메서드를 사용하여 모든 값을 더한다
> 합계를 배열의 길이로 나눈다

## 제출한 답

```javascript
function solution(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}
```

💡 알고리즘 스터디 Recursive에서 공부한 내용 정리
{: .notice--danger}
