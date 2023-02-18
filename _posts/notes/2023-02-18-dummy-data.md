---
title: "더미 데이터 만들기"
excerpt: "dummy, lorem picsum, chance, luxon"

categories:
  - notes
tags:
  - [dummy]

toc: true
toc_sticky: true

date: 2023-02-18
last_modified_at: 2023-02-18
---

## dummy image

[Lorem Picsum](https://picsum.photos/)에서 무료 이미지 사용이 가능하다.

### 랜덤 이미지

```javascript
https://picsum.photos/${width}/${height}
```

### 특정 이미지

```javascript
https://picsum.photos/id/{image}/${width}/${height}
```

`{image}`에 넣을 이미지 목록은 [이곳](https://picsum.photos/images)에서 확인할 수 있다.

### 정적 이미지

같은 이미지를 불러오고 싶을 땐 `/seed/{seed}`를 이용한다. 같은 {seed}를 사용한 경우 같은 이미지를 불러온다.

```javascript
https://picsum.photos/seed/{지정한 글자}/${width}/${height}
```

### grayscale & blur

```javascript

//흑백
https://picsum.photos/${width}/${height}?grayscale

//블러
https://picsum.photos/${width}/${height}?blur

// 블러 정도 (1~10이고 숫자가 높을수록 흐리다, 기본값 5)
https://picsum.photos/${width}/${height}?blur=2

//혼합해서 사용할 수 있다.
https://picsum.photos/id/870/${width}/${height}?grayscale&blur=2
```

## change

chance는 가짜 데이터를 제공해준다.

[change 공식 문서](https://chancejs.com/index.html)
{: .notice--primary}

### 설치

```javascript
npm i chance
//typescript에서 사용할 때는 추가로 설치
npm -i -D @types/chance
```

### 사용

```typescript
import Chance from "chance";
const chance = new Chance();

//필요한 데이터를 지정해주면 된다
const randomAge = () => chance.age();
const randomTitle = (words = 5) => chance.senten({ words });
```

## luxon

luxon 시간이나 날짜 형식을 지정할 수 있는 라이브러리이다.

[luxon 공식 문서](https://moment.github.io/luxon)
{: .notice--primary}

### 설치

```javascript
npm i luxon
//typescript에서 사용할 때는 추가로 설치
npm -i -D @types/luxon
```

### 사용

```typescript
//DateTime은
import { DateTime } from "luxon";

const makeRandomPastDate = () => {
  const value = new Date().valueOf();
  const n = 1000000;
  return new Date(value - Math.floor(Math.random() * n * n));
};
```
