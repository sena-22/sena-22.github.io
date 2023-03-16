---
title: "[Programmers] 19. 이상한 문자 만들기
  (javascript)"
excerpt: "이상한 문자 만들기"

categories:
  - programmers
tags:
  - [study, recursive, javascript, Lv.1]

toc: true
toc_sticky: true

date: 2023-03-16
last_modified_at: 2023-03-16
---

## 🤔 문제

문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

## 제한사항

- 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
- 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

## 입출력 예시

| s                 | return            |
| ----------------- | ----------------- |
| "try hello world" | "TrY HeLlO WoRlD" |

## 의사코드

- split(' ')을 사용해서 단어를 공백 기준으로 쪼갠다.
- 각 단어를 다시 split을 이용해서 한 단어씩 쪼개고, 각 단어를 map으로 돌면서 인덱스가 짝수인 경우 대문자로, 홀수인 경우 소문자로 바꾼다.
- 문자열을 다시 단어로 합치고(`join('')`), 합친 배열을 다시 합쳐서 하나의 배열로 만든다.(`join(' ')`)

## 제출한 답

```javascript
function solution(s) {
  return s
    .split(" ") // ['try', 'hello', 'world']
    .map((i) =>
      i
        .split("") // [['t', 'r', 'y'], ['h', 'e', 'l', 'l', 'o'],['w', 'o', 'r', 'l', 'd']]
        .map((j, idx) => (idx % 2 === 0 ? j.toUpperCase() : j.toLowerCase())) // ['T', 'r', 'Y']...
        .join("")
    )
    .join(" ")
}
```

💡 알고리즘 스터디 Recursive에서 공부한 내용 정리
{: .notice--danger}
