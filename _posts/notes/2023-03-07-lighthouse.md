---
title: "Lighthouse로 성능 검사하기"
excerpt: "Lighthouse"

categories:
  - note
tags:
  - [Lighthouse]

toc: true
toc_sticky: true

date: 2023-03-07
last_modified_at: 2023-03-07
---

# Lighthouse

Lighthouse는 사이트를 검사해서 성능 측정 결과와 개선책을 제공해주는 도구이다.

<img width="637" alt="스크린샷 2023-03-07 오후 4 20 56" src="https://user-images.githubusercontent.com/110877564/223352258-db1c0997-724e-4158-9cea-67dae390d277.png">

크롬 개발자 도구에서 바로 사용할 수 있다. 옵션을 선택 후 `Analyze page load`를 누르면 분석을 시작한다.

<br/>

# Lighthouse 분석 항목

## Mode (택 1)

### 1. Navigation

초기 페이지를 불러올 때 발생하는 성능을 분석한다.

### 2. Timespan

사용자가 지정한 시간 동안 발생한 성능을 분석한다.

Timespan을 선택한 경우 Categories의 Accessibility, SEO, Progressive Web App은 검사하지 못한다.

### 3. Snapshot

현재 상태의 성능을 분석한다.

Snapshot을 선택한 경우 Progressive Web App 항목을 검사하지 못한다.

<br/>

## Categories

### 1. Performance

웹 페이지의 로딩 과정에서 발생하는 성능 문제를 분석한다.

화면에 콘텐츠가 표시되는 시간, 표시된 후 사용자와 상호작용하기까지 걸리는 시간, 화면의 불안정한 요소 등을 확인한다.

### 2. Accessibility

웹 접근성을 분석한다. 대체 텍스트를 잘 작성했는지, 배경색과 콘텐츠 색상의 대비가 충분한지, WAI-ARIA 속성을 적절하게 사용했는지 등을 확인한다.

### 3. Best Practices

웹 페이지의 보안과 웹 표준 모범을 잘 따르고 있는지를 분석한다. HTTPS 프로토콜을 사용하는지, 콘솔 창에 오류가 표시되지 않는지 등을 확인한다.

### 4. SEO

검색 엔진 최적화가 잘 되어 있는지 분석한다. `<meta>` 요소가 잘 작성되어 있는지, `robots.txt`가 유효한지 확인한다.

**참고** <br/>
[robots.txt 10분 안에 끝내는 총정리 가이드](https://seo.tbwakorea.com/blog/robots-txt-complete-guide/)
{: .notice--primary}

### 5. PWA (Progressive Web App)

해당 웹 사이트가 모바일 애플리케이션으로도 잘 작동하는지 확인. 앱 아이콘을 제공하는지, 스플래시 화면이 있는지, 콘텐츠를 적절하게 배치했는지 확인(체크리스트)

<br/>

# Lighthouse의 Performance 측정 지표

<img width="641" alt="스크린샷 2023-03-07 오후 4 48 08" src="https://user-images.githubusercontent.com/110877564/223357752-cc0e8217-c730-4fd5-ab4a-5e7c44e5ccca.png">

위 페이지의 종합 성능 점수는 98점이다. 이 점수는 아래의 지표(메트릭)에 가중치를 적용해서 평균을 낸 숫자이다. 이 지표들을 웹 바이탈(Web Vitals)이라고 부르기도 한다.

## 1. First Contentful Paint(FCP)

페이지가 로드될 때 브라우저가 DOM 콘텐츠의 첫 부분을 렌더링하기까지 걸리는 시간에 관한 지표이다.
페이지의 이미지, `<canvas>` 요소, SVG 등도 DOM 콘텐츠로 구분되고, `<iframe>`요소는 포함되지 않는다.
총점 계산 시 10%의 가중치를 가진다.

## 2. Largest Contentful Paint(LCP)

페이지가 로드될 때 뷰포트를 차지하는 가장 큰 이미지나 텍스트 요소가 렌더링되기까지 걸리는 시간을 나타내는 지표이다. 주요 콘텐츠가 유저에게 보이는 시간을 가늠할 수 있고, 가중치는 25%이다.

## 3. Speed Index(SI)

페이지를 로드하는 동안 얼마나 빨리 콘텐츠가 시각적으로 표시되는지를 나타내는 지표이다. 가중치는 10%이다.

## 4. Time to interactive(TTI)

페이지가 로드되는 시점부터 사용자와 상호 작용이 가능한 시점까지 걸리는 시간을 측정한 지표. 상호 작용은 클릭 혹은 키보드 누름 등의 사용자 입력을 의미한다. 이 시점 전까지는 화면이 보여도 클릭 등이 작동하지 않는다. 가중치는 10%이다.

## 5. Total Blocking Time(TBT)

페이지가 유저와 상호작용하기까지 막혀 있는 시간을 의미한다. FCP와 TTI 사이의 작업들을 기록하여 측정한다. 가중치는 30%이다.

## 6. Cumulative Layout Shift(CLS)

페이지 로드 과정에서 예상하지 못한 레이아웃 이동을 측정한 지표이다. 버튼 등의 요소가 갑자기 움직이면 사용자가 의도하지 않은 방식으로 작동할 수도 있는데 이런 상황을 측정하기 위한 지표라고 할 수 있다.
가중치는 15%이다.

# Lighthouse의 개선 방향 제안

<img width="636" alt="스크린샷 2023-03-07 오후 5 43 11" src="https://user-images.githubusercontent.com/110877564/223369673-3723a953-979b-486a-9040-a682d01462c2.png">

Lighthouse는 Opportunity와 Diagnostic 섹션을 통해 문제점과 해결 방안, 그리고 얻을 수 있는 이점을 제공한다.

## Opportunity

- 페이지를 더 빨리 로드하는 데 도움이 되는 제안을 나열한다.

## Diagnostic

- 성능과 관련된 기타 정보를 보여준다.
