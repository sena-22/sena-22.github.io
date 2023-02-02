---
title: "[Main Project] react-date-range 사용하기"
excerpt: "달력 라이브러리"

categories:
  - main project
tags:
  - [project, codestates, calendar]

toc: true
toc_sticky: true

date: 2023-02-02
last_modified_at: 2023-02-02
---

## 1. 달력 라이브러리 선택

여행 일정 선택을 위한 달력 라이브러리를 골라야했는데, 달력 라이브러리 종류가 많아서 필요한 기능이 있는지, 사용량이 많고 정보가 잘 정리되어 있는지를 기준으로 선택했다.

🧐 **필요한 기능** <br />

1.  시작 날짝와 종류 날짜 <br />
2.  선택 시 기간 표시(다중 범위)<br />
3.  달력 두 개가 붙어 있는 모양

### react-date-range

---

[react-date-range 공식문서](https://hypeserver.github.io/react-date-range/#daterange) <br />
[react-date-range npm](https://www.npmjs.com/package/react-date-range)
{: .notice--primary}

### react-calendar

---

[react-calendar npm](https://www.npmjs.com/package/react-calendar)
{: .notice--primary}

### react-day-picker

---

[react-day-picker npm](https://www.npmjs.com/package/react-day-picker)
{: .notice--primary}

- 최근까지 업데이트 됨

### react-date-picker

---

[react-date-picker](https://www.npmjs.com/package/react-datepicker)
{: .notice--primary}

- 사용량 가장 많음

여러 라이브러리를 비교해보고 두 개의 달력을 표시하기 쉽고 디자인을 크게 건드리지 않아도 될 것 같아 `react-date-range`를 사용했다.

## 2. 달력 적용하기

사용 전에 [CodeSandbox](https://codesandbox.io/s/react-date-range-o3cvs0?file=/src/App.js)에서 간단하게 적용해본 것
{: .notice--primary}

### 설치

---

```javascript
npm install react-date-range
```

### 적용

---

```javascript
//Calendar.js
import "react-date-range/dist/styles.css"; // 메인 css 파일
import "react-date-range/dist/theme/default.css"; // 테마 CSS 파일
import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { formatTomorrow } from "../Util/dayUtil";

const day = new Date();
const tomorrow = formatTomorrow(day); //날짜 형식을 내일로 변경

const [date, setDate] = useState([
  {
    startDate: tomorrow,
    endDate: tomorrow,
    key: "selection",
  },
]);

useEffect(() => {
  handleDate(date);
}, [date[0].startDate, date[0].endDate]);
```

시작 날짜와 종료 날짜를 모두 내일로 지정해주었다.

```javascript
return (
  ...
  <DateRange
    editableDateInputs={true}
    onChange={(item) => setDate([item.selection])}
    moveRangeOnFirstSelection={false}
    ranges={date}
    months={2} //달력 두 달 표시
    direction="horizontal" //달력을 가로로 배치
    dateDisplayFormat={"LLLL yyyy"} // 날짜 포맷값
  />
  ...
)
```

### 결과

---

<img width="561" alt="스크린샷 2023-02-02 오후 11 14 15" src="https://user-images.githubusercontent.com/110877564/216350582-67febd33-0ba2-4d8a-8d8c-e66710a527fb.png">{: .align-center}

위와 같이 시작 날짜, 종료 날짜를 선택하면 범위가 표시된다! (css는 좀 수정된 상태)
