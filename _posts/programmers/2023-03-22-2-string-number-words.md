---
title: "[Programmers] 25. 숫자 문자열과 영단어
  (javascript)"
excerpt: "숫자 문자열과 영단어"

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

네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

- 1478 → "one4seveneight"
- 234567 → "23four5six7"
- 10203 → "1zerotwozero3"
- 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.
|숫자 |영단어|
|----|---|
|0 |zero|
|1 |one|
|2 |two|
|3 |three|
|4 |four|
|5 |five|
|6 |six|
|7 |seven|
|8 |eight|
|9 |nine|

## 제한 조건

- 1 ≤ s의 길이 ≤ 50
- s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
- return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.

## 입출력 예시

| s                | result |
| ---------------- | ------ |
| "one4seveneight" | 1478   |
| "23four5six7"    | 234567 |

## 의사코드

- words라는 변수를 선언해서 인덱스를 숫자처럼 사용할 수 있게 만든다.
- words를 순회하면서 해당 단어로 나눈 후에 그 자리에 해당 인덱스를 넣는다

```javascript
"abc".split("a") // ['', 'bc']
"abc".split("a").join(1) // '1bc'
```

- 숫자로 출력하기 위해 타입을 숫자로 바꾼다.

## 제출한 답

```javascript
const solution = (s) => {
  let words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ]

  for (let i = 0; i < words.length; i++) {
    s = s.split(words[i]).join(i)
  }

  return parseInt(s)
}
```

💡 알고리즘 스터디 Recursive에서 공부한 내용 정리
{: .notice--danger}
