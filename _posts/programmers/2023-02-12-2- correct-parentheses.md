---
title: "[Programmers] 2. 올바른 괄호(javascript)"
excerpt: "올바른 괄호"

categories:
  - programmers
tags:
  - [study, recursive, javascript]

toc: true
toc_sticky: true

date: 2022-11-25
last_modified_at: 2023-02-12
---

## 🤔 문제

주어진 문자열이 올바른 괄호로 이루어져있는지 여부를 리턴

> 올바른 괄호란?

- 열림 괄호(`(`)가 없이 닫힌 괄호(`)`)가 나오면 올바르지 않은 괄호
- 열린 괄호는 반드시 짝지어서 닫혀야 함

## 제한사항

문자열 s의 길이 : 100,000 이하의 자연수
문자열 s는 `(` 또는 `)` 로만 이루어져 있습니다.

## 입출력 예시

| 입력   | 출력  |
| ------ | ----- |
| "()()" | true  |
| ")()(" | false |

## 의사코드

1. 만약 배열의 첫번째 요소가 닫힘 괄호이면 => `false` 리턴
2. `open`,`close` 변수 선언(초기값 0)
3. 주어진 문자열의 길이만큼 반복문을 돌리면서
4. 배열의 `i` 번째 요소가 열림 괄호이면 `open`에 1을 더해주고,
5. 아니라면 `close`에 1을 더해준다
6. 만약 `open`의 개수보다 `close`의 개수가 많다면 열리지 않았는데 닫힌 것이므로 `false`를 리턴한다
7. 반복이 끝나고 `open`과 `close`가 같다면 `true` 리턴, 아니라면 `false`를 리턴한다.

## 제출한 답

```javascript
function solution(s) {
  if (s[0] === ")") return false;

  let open = 0;
  let close = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? open++ : close++;
    if (open < close) return false;
  }
  if (open === close) return true;
  return false;
}
```

## 다른 풀이

변수를 count 하나만 선언하고 `(` 일때 더해주고 `)`일때 빼주는 풀이도 있다. 이 경우 중간에 count가 음수가 될 경우 `false`를 리턴해주는 방식으로 풀면 된다.

[문제](https://school.programmers.co.kr/learn/courses/30/lessons/12909)
{: .notice--primary}

💡 알고리즘 스터디 Recursive에서 공부한 내용 정리
{: .notice--danger}
