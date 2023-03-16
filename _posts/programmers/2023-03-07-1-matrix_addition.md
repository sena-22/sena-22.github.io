---
title: "[Programmers] 14. 행렬의 덧셈
  (javascript)"
excerpt: "행렬의 덧셈"

categories:
  - programmers
tags:
  - [study, recursive, javascript, Lv.1]

toc: true
toc_sticky: true

date: 2023-03-07
last_modified_at: 2023-03-07
---

## 🤔 문제

행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

## 제한사항

- 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

## 입출력 예시

| arr1          | arr2          | return        |
| ------------- | ------------- | ------------- |
| [[1,2],[2,3]] | [[3,4],[5,6]] | [[4,6],[7,9]] |
| [[1],[2]]     | [[3],[4]]     | [[4],[6]]     |

## 의사코드

- 행 -> 열 순서로 for문을 돌린다
- 0행 0열, 0행 1열... 순서로 arr1의 값과 arr2의 값을 더해서 arr에 push한다.
- 안쪽 for문을 순회하면서 만들어진 배열 arr을 answer에 push 해준다.

## 제출한 답

```javascript
function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let arr = [];
    for (let j = 0; j < arr1[i].length; j++) {
      arr.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(arr);
  }
  return answer;
}
```

## 다른 풀이

```javascript
function sumMatrix(A, B) {
  return A.map((arr1, idx1) => arr1.map((val, idx2) => val + B[idx1][idx2]));
}
```

💡 알고리즘 스터디 Recursive에서 공부한 내용 정리
{: .notice--danger}
