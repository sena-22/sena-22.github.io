---
title: "[Programmers] 3. 타겟 넘버(javascript)"
excerpt: "타겟 넘버"

categories:
  - programmers
tags:
  - [study, recursive, javascript]

toc: true
toc_sticky: true

date: 2022-12-15
last_modified_at: 2023-02-12
---

## 🤔 문제

n개의 음이 아닌 정수들을 순서를 바꾸지 않고 적절히 더하거나 빼서 타겟 넘버를 만드는 방법의 수 구하기

## 제한사항

주어지는 숫자의 개수는 2개 이상 20개 이하입니다.
각 숫자는 1 이상 50 이하인 자연수입니다.
타겟 넘버는 1 이상 1000 이하인 자연수입니다.

## 입출력 예시

| numbers     | target | return |
| ----------- | ------ | ------ |
| [1,1,1,1,1] | 3      | 5      |
| [4,1,2,1]   | 4      | 2      |

## 의사코드

1. 타겟과 일치하는 배열의 개수를 담을 변수를 선언한다.
2. dfs 함수를 만든다
3. 함수는 깊이를 나타내는 인덱스와 합계를 입력받아, 만약 배열의 길이와 인덱스가 같으면 (제일 끝까지 내려갔으면) 합계와 타겟이 일치하는지 비교한다. 만약 합계와 타겟이 일치하면 1번에서 선언한 변수에 1을 더해준다.
4. 일치하지 않으면 그냥 리턴한다.
5. 재귀함수를 사용하여 인덱스를 1씩 내려가면서 배열[인덱스] 만큼의 숫자를 더해준다. 재귀를 돌다가 깊이가 배열의 길이와 일치하면 리턴한다.
6. 리턴된 경우 그 다음줄로 내려가 배열[인덱스]만큼의 숫자를 빼준다. 이때 깊이가 다시 일치하면 아예 리턴, 일치하지 않으면 다시 5번으로 돌아가 더해준다.
7. 재귀가 모두 끝나면 1번의 변수를 리턴한다.

## 제출한 답

```javascript
function solution(numbers, target) {
  let count = 0;

  dfs(0, 0);

  function dfs(index, sum) {
    if (index === numbers.length) {
      //여기서 index는 깊이를 의미. length와 깊이가 같아질 때까지 계속 내려감
      if (sum === target) {
        count++;
      }

      return;
    }

    dfs(index + 1, sum + numbers[index]); // 5까지 내려갔다가 리턴되면서 아래 코드 실행
    dfs(index + 1, sum - numbers[index]); // 다시 내려감
  }

  return count;
}
```

`solution([1,1,1,1], 2)` 인 경우, 이런 식으로 전개가 될 것이다.
![](https://velog.velcdn.com/images/sena-22/post/280af1ba-fd2b-4e05-9f9d-1abb7a97add6/image.png)

💡 알고리즘 스터디 Recursive에서 공부한 내용 정리
{: .notice--danger}
