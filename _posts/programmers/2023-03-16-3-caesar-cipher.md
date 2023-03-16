---
title: "[Programmers] 21. 시저 암호
  (javascript)"
excerpt: "시저 암호"

categories:
  - programmers
tags:
  - [study, recursive, javascript, Lv.1]

toc: true
toc_sticky: true

date: 2023-03-16
last_modified_at: 2023-03-17
---

## 🤔 문제

어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

## 제한사항

- 공백은 아무리 밀어도 공백입니다.
- s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
- s의 길이는 8000이하입니다.
- n은 1 이상, 25이하인 자연수입니다.

## 입출력 예시

| s       | n   | result  |
| ------- | --- | ------- |
| "AB"    | 1   | "BC"    |
| "z"     | 1   | "a"     |
| "a B z" | 4   | "e F d" |

## 의사코드

- 문자열을 모두 유니코드로 바꿔준다. `String.prototype.charCodeAt()` 메서드를 사용하면 된다.
- 유니코드로 변환된 문자열을 순환하면서 주어진 숫자(n)만큼 더해준다.
- 공백인 경우 아무리 밀어도 공백이기 때문에 그대로 반환한다. 공백은 32이다.
- 유니코드에 알파벳만 있는 것은 아니다. 예를 들어 '!'의 경우 33이다.
- 따라서 알파벳 범위를 벗어난 경우, 즉 z를 넘어간 경우 다시 범위로 돌려주기 위해 26을 뺀다.
  <img width="261" alt="스크린샷 2023-03-17 오전 12 54 10" src="https://user-images.githubusercontent.com/110877564/225677281-09a61940-0fba-4037-a1a4-c0c6352c136c.png">
- 모든 유니코드를 다 밀면 다시 문자열로 돌려줘야 한다. `String.fromCharCode()` 메서드를 사용하면 된다.
- `.join('')`으로 문자열을 다시 붙여준다.

## 제출한 답

```javascript
function solution(s, n) {
  let charCode = [...s].map((el) => {
    let cur = el.charCodeAt(el)
    if (cur === 32) return cur
    if ((cur >= 97 && cur + n > 122) || (cur < 97 && cur + n > 90))
      return cur - 26 + n
    else return cur + n
  })
  return charCode.map((el) => String.fromCharCode(el)).join("")
}
```

- 알파벳의 유니코드를 외우고 있지 않은 이상 코드에서 각각 구하는 방식으로 푸는 게 맞나 싶다. 알파벳을 전부 변수에 할당해서 푸는 경우도 있는데 숫자가 한정되어 있어서 이 방식도 있긴 하다.
- 두 번째 if문은 (1)소문자인데 밀면 소문자를 벗어나거나, (2) 대문자인데 밀면 대문자를 벗어나거나 둘 중에 하나를 충족할 경우 실행된다.

💡 알고리즘 스터디 Recursive에서 공부한 내용 정리
{: .notice--danger}
