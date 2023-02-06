var store = [{
        "title": "[Github Blog] Github 블로그 만들기",
        "excerpt":"1. Repository 생성 깃허브 계정.github.io 라는 이름으로 레포지토리를 생성해서 로컬로 클론한다. 2. ruby, Jekyll, Bundler 설치 블로그를 참고해서 지킬을 설치했다! 이 부분은 정확히 이해 하고 있지 못해서 다시 알아볼 예정이다. https://ansohxxn.github.io/blog/i-made-my-blog/ https://jojoldu.tistory.com/288 https://codecamper.me/blog/122/ 3. 지킬 테마 선택 minimal-mistakes 테마를 선택했다. https://github.com/mmistakes/minimal-mistakes 선택한 테마의 github repository 압축 파일을 받아서 만들어둔 폴더에...","categories": ["blog"],
        "tags": ["Blog","Github","First Post"],
        "url": "/blog/hello-blog/",
        "teaser": null
      },{
        "title": "[Github Blog] Github 블로그 폰트 변경하기",
        "excerpt":"font 선택하기     눈누나 Google Fonts에서 마음에 드는 폰트를 선택한다.   사용하기     main.scss 에 붙여 넣고 _variables.scss에서 선언한다.   $serif: Georgia, Times, serif !default;   사용하고 싶은 곳에서 변수처럼 사용하면 된다.  ","categories": ["blog"],
        "tags": ["Blog","Github","Font"],
        "url": "/blog/font/",
        "teaser": null
      },{
        "title": "[Main Project] 01. react-date-range 사용하기",
        "excerpt":"1. 달력 라이브러리 선택 여행 일정 선택을 위한 달력 라이브러리를 골라야했는데, 달력 라이브러리 종류가 많아서 필요한 기능이 있는지, 사용량이 많고 정보가 잘 정리되어 있는지를 기준으로 선택했다. 🧐 필요한 기능 시작 날짝와 종료 날짜 선택 시 기간 표시(다중 범위) 달력 두 개가 붙어 있는 모양 react-date-range react-date-range 공식문서 react-date-range npm react-calendar...","categories": ["main project"],
        "tags": ["project","codestates","calendar"],
        "url": "/main%20project/calendar-library/",
        "teaser": null
      },{
        "title": "[Main Project] 02. main page 구성",
        "excerpt":"1. 라우팅 같은 url로 로그인 전과 로그인 후의 메인 페이지를 다르게 나타내는 방법을 사용했다. 프로젝트에서 리액트를 사용했기 때문에 react-router-dom을 사용해서 라우팅 작업을 해주었다. //app.js import { useEffect, useState } from 'react'; import { Route, Routes } from 'react-router-dom'; import Home from './Pages/Home'; //만들어둔 페이지를 불러왔다 import Main from './Pages/Main'; function...","categories": ["main project"],
        "tags": ["project","codestates","page","react"],
        "url": "/main%20project/1-main-page/",
        "teaser": null
      },{
        "title": "[Main Project] 03. user page 구성",
        "excerpt":"1. 라우팅 유저 프로필 페이지와 프로필 수정 페이지로 나누었다. memberId를 파라미터로 넣어 유저를 식별할 수 있도록 만들었다. //app.js import { useEffect, useState } from 'react'; import { Route, Routes } from 'react-router-dom'; import UserProfile from './Pages/UserProfile'; import UserProfileEdit from './Pages/UserProfileEdit'; function App() { ... return ( &lt;&gt; &lt;Routes&gt; ... &lt;Route...","categories": ["main project"],
        "tags": ["project","codestates","page","react"],
        "url": "/main%20project/2-user-page/",
        "teaser": null
      },{
        "title": "[Main Project] 04. 게시글 작성, 수정 페이지",
        "excerpt":"1. 라우팅 프로젝트의 게시글은 만들었던 일정을 바탕으로 메모와 감상을 추가하는 형식으로 이루어져 있다. 따라서 게시글을 작성할 때에는 먼저 어떤 일정을 게시글로 만들 것인지 선택하는 페이지가 필요했다. 또한 작성된 게시글도 렌더링하여 이미 작성된 게시글을 수정하는 기능도 이 페이지에 넣었다. 따라서 게시글/일정 선택 페이지, 게시글 추가 페이지, 게시글 수정 페이지로 나눴다. //app.js...","categories": ["main project"],
        "tags": ["project","codestates","page","react"],
        "url": "/main%20project/3-board/",
        "teaser": null
      },{
        "title": "[Main Project] 05. Error Log",
        "excerpt":"프로젝트 진행 중 발생한 에러와 실제 웹사이트를 사용하며 불편함을 느꼈던 부분들을 정리해보았다. 1. 게시글 생성 페이지 에러 🤔 특정 장소 선택 시 게시글 생성이 되지 않는 문제 구글 api에서 장소 정보를 불러올 때 rating 부분이 존재하지 않을 경우 null 값으로 들어와서 발생하는 에러로 확인되어 백엔드 쪽에서 초기값을 0.0으로 설정 후...","categories": ["main project"],
        "tags": ["project","codestates","error","react"],
        "url": "/main%20project/1-error-log/",
        "teaser": null
      },{
        "title": "[Main Project] 06. Day.js 적용",
        "excerpt":"프로젝트를 처음 시작할 때 moment를 사용해서 날짜 형식을 지정했는데, 콘솔창에 경고문이 계속 생겼다. 알아보니 현재 개발이 중단되었고, 용량 이슈도 있어 대체하기로 했다. 보통 Day.js가 용량이 적고 moment와 유사해서 많이 사용되어 프로젝트에서도 바로 적용하기로 했다. 1. 설치 npm i dayjs 2. 사용 사용법은 moment와 거의 비슷하다. dayjs 공식문서 import dayjs from...","categories": ["main project"],
        "tags": ["project","codestates","dayjs","react","moment"],
        "url": "/main%20project/2-dayjs/",
        "teaser": null
      },{
        "title": "[Main Project] 07. Cookies",
        "excerpt":" ","categories": ["main project"],
        "tags": ["project","codestates","cookie","react"],
        "url": "/main%20project/3-cookies/",
        "teaser": null
      }]
