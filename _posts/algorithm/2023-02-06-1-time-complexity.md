---
title: "[Recursive] 01. 시간 복잡도(Time Complexity)"
excerpt: "시간 복잡도"

categories:
  - algorithm
tags:
  - [study, recursive, time complexity]

toc: true
toc_sticky: true

date: 2022-11-22
last_modified_at: 2023-02-06
---

## 1. 시간 복잡도란?

<b>알고리즘의 실행 시간</b>을 표현하는 것을 말한다.

여기서 실행 시간이란 통상적으로 쓰이는 시분초 개념이 아니라, 함수나 알고리즘 수행에 필요한 스텝 수를 의미한다. (실행 환경마다 성능이 다르기 때문에 시간을 초(seconds)나 밀리초(milliseconds)로 표현하면 편차가 커질 수 있기 때문이라고 한다.)
시간 복잡도는 보통 **점근 표기법**으로 표현한다.

**점근적 분석(asymptotic analysis)** <br />
임의의 함수가 N → ♾️ 일 때 어떤 단순한 형태에 근접해지는지 분석하는 것을 의미한다(점근이란 점점 가까워진다는 의미이다)
쉽게 생각하면 입력의 크기가 충분히 큰 경우에 대한 분석을 의미한다. 크기가 작은 문제에서는 비효율적인 알고리즘을 사용해도 무방하기 때문이다.
{: .notice--primary}

**점근 표기법** <br/>
점근적 분석을 통해 실행시간을 단순하게 표현한 표기법
{: .notice--primary}

## 2. 점근 표기법의 유형

시간 복잡도를 표현하는 점근 표기법은 크게 세 종류로 나눌 수 있다.

### Big-Ω 표기법

최선일 때의 연산 횟수를 나타내며, <mark style='background-color: #ffdce0'>점근적 하한선(Asymptotic lower bound)</mark>을 의미한다.

### Big Θ-표기법

보통일 때의 연산 횟수를 나타낸다. <mark style='background-color: #ffdce0'>점근적 상한과 하한의 교집합(Asymptotic tighter bound)</mark>이라고 한다.

### Big-O 표기법

최악일 때의 연산 횟수를 나타낸 것으로, <mark style='background-color: #ffdce0'>점근적 상한선(Asymptotic upper bound)</mark>을 의미한다. 최소한 보장되는 성능을 표기하기 때문에 일반적으로 많이 사용하며, 다양한 케이스가 존재하는 코딩 테스트에서도 Big-O 표기법을 기준으로 실행 시간을 계산하는 것이 좋다.

## 3. Big-O 표기법의 특징

- 상수, 계수는 제외한다.

  - for문이 1개일 때와 3개일 때 연산 횟수는 N과 3N으로 3배 차이가 나지만 코딩 테스트에서 상수를 무시하기 때문에 시간 복잡도는 `O(n)`이다.

- 가장 많이 중첩된 반복문의 수행 횟수가 시간 복잡도의 기준이 된다.

  - 이중 for문이 있을 경우 일반 for문이 10개가 있어도 이중 for문이 시간 복잡도의 기준이 되기 때문에 O(n^2)이 된다.

## 4. Big-O 표기법의 종류

**🔖 실행 속도** <br/>
O(1) < O(log N) < O(N) < O(N log N) < O(n^2) < O(2^N)
{: .notice--primary}

![](https://velog.velcdn.com/images/sena-22/post/c7e2c3ae-2046-475a-a694-e3358ec335a7/image.png)[출처](https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/)

### 1. O(1) (Best)

- 일정한 복잡도를 가지며 입력값이 증가해도 시간이 늘어나지 않는다
- Stack의 push,pop, 배열의 인덱스를 찾을 때

### 2. O(log n) (Good)

- 로그 복잡도. O(1) 다음으로 빠른 시간 복잡도를 가진다(시간이 덜 걸린다는 의미..). 매번 입력값이 절반으로 줄어들 때 로그 복잡도를 가진다고 한다.
- 이진탐색트리

### 3. O(n) (Fair)

- 선형 복잡도. 입력값이 증가하면 시간도 같은 비율로 증가한다.
- for 문

### 4. O(n log n) (Bad)

- O(N)의 알고리즘과 O(log N)의 알고리즘이 중첩된 형태
- 퀵 / 병합 / 힙

### 5. O(n^2) & O(2^n) (Worst)

- O(n^2) : 2차 복잡도. 입력값이 증가하면서 시간이 n^2의 비율로 증가한다. (이중 for문)
- O(2^n) : 기하급수적 복잡도. (피보나치 수를 구하는 알고리즘)

## 데이터 크기에 따라 예상되는 시간 복잡도

| 데이터 크기 제한 | 예상되는시간 복잡도 |
| :--------------- | :-----------------: |
| n ≤ 1,000,000    |  O(n) or O (logn)   |
| n ≤ 10,000       |       O(n^2)        |
| n ≤ 500          |       O(n^3)        |

💡 알고리즘 스터디 Recursive를 진행하며 공부한 내용 정리
{: .notice--danger}
