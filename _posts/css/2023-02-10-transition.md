---
title: "[CSS] transition & animation 속성"
excerpt: "transition과 animation"

categories:
  - css
tags:
  - [css, transition, animation]

toc: true
toc_sticky: true

date: 2023-02-10
last_modified_at: 2023-02-10
---

# transition

사용자의 특정 동작에 반응하는 인터랙션을 기반으로 한 모션 기법

```css
/* 전환 효과를 줄 css 속성명 지정. all을 이용하면 전체 속성 사용 가능 */
transition-property: 속성명
transition-duration: 지속시간 (초 단위)
transition-delay: 지연시간(초 단위)
transition-timing-function: 전환 효과의 가속도
  - lenear: 등속
  - ease: 가속
  - ease-in: 모션 시작 시 가속
  - ease-out: 모션 종료 시 가속
  - ease-in-out: 모션 시작,종료 시 가속
  - cubic-bezier: 사용자 지정 가속 효과 사용
/* shorthand */
transition: 속성명 지속시간 가속도 지연시간
/* example */
transition: all 1s ease-in-out 0s
```

# animation

미리 지정한 조건에 맞게 자동으로 반복하는 효과

```css
@keyframes: 애니메이션 세트 지정;
animation-name: 이름;
animation-iteration-count: 키프레임 모션 한 세트가 몇 번 동작하는지 횟수 설정(무한반복은 infinite)
animation-play-state:running(모션 그대로 진행)/paused(일시 정지
)
/* shorthand */
animation: 이름 진행시간 가속도 지연시간 반복횟수
/* example */
animation: rotation 3s lenear 0s infinite;
```

[transition & animation 예제(CodeSandbox)](https://codesandbox.io/s/transition-animation-example-bbdiye?file=/src/App.js)
{: .notice--primary}
