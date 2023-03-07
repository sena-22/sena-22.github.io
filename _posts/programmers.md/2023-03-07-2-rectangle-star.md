---
title: "[Programmers] 15. 직사각형 별찍기
  (javascript)"
excerpt: "직사각형 별찍기"

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

이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(\*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

## 제한사항

- n과 m은 각각 1000 이하인 자연수입니다.

## 입출력 예시

입력

```javascript
5 3
```

출력

```javascript
*****
*****
*****
```

## 의사코드

- 행 개수만큼 별을 추가한다
- 행의 마지막이면 스페이스를 추가한다
- 열 개수만큼 반복한다

## 제출한 답

```javascript
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]); //a : 행, b : 열

  const star = "*";
  let answer = "";

  for (let i = 0; i < b; i++) {
    let line = "";

    for (let i = 0; i < a; i++) {
      i === a - 1 ? (line += star + "\n") : (line += star);
    }
    answer += line;
  }

  console.log(answer);
});
```

## 다른 풀이

- 행 길이만큼 별을 찍은 문자열을 row에 할당한다.(`*****`)
- 열 길이만큼 row를 반복한다.

```javascript
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  const row = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});
```

💡 알고리즘 스터디 Recursive에서 공부한 내용 정리
{: .notice--danger}
