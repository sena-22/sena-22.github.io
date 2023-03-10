---
title: "[Main Project] 메인 프로젝트 회고록"
excerpt: "main project review"

categories:
  - main project
tags:
  - [project, codestates, review, react]

toc: true
toc_sticky: true

date: 2023-02-07
last_modified_at: 2023-02-08
---

<img src="https://user-images.githubusercontent.com/95217370/215842925-37524a74-c2f4-454c-914f-3d19344bed16.png">

<br/>
4주간 진행한 메인 프로젝트가 끝났다.

프로젝트 기간 동안 배웠던 점들에 대해 잊기 전에 기록해두려고 한다.

## 프로젝트에 관해서

### 1. 서비스 개요

- 서비스명 : 트리덤(tridom) - trip & freedom
- 기획 의도 : 코로나 19 제한 완화로 인한 관광객 수 증가, 여행에 관한 서비스의 수요가 증가할 것으로 예상
- [배포 링크](bit.ly/3JMheyw)

### 2. 서비스 주요 기능

- 국내 여행 일정 계획 기능 및 구글 지도를 통한 시각화
- 여행 일정에 대해 예산 및 비용 등록 기능, 사용량 확인 기능
- 게시글 등록을 통한 일정 공유, 좋아요 기능
- 유저 페이지 수정, 작성한 일정과 게시글 확인

## 담당 기능

### 1. 메인 페이지

- 로그인 여부에 따라 다르게 나타나는 메인 페이지
- 달력을 통한 날짜 선택 기능
- 여행, 게시글 목록 공용 컴포넌트 구현

### 2. 게시글 작성, 수정 페이지

- 여행 선택 페이지 : 게시글로 작성할 여행 선택 페이지
- 게시글 작성 페이지
- 게시글 수정 페이지 : 게시글 삭제 기능 포함

### 3. 유저페이지

- 프로필과 작성한 여행, 게시글 조회 기능
- 프로필 수정 기능
- 회원 탈퇴 기능

## 배운 점

### 코드를 공유한다는 것

- 함께 작업을 하다보니 혼자 할 때와는 달리 다른 사람과 코드를 공유할 일이 많았다. 이때 작업하는 페이지에서만 사용할 것으로 가정하고 코드를 작성했더니 나중에 생각지 못한 문제가 생겨 코드를 계속 수정하게 되었다.코드를 다른 사람도 알기 쉽게, 재사용하기 쉽게 만들어야 고치기에도 수월하다는 점을 알게 되었다.
- 초반에 코드 스타일을 맞추지 않았더니 PR을 올릴 때마다 사소한 변경점이 계속 생기는 일이 발생했다. 띄어쓰기나 따옴표 등 몇 가지만 정했는데도 훨씬 편해졌다.

### 중복 코드의 유틸화

- 날짜 포맷 라이브러리를 사용하다 변경할 일이 있었는데 컴포넌트마다 가져다 쓰다보니 일일이 변경하느라 고생했다. 유틸 파일로 분리해서 나중에 변경하기 쉽게 고쳤다.

### 상태관리 라이브러리의 필요성

- 초반에 프로젝트의 규모가 크지 않아 상태 관리 라이브러리가 굳이 필요하지 않다고 생각했는데, 지도 api 사용과정에서 생각보다 props drilling이 많이 발생했다. 추후 사용할 일도 많을 것 같아 수료 후 학습해서 이 부분을 보충하고 싶다.

### 깃허브 사용

- 코드 리뷰 : 코드를 작성하기에 급급해 충돌 여부만 확인 후 merge를 하는 일이 대부분이었다. 그러다보니 코드를 pull 해오고서 문제를 발견하는 일이 생겼다. 코드를 보다 신중하게 살펴보아야 할 필요성을 느꼈다.
- 커밋의 세분화 : 커밋을 큰 기능 단위로 나누어서 하다보니 나중에 보기가 어려웠다. 작은 기능 별로 세세하게 커밋하는 습관을 들여야겠다.
