---
title: "[Programmers] 6. 평균 구하기 (javascript)"
excerpt: "평균 구하기"

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

정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

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
