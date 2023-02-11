---
title: "[Recursive] Stack과 Queue"
excerpt: "stack & queue"

categories:
  - algorithm
tags:
  - [study, recursive, stack, queue]

toc: true
toc_sticky: true

date: 2022-11-22
last_modified_at: 2023-02-11
---

# Stack

- 입력과 출력이 하나의 방향에서 일어나는 **후입선출(LIFO)**로 이루어지는 자료구조를 말한다. 즉 가장 최근에 넣은 데이터가 가장 먼저 나온다.
- Stack에 데이터를 넣는 것을 `PUSH`, 데이터를 꺼내는 것을 `POP`이라고 한다.
- 데이터는 하나씩만 넣고 뺄 수 있다.

## Stack Overflow와 Stack Underflow

- `Stack Overflow` : 스택이 가득 차 있는데 데이터를 넣으려고 할 때 발생한다.
- `Stack Underflow` : 빈 스택에서 데이터를 꺼내려고 하는 경우에 발생한다.
- 큐에서도 같은 경우 오버플로와 언더플로가 발생한다.

## Stack의 활용 예시

스택의 특징인  후입선출(LIFO)을 활용하여 여러 분야에서 활용할 수 있다.

- 웹 브라우저 방문기록 (뒤로 가기) : 가장 나중에 열린 페이지부터 다시 보여준다.
- 역순 문자열 만들기 : 가장 나중에 입력된 문자부터 출력한다.
- 실행 취소 (undo) : 가장 나중에 실행된 것부터 실행을 취소한다.
- 깊이 우선 탐색(DFS) : 후보 중에 가장 늦게 추가된 것부터 탐색하는 방법
- 백트래킹 종류의 코딩 테스트

💡 **백트래킹(backtracking)**이란? : 해를 찾는 도중 해가 아니어서 막히면, 되돌아가서 다시 해를 찾아가는 기법
{: .notice--primary}

### 예제

💡 [스택으로 수열 만들기](https://www.acmicpc.net/problem/1874)
{: .notice--primary}

# Queue

- 입력과 출력이 반대 방향에서 일어나는 **선입선출(FIFO)**로 이루어지는 자료구조를 말한다.
- Queue에 데이터를 넣는 것을 `enqueue`, 데이터를 꺼내는 것을 `dequeue`라고 한다.
- 스택과 마찬가지로 데이터는 하나씩만 넣고 뺄 수 있다.

## Queue의 활용 예시

Queue는 주로 데이터가 입력된 시간 순서대로 처리해야 할 필요가 있는 상황에 이용한다.

- 우선순위가 같은 작업 예약 (프린터의 인쇄 대기열)
- 선입선출이 필요한 대기열 : 은행 업무, 티켓 카운터, 콜센터 고객 대기시간…
- 너비 우선 탐색(BFS, Breadth-First Search) 구현 : 후보 정점 중에 가장 먼저 후보에 추가된 것부터 선택한다.
- 캐시 구현, 버퍼, 실시간 비디오 스트리밍: 스트리밍에서 다운로드 된 데이터가 비디오를 재생하기에 충분하지 않으면 큐에 순서대로 모아 두었다가 충분한 양이 되면 비디오를 복원해서 재생함

### 예제

💡 [카드2](https://www.acmicpc.net/problem/2164)
{: .notice--primary}

`Queue`는 자바스크립트의 내장 메서드인 `shift()`로도 비슷한 기능을 수행할 수 있다. `shift()` 메서드는 배열의 가장 앞의 원소부터 제거하기 때문이다. 하지만 이 경우 나머지 배열의 원소들을 매번 한 칸씩 앞으로 당겨주는 재정렬을 수행하기 때문에 O(n)의 시간 복잡도를 가지게 되어 위 예제같은 경우에는 적합하지 않다. 따라서 JS의 Class를 이용하여 `Linked List`를 활용한`Queue`를 구현하여야 한다.

### 참고

[JS로 구현하는 큐 (Queue)](https://velog.io/@longroadhome/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-JS%EB%A1%9C-%EA%B5%AC%ED%98%84%ED%95%98%EB%8A%94-.%ED%81%90-Queue)
[Queue 구현 및 시간 복잡도](https://ghost4551.tistory.com/133)
{: .notice--primary}
