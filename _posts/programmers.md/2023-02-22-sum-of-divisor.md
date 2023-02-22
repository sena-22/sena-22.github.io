---
title: "[Programmers] 8. 약수의 합 (javascript)
excerpt: "약수의 합"

categories:
  - programmers
tags:
  - [study, recursive, javascript, Lv.1]

toc: true
toc_sticky: true

date: 2023-02-22
last_modified_at: 2023-02-22
---

## 🤔 문제

정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

## 제한사항

- n은 0 이상 3000이하인 정수입니다

## 입출력 예시

| maps | answer |
| ---- | ------ |
| 12   | 28     |
| 5    | 6      |

## 의사코드

> 해당 수를 나눈 나머지가 0이 되는 숫자가 약수
> 1부터 n까지 1씩 증가시키면서 n을 해당 수로 나눈 나머지가 0일 때만 더해준다.
> 더한 결과를 리턴한다.

## 제출한 답

```javascript
function solution(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) sum += i;
  }

  return sum;
}
```

💡 알고리즘 스터디 Recursive에서 공부한 내용 정리
{: .notice--danger}
