---
title: "[typescript] interface"
excerpt: "interface"

categories:
  - typescript
tags:
  - [typescript, interface]

toc: true
toc_sticky: true

date: 2023-02-21
last_modified_at: 2023-02-21
---

**인터페이스**는 객체의 타입을 정의하기 위해 사용된다.

### 인터페이스 정의하기

```typescript
interface Character {
  name: string;
  age: number;
}
```

### 선택적 프로퍼티(Optional Properties) 사용하기

- 프로퍼티가 필수 사항이 아닐 때에는 `?`를 붙여 표시한다.

```typescript
interface Character {
  name: string;
  age: number;
  height?: string; //키를 Optional Properties로 처리
}

let character: Character = {
  name: "Jack",
  age: 20,
  //height가 없어도 오류가 나지 않는다
};
```

### 읽기 전용 프로퍼티 사용하기

- 프로퍼티가 처음 생성될 때만 수정 가능하게 만들고 싶을 때에는 `readonly`를 앞에 붙여주면 된다.

```typescript
interface Character {
  name: string;
  age: number;
  readonly birthYear: number; //생성 이후 수정 불가능
}

//height가 없어도 오류가 나지 않는다
let character: Character = {
  name: "Jack",
  age: 20,
  birthYear: 2000,
};

character.birthYear = 1999; //readonly여서 에러가 발생한다.
```

### 문자열 인덱스 서명(string index signatuer) 추가하기

비슷한 타입의 프로퍼티를 여러 개 만들고 싶을 때는 `[키 이름:타입]:타입` 처럼 만들면 된다.

```typescript
interface Character {
  name: string;
  age: number;
  [stat: string]: number;
}

let character: Character = {
  name: "Jack",
  age: 20,
  HP: 100,
  MP: 200,
};
```

위의 예시에서 stat 종류를 제한하고 싶을 때에는 <mark style='background-color: #ffdce0'>문자열 리터럴 타입(String Literal Types)</mark>을 추가하면 된다.

```typescript
type Stat = "HP" | "MP" | "SP"

interface Character {
  ...
  [stat: string]: Stat;
}
```

### 참고

[Typescript Cheat Sheet Interface](https://www.typescriptlang.org/static/TypeScript%20Interfaces-34f1ad12132fb463bd1dfe5b85c5b2e6.png) <br/>
[Typescript handbook Interface](https://typescript-kr.github.io/pages/interfaces.html) <br/>
[poiemaweb Interface](https://poiemaweb.com/typescript-interface)
{: .notice--primary}
