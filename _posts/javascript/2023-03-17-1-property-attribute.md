---
title: "[Deep Dive] 12. 프로퍼티 어트리뷰트"
excerpt: "property attribute"

categories:
  - javascript
tags:
  - [javascript, property attribute]

toc: true
toc_sticky: true

date: 2023-03-17
last_modified_at: 2023-03-17
---

# 1. 내부 슬롯, 내부 메서드

## 내부 슬롯, 내부 메서드?

- 자바스크립트 엔진의 내부 로직으로, `이중 대괄호([[ ]])`로 감싼 것들을 말한다.
- 보통은 접근이 불가능하다. 하지만 일부의 내부 슬롯과 메서드들은 간접적으로 접근할 수 있다.
- 예를 들어, `[[Prototype]]` 내부 슬롯의 경우, `__proto__`로 접근이 가능하다.

# 2. 프로퍼티 어트리뷰트

- JS 엔진이 관리하는 meta-property를 말한다.
- 프로퍼티 생성 시 자동으로 정의되며, 프로퍼티의 상태를 나타낸다.
- `Object.getOwnPropertyDescriptor` 메서드로 간접적으로 확인이 가능하다.

### Object.getOwnPropertyDescriptor(객체의 참조, '프로퍼티 키')

![](https://velog.velcdn.com/images/sena-22/post/fdcc88ac-48f1-43bf-9866-16deb4450a85/image.jpeg)

-`Object.getOwnPropertyDescriptor`는 하나의 프로퍼티에 대해서만 프로퍼티 디스크립터 객체를 반환하지만, `Object.getOwnPropertyDescriptors`를 사용하면 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터를 반환한다.

> `Object.getOwnPropertyDescriptor` 메서드를 사용하면 디스크립터 객체를 반환하는데, 이 객체는 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 제공한다.

# 3. 데이터 프로퍼티와 접근자 프로퍼티

## 데이터 프로퍼티

- 키와 값으로 구성된 일반 프로퍼티

### 데이터 프로퍼티의 프로퍼티 어트리뷰트

1.  [[Value]]

- 프로퍼티 키를 통해 값에 접근했을 때 반환되는 값

2. [[Writable]]

- 프로퍼티 값의 변경 여부를 나타낸다(boolean)
- `false`인 경우, 읽기 전용이다.

3. [[Enumerable]]

- 프로퍼티의 열거 가능 여부를 나타낸다
- `false`인 경우, for...in 문이나 Object.keys 등으로 열거할 수 없다.

4. [[Configurable]]

- 프로퍼티의 재정의 가능 여부
- `false`인 경우 프로퍼티 삭제, 프로퍼티 어트리뷰트 값을 변경할 수 없다.
  ([[Writable]]이 `true`인 경우 `Value` 변경, [[Writable]]을 `false`로 변경할 수는 있다.

## 접근자 프로퍼티

- 접근자 함수(다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출)로 구성된 프로퍼티

### 접근자 프로퍼티의 프로퍼티 어트리뷰트

1. [[GEt]]

- 데이터 프로퍼티의 값을 읽을 때 호출되는 접근자 함수
- 접근자 프로퍼티 키로 프로퍼티 값에 접근하면 getter 함수가 호출되고, 그 결과가 프로퍼티 값으로 반환된다.

2. [[Set]]

- 데이터 프로퍼티의 값을 저장할 때 호출되는 접근자 함수
- 접근자 프로퍼티 키로 프로퍼티 값을 저장하면, setter 함수가 호출되고, 그 결과가 프로퍼티 값으로 저장된다.

3. [[Enumerable]]
4. [[Configurable]]

- 3, 4번은 데이터 프로퍼티 어트리뷰트와 동일하다.

deep dive 16장 참고
{: .notice--danger}
