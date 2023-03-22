---
title: "[Programmers] 24. 문자열 내 마음대로 정렬하기
  (javascript)"
excerpt: "문자열 내 마음대로 정렬하기"

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

문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

## 제한 조건

- strings는 길이 1 이상, 50이하인 배열입니다.
- strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
- strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
- 모든 strings의 원소의 길이는 n보다 큽니다.
- 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

## 입출력 예시

| strings                 | n   | retrun                  |
| ----------------------- | --- | ----------------------- |
| ["sun", "bed", "car"]   | 1   | ["car", "bed", "sun"]   |
| ["abce", "abcd", "cdx"] | 2   | ["abcd", "abce", "cdx"] |

## 의사코드

- 주어진 배열을 돌면서 리스트를 만든다. 리스트는 인덱스와 값을 키로 가진 객체들로 이루어진 배열이다.
- 리스트를 정렬하는데 n번째 문자가 같은 경우, 전체를 비교하고, 다른 경우 n번째 문자를 기준으로 배열한다.
- 리스트에서 값만 추출해서 출력한다.

## 제출한 답

```javascript
const solution = (strings, n) => {
  let list = strings.map((el, idx) => ({ idx: idx, val: el }))
  list.sort((a, b) => {
    if (a.val[n] === b.val[n]) return a.val > b.val ? 1 : -1
    return a.val[n] > b.val[n] ? 1 : -1
  })
  return list.map((el) => el.val)
}
```

스터디 중에 깨달았는데 idx를 사용하지 않아서 굳이 객체로 만들지 않아도 해결이 가능했다.

```javascript
const solution = (strings, n) => {
  return strings.sort((a, b) => {
    if (a[n] === b[n]) return a > b ? 1 : -1
    return a[n] > b[n] ? 1 : -1
  })
}
```

💡 알고리즘 스터디 Recursive에서 공부한 내용 정리
{: .notice--danger}
