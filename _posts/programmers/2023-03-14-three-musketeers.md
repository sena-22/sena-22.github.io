---
title: "[Programmers] 17. 삼총사
  (javascript)"
excerpt: "삼총사"

categories:
  - programmers
tags:
  - [study, recursive, javascript, Lv.1]

toc: true
toc_sticky: true

date: 2023-03-14
last_modified_at: 2023-03-14
---

## 🤔 문제

한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다. 이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다. 예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때, 첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로 세 학생은 삼총사입니다. 또한, 두 번째, 네 번째, 다섯 번째 학생의 정수 번호를 더해도 0이므로 세 학생도 삼총사입니다. 따라서 이 경우 한국중학교에서는 두 가지 방법으로 삼총사를 만들 수 있습니다.

한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때, 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.

## 제한사항

- 3 ≤ number의 길이 ≤ 13
- -1,000 ≤ number의 각 원소 ≤ 1,000
- 서로 다른 학생의 정수 번호가 같을 수 있습니다.

## 입출력 예시

| number                   | result |
| ------------------------ | ------ |
| [-2, 3, 0, 2, -5]        | 2      |
| [-3, -2, -1, 0, 1, 2, 3] | 5      |
| [-1, 1, -1, 1]           | 0      |

## 의사코드

- 3중 for문을 돌려서 학생을 한 명씩 선택한 후 세 명의 번호의 합이 0이 되면 answer를 1 더해준다.
- 배열의 끝에서 3명을 고를 경우 안쪽 for문 외에는 배열 끝까지 돌 필요가 없으므로 외부 for문은 각각 길이에서 두 명, 한 명씩 뺀 숫자만큼만 반복문을 돌린다.

## 제출한 답

```javascript
function solution(number) {
  let answer = 0
  for (let n = 0; n < number.length - 2; n++) {
    for (let i = 1; i < number.length - 1; i++) {
      for (let j = i + 1; j < number.length; j++) {
        if (number[n] + number[n + i] + number[n + j] === 0) {
          answer += 1
        }
      }
    }
  }
  return answer
}
```

💡 알고리즘 스터디 Recursive에서 공부한 내용 정리
{: .notice--danger}
