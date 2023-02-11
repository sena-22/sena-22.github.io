var store = [{
        "title": "[HTML] HTML의 기본 구조",
        "excerpt":"HTML(Hyper Text Markup Language)      문서의 구조를 나타낸다.   웹페이지의 틀을 만드는 마크업 언어   tag들의 집합  ","categories": ["html"],
        "tags": ["html","tag"],
        "url": "/html/html/",
        "teaser": null
      },{
        "title": "[Recursive] 시간 복잡도(Time Complexity)",
        "excerpt":"1. 시간 복잡도란? 알고리즘의 실행 시간을 표현하는 것을 말한다. 여기서 실행 시간이란 통상적으로 쓰이는 시분초 개념이 아니라, 함수나 알고리즘 수행에 필요한 스텝 수를 의미한다. (실행 환경마다 성능이 다르기 때문에 시간을 초(seconds)나 밀리초(milliseconds)로 표현하면 편차가 커질 수 있기 때문이라고 한다.) 시간 복잡도는 보통 점근 표기법으로 표현한다. 점근적 분석(asymptotic analysis) 임의의 함수가...","categories": ["algorithm"],
        "tags": ["study","recursive","time complexity"],
        "url": "/algorithm/1-time-complexity/",
        "teaser": null
      },{
        "title": "[Recursive] Stack과 Queue",
        "excerpt":"Stack 입력과 출력이 하나의 방향에서 일어나는 후입선출(LIFO)로 이루어지는 자료구조를 말한다. 즉 가장 최근에 넣은 데이터가 가장 먼저 나온다. Stack에 데이터를 넣는 것을 PUSH, 데이터를 꺼내는 것을 POP이라고 한다. 데이터는 하나씩만 넣고 뺄 수 있다. Stack Overflow와 Stack Underflow Stack Overflow : 스택이 가득 차 있는데 데이터를 넣으려고 할 때 발생한다....","categories": ["algorithm"],
        "tags": ["study","recursive","stack","queue"],
        "url": "/algorithm/stack-queue/",
        "teaser": null
      },{
        "title": "[Recursive] Sort",
        "excerpt":"1. 선택 정렬 대상 데이터에서 최솟값 (혹은 최댓값)을 찾고, 남은 정렬의 가장 앞에 있는 데이터와 교환하는 알고리즘을 가진 정렬이다. 선택 정렬은 구현 방법이 복잡하고, 시간 복잡도도 O(n^2)로 비효율적이기 때문에 자주 사용하지는 않는다. 선택 정렬의 과정 남은 정렬 부분에서 최솟값(혹은 최댓값)을 찾는다. 남은 정렬에서 가장 앞에 있는 데이터와 선택된 데이터를 교체한다....","categories": ["algorithm"],
        "tags": ["study","recursive","selection sort","insert sort","bubble sort","quick sort","heap sort"],
        "url": "/algorithm/1-sort/",
        "teaser": null
      },{
        "title": "[Recursive] BFS와 DFS",
        "excerpt":"BFS와 DFS는 트리나 그래프 등의 비선형 구조를 무차별 탐색할 때 사용한다. 여기서 무차별 탐색이란 가능한 경우의 수를 전부 시도한다는 의미이다. 거리, 지도 탐색 등에 많이 사용된다. BFS (Breadth-First Search) 넓이 우선 검색 BFS는 넓이 우선 검색으로, 같은 depth를 모두 확인한 후에 내려가서 다시 검색한다.자식 노드를 전부 방문하고 그 뒤에 후손...","categories": ["algorithm"],
        "tags": ["study","recursive","bfs","dfs"],
        "url": "/algorithm/2-bfs-dfs/",
        "teaser": null
      },{
        "title": "[Recursive] Hash",
        "excerpt":"해시(Hash) 해시는 key-value를 쌍으로 데이터를 저장하는 자료구조이다. Space-Time trade off(시간-공간)의 대표적인 알고리즘에 속한다. Space-Time trade off(시간-공간) 기존의 배열과 다른 별도의 리스트 공간을 만들어 빠른 알고리즘을 구현하는 방법. 즉 시간을 빠르게 하기 위해서 많은 공간을 사용하는 알고리즘이다. 기수 정렬, 해시, B-tree 등이 이 방식을 사용한다. key 값이 배열의 인덱스로 저장되기 때문에...","categories": ["algorithm"],
        "tags": ["study","recursive","hash"],
        "url": "/algorithm/3-hash/",
        "teaser": null
      },{
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
        "title": "[Github Blog] 라벨 변경",
        "excerpt":"블로그의 날짜가 모두 Updated로 나와서 수정했다.      처음에는 레이아웃 문제인가 싶어서 __layouts 폴더의 single.html 파일을 살펴봤다.   &lt;strong&gt;   &lt;i class=\"fas fa-fw fa-calendar-alt\" aria-hidden=\"true\"&gt;&lt;/i&gt; Date:&lt;/strong &gt;   site.data.ui-text[site.locale].date_label에서 설정한 대로 나오는 것 같아서 __data 폴더의 ui-text.yml 파일을 봤더니 “Update: “ 로 되어 있었다. “Date: “ 로 수정했더니 잘 적용되었다.     ","categories": ["blog"],
        "tags": ["Blog","Github","label"],
        "url": "/blog/label/",
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
        "excerpt":"메인 프로젝트에서는 token, memberId 등의 정보를 저장하기 위해 react-cookie라는 라이브러리를 사용하기로 했다. 1. 설치 npm i react-cookie 2. cookie 파일 설정 쿠키를 사용하기 위한 파일을 만들어 필요한 컴포넌트에서 import 해서 적용하는 방법을 사용했다. import { Cookies } from \"react-cookie\"; const cookies = new Cookies(); //쿠키 저장 export const setCookie =...","categories": ["main project"],
        "tags": ["project","codestates","cookie","react"],
        "url": "/main%20project/3-cookies/",
        "teaser": null
      },{
        "title": "[Main Project] 메인 프로젝트 회고록",
        "excerpt":"4주간 진행한 메인 프로젝트가 끝났다. 프로젝트 기간 동안 배웠던 점들에 대해 잊기 전에 기록해두려고 한다. 프로젝트에 관해서 1. 서비스 개요 서비스명 : 트리덤(tridom) - trip &amp; freedom 기획 의도 : 코로나 19 제한 완화로 인한 관광객 수 증가, 여행에 관한 서비스의 수요가 증가할 것으로 예상 배포 링크 2. 서비스 주요...","categories": ["main project"],
        "tags": ["project","codestates","review","react"],
        "url": "/main%20project/project-review/",
        "teaser": null
      },{
        "title": "[HTML] HTML Tag 정리",
        "excerpt":"HTML의 태그들을 그때그때 찾아가면서 하다보니 머릿속에서 정리되지 않았다는 생각이 들어 한번에 모아서 정리해보기로 했다. tag 부등호(&lt;&gt;)로 묶인 HTML의 기본 구성 요소 트리 구조로 이루어져 있으며 tab을 이용하여 들여쓰기를 해서 부모와 자식 관계를 나타낼 수 있다. 웹 페이지를 구성하는 태그 1. 문서 형식 정의 tag &lt;!DOCTYPE html&gt; 웹 페이지의 형식을 알려주는...","categories": ["html"],
        "tags": ["html","tag"],
        "url": "/html/tag/",
        "teaser": null
      },{
        "title": "[CSS] CSS의 기초 용어",
        "excerpt":"CSS(Cascading Style Sheets)란? HTML로 작성한 웹 애플리케이션의 구조에 디자인을 적용할 수 있는 스타일 시트 언어 좋은 사용자 경험(UX:user experience)을 제공하기 위한 도구 CSS 용어 1. 선택자(셀렉터) 스타일을 적용하고자 하는 HTML 요소를 선택하기 위해 사용하는 방법이다. 2. 프로퍼티(속성) 해당 선택자에 지정할 스타일을 말한다. 임의로 정할 수 없고 지정된 것을 사용해야 한다....","categories": ["css"],
        "tags": ["css"],
        "url": "/css/1-css/",
        "teaser": null
      },{
        "title": "[CSS] 선택자(selector)",
        "excerpt":"전체 선택자 HTML 문서 내의 모든 요소 선택. head 요소도 포함된다 * { border: 1px solid red; } 태그 선택자 특정 태그를 선택 h1 { border: 1px solid red; } h2 { border: 1px solid blue; } 자손 선택자 자식과 하위 요소를 모두 선택 //html &lt;p&gt; &lt;strong&gt;자손 텍스트 요소&lt;/strong&gt; &lt;/p&gt;...","categories": ["css"],
        "tags": ["css","selector"],
        "url": "/css/2-selector/",
        "teaser": null
      },{
        "title": "[CSS] 박스 모델",
        "excerpt":"블록 요소와 인라인 요소 분류 태그 줄바꿈 기본 너비 width, height block h1~h6, p, div, 리스트 태그, 레이아웃 태그 자동 100% 사용 가능 inline-block display: inline-block 설정 일어나지 않음 글자가 차지하는 만큼 사용 가능 inline strong, em, a, span 일어나지 않음 글자가 차지하는 만큼 사용 불가능 블록 요소는 글의 레이아웃과...","categories": ["css"],
        "tags": ["css","box model"],
        "url": "/css/3-box-model/",
        "teaser": null
      },{
        "title": "[CSS] transform 속성",
        "excerpt":"transform(2D) //css section:nth-of-type(1) article { transform: scale(1.5); /* 요소를 1.5배 확대 */ } section:nth-of-type(2) article { transform: skewX(20deg); /* 요소를 x축으로 20도만큼 기울이기 */ } section:nth-of-type(3) article { transform: translateX(20px); /* 요소를 20px만큼 오른쪽으로 이동 */ } section:nth-of-type(4) article { transform: rotate(45deg); /* 요소를 45도만큼 회전 */ } transform(3D) section...","categories": ["css"],
        "tags": ["css","transform"],
        "url": "/css/4-transform/",
        "teaser": null
      },{
        "title": "[CSS] transition & animation 속성",
        "excerpt":"transition 사용자의 특정 동작에 반응하는 인터랙션을 기반으로 한 모션 기법 /* 전환 효과를 줄 css 속성명 지정. all을 이용하면 전체 속성 사용 가능 */ transition-property: 속성명 transition-duration: 지속시간 (초 단위) transition-delay: 지연시간(초 단위) transition-timing-function: 전환 효과의 가속도 - lenear: 등속 - ease: 가속 - ease-in: 모션 시작 시 가속 -...","categories": ["css"],
        "tags": ["css","transition","animation"],
        "url": "/css/transition/",
        "teaser": null
      }]
