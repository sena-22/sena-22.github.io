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
        "title": "[Programmers] 1. 같은 숫자는 싫어 (javascript)",
        "excerpt":"🤔 문제 주어진 배열에서 연속으로 나오는 숫자를 하나만 남기고 제거하고 남은 수들을 리턴하는 함수 만들기 제한사항 배열 arr의 크기 : 1,000,000 이하의 자연수 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수 입출력 예시 입력 출력 [1,1,3,3,0,1,1] [1,3,0,1] [4,4,4,3,3] [4,3] 의사코드 빈 배열을 선언해준다. 주어진 배열을 순회하면서...","categories": ["programmers"],
        "tags": ["study","recursive","javascript"],
        "url": "/programmers/1-hate-same-number/",
        "teaser": null
      },{
        "title": "[Programmers] 2. 올바른 괄호(javascript)",
        "excerpt":"🤔 문제 주어진 문자열이 올바른 괄호로 이루어져있는지 여부를 리턴 올바른 괄호란? 열림 괄호(()가 없이 닫힌 괄호())가 나오면 올바르지 않은 괄호 열린 괄호는 반드시 짝지어서 닫혀야 함 제한사항 문자열 s의 길이 : 100,000 이하의 자연수 문자열 s는 ( 또는 ) 로만 이루어져 있습니다. 입출력 예시 입력 출력 ”()()” true ”)()(“ false...","categories": ["programmers"],
        "tags": ["study","recursive","javascript"],
        "url": "/programmers/2-correct-parentheses/",
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
        "title": "[Programmers] 3. 타겟 넘버(javascript)",
        "excerpt":"🤔 문제 n개의 음이 아닌 정수들을 순서를 바꾸지 않고 적절히 더하거나 빼서 타겟 넘버를 만드는 방법의 수 구하기 제한사항 주어지는 숫자의 개수는 2개 이상 20개 이하입니다. 각 숫자는 1 이상 50 이하인 자연수입니다. 타겟 넘버는 1 이상 1000 이하인 자연수입니다. 입출력 예시 numbers target return [1,1,1,1,1] 3 5 [4,1,2,1] 4...","categories": ["programmers"],
        "tags": ["study","recursive","javascript"],
        "url": "/programmers/3-target-number/",
        "teaser": null
      },{
        "title": "[Programmers] 4. 게임 맵 최단거리 (javascript)",
        "excerpt":"🤔 문제 상대 팀 진영에 최대한 빨리 도착하기 위해 지나가야 하는 칸의 개수의 최솟값. 상대 팀 진영에 도착할 수 없을 때는 -1을 return 한다. 제한사항 maps는 n x m 크기의 게임 맵의 상태가 들어있는 2차원 배열로, n과 m은 각각 1 이상 100 이하의 자연수입니다. n과 m은 서로 같을 수도, 다를...","categories": ["programmers"],
        "tags": ["study","recursive","javascript"],
        "url": "/programmers/4-game-map/",
        "teaser": null
      },{
        "title": "[Recursive] Hash",
        "excerpt":"해시(Hash) 해시는 key-value를 쌍으로 데이터를 저장하는 자료구조이다. Space-Time trade off(시간-공간)의 대표적인 알고리즘에 속한다. Space-Time trade off(시간-공간) 기존의 배열과 다른 별도의 리스트 공간을 만들어 빠른 알고리즘을 구현하는 방법. 즉 시간을 빠르게 하기 위해서 많은 공간을 사용하는 알고리즘이다. 기수 정렬, 해시, B-tree 등이 이 방식을 사용한다. key 값이 배열의 인덱스로 저장되기 때문에...","categories": ["algorithm"],
        "tags": ["study","recursive","hash"],
        "url": "/algorithm/3-hash/",
        "teaser": null
      },{
        "title": "[Programmers] 5. 완주하지 못한 선수 (javascript)",
        "excerpt":"//시간 초과 function solution(participant, completion) { let hashMap = new Map(); for (let i = 0; i &lt; participant.length; i++) { hashMap.set(i, participant[i]); } for (let i = 0; i &lt; completion.length; i++) { for (let [key, value] of hashMap) { if (completion[i] === value) { hashMap.delete(key); break; //중복 방지...","categories": ["programmers"],
        "tags": ["study","recursive","javascript"],
        "url": "/programmers/5-x-complete-player/",
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
      },{
        "title": "[HTML] 에디터에서 HTML 자동완성하기",
        "excerpt":"태그 자동완성 입력 &lt;div&gt;div&gt;div*5&gt;img[src=\"img/$.png\"]+h2&gt;lorem5^p&lt;/div&gt; &gt; : 자식 태그로 생성 [] : 태그의 속성 지정 $ : 태그가 반복될 때마다 1씩 증가된 값이 입력. + : 형제 태그로 생성 ^ : 다시 상위 태그로 이동 lorem + 숫자 : Lorem Ipsum을 숫자만큼 생성 결과 &lt;div&gt; &lt;div&gt; &lt;img src=\"img/1.png\" alt=\"\" /&gt; &lt;h2&gt;Lorem...","categories": ["html"],
        "tags": ["html","autocomplete"],
        "url": "/html/autocomplete/",
        "teaser": null
      },{
        "title": "[Mini Project] 포트폴리오 만들기 1.Home page",
        "excerpt":"사이드 프로젝트로 포트폴리오를 만들어보려고 한다. 팀 프로젝트 때 CSS를 많이 다루지 않아서 포트폴리오 페이지에서는 이것저것 적용해보고 싶다. 라우팅 &lt;Routes&gt; &lt;Route path=\"/\" element={&lt;Home /&gt;} /&gt; &lt;Route path=\"/about\" element={&lt;About /&gt;} /&gt; &lt;Route path=\"/project\" element={&lt;Project /&gt;} /&gt; &lt;Route path=\"/project/:id\" element={&lt;SingleProject /&gt;} /&gt; &lt;Route path=\"/contact\" element={&lt;Contact /&gt;} /&gt; &lt;/Routes&gt; Home Home 페이지에서는 전체 정보를...","categories": ["mini project"],
        "tags": ["project","portfolio","react"],
        "url": "/mini%20project/portfolio-1/",
        "teaser": null
      },{
        "title": "[Mini Project] 포트폴리오 만들기 2. Project page",
        "excerpt":"프로젝트는 페이지에 따라 주소를 /project/:id로 만들었다. id 값은 Home 페이지에서 가져온 프로젝트의 index이다. //Home.jsx &lt;div onClick={() =&gt; handleNavigate(`/project/${props.idx}`)}&gt; 각 페이지에서 useParams로 id를 가져와서 id에 따라 페이지를 다르게 렌더링하게 만드려고 하는데 여기서 params 값이 undefined로 떴다. //Project.jsx import { useParams } from \"react-router-dom\"; const { params } = useParams(); 알고보니 App.js에서...","categories": ["mini project"],
        "tags": ["project","portfolio","react"],
        "url": "/mini%20project/portfolio-2/",
        "teaser": null
      },{
        "title": "[Mini Project] 포트폴리오 만들기 3. 이메일 수신하기",
        "excerpt":"1. EmailJS 가입하기 EmailJS 가입 후 Account에서 키를 확인하고, Email Templates에서 어떤 양식으로 받을 지 설정한다. 2. EmailJS 설치하기 npm install @emailjs/browser --save 3. 이메일 전송하기 The basic method to send an email with EmailJS. 위의 공식문서를 참고해서 그대로 보내면 된다. const templateParams = { name: name, email: email, subject:...","categories": ["mini project"],
        "tags": ["project","portfolio","react","EmailJS"],
        "url": "/mini%20project/portfolio-3/",
        "teaser": null
      },{
        "title": "[Mini Project] 포트폴리오 만들기 4. react-type-animation",
        "excerpt":"react-type-animation를 이용해서 자동으로 단어가 타이핑되도록 만들었다. 설치 npm i react-type-animation react-type-animation example 사용방법이 공식 문서에 잘 나와있어서 거의 그대로 사용했다. import { TypeAnimation } from \"react-type-animation\"; &lt;TypeAnimation sequence={[\"text1\", 3000, \"text2\", 3000, \"text3\", 3000]} speed={1} style= wrapper=\"h1\" repeat={Infinity} /&gt;; sequence (필수) 원하는 문장과 멈춰 있는 시간을 지정해준다. sequence={[\"text1\", 3000, \"text2\", 3000,...","categories": ["mini project"],
        "tags": ["project","portfolio","react","react-type-animation"],
        "url": "/mini%20project/portfolio-4/",
        "teaser": null
      },{
        "title": "[Mini Project] 포트폴리오 만들기 5. react-code-blocks",
        "excerpt":" ","categories": ["mini project"],
        "tags": ["project","portfolio","react","react-code-blocks"],
        "url": "/mini%20project/portfolio-5/",
        "teaser": null
      },{
        "title": "[typescript] ",
        "excerpt":"ts 컴파일러 설치하기 npm i -g typescript ts-node 버전 확인 tsc - v; ts - node - v; 타입스크립트 기반 리액트 프로젝트 생성 npx create-react-app 프로젝트 이름 --template typescript Node.js의 패키지 중에서 라이브러리가 아니라 프로그램 형태로 동작하는 패키지 는 최신 버전으로 유지하기 위해 npx를 사용한다. (npx는 패키지의 최신 버전을 찾아...","categories": ["typescript"],
        "tags": ["typescript"],
        "url": "/typescript/tyscript-1/",
        "teaser": null
      },{
        "title": "더미 데이터 만들기",
        "excerpt":"dummy image Lorem Picsum에서 무료 이미지 사용이 가능하다. 랜덤 이미지 https://picsum.photos/${width}/${height} 특정 이미지 https://picsum.photos/id/{image}/${width}/${height} {image}에 넣을 이미지 목록은 이곳에서 확인할 수 있다. 정적 이미지 같은 이미지를 불러오고 싶을 땐 /seed/{seed}를 이용한다. 같은 {seed}를 사용한 경우 같은 이미지를 불러온다. https://picsum.photos/seed/{지정한 글자}/${width}/${height} grayscale &amp; blur //흑백 https://picsum.photos/${width}/${height}?grayscale //블러 https://picsum.photos/${width}/${height}?blur // 블러 정도...","categories": ["notes"],
        "tags": ["dummy"],
        "url": "/notes/dummy-data/",
        "teaser": null
      },{
        "title": "webpack, hot reloading, prettier",
        "excerpt":"webpack 다양한 입력 모듈(HTML 파일, 이미지 파일..)을 결합해서 단순한 형태의 모듈로 변환해주는 모듈 번들러. 변환한 결과를 번들이라고 한다. 리액트에서 웹팩은 빌드 모드일 때와 개발 모드일 때 동작 방식이 다르다. 빌드 모드일 때 프로젝트 디렉터리의 파일을 모아 main이나 chunk라는 단어가 있는 번들 파일로 만든다. 이 번들 파일을 반영한 새로운 index.html 만든다....","categories": ["notes"],
        "tags": ["study","webpack","hot reloading"],
        "url": "/notes/webpack/",
        "teaser": null
      },{
        "title": "[Mini Project] 포트폴리오 만들기 6. import 정리",
        "excerpt":"프로젝트 페이지에서 데이터를 불러올 때 일일이 import를 하고 있었는데, 코드가 너무 복잡해서 * 를 이용해서 줄여보려고 한다. data 폴더에 index.js 파일을 만들어 export *로 내보냈다. //data/index.js export * from \"./first_project_data\"; export * from \"./second_project_data\"; export * from \"./third_project_data\"; export * from \"./meta_data\"; import * as D로 가져와서 사용할 때는 D.firstProjectData...","categories": ["mini project"],
        "tags": ["project","portfolio","react"],
        "url": "/mini%20project/portfolio-6/",
        "teaser": null
      },{
        "title": "page setting",
        "excerpt":"초기 페이지 설정   복사용 파일 만들기   //src/Copy.js export default function Copy() {   return &lt;div&gt;Copy&lt;/div&gt;; }   터미널에서 복사   //terminal mkdir pages cp Copy.js pages/page1.js cp Copy.js pages/page2.js cp Copy.js pages/page3.js ...  ","categories": ["notes"],
        "tags": ["page"],
        "url": "/notes/page-setting/",
        "teaser": null
      },{
        "title": "[Programmers] 6. 평균 구하기 (javascript)",
        "excerpt":"🤔 문제 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요. 제한사항 arr은 길이 1 이상, 100 이하인 배열입니다. arr의 원소는 -10,000 이상 10,000 이하인 정수입니다. 입출력 예시 maps answer [1,2,3,4] 2.5 [5,5] 5 의사코드 reduce 메서드를 사용하여 모든 값을 더한다 합계를 배열의 길이로 나눈다 제출한 답 function solution(arr)...","categories": ["programmers"],
        "tags": ["study","recursive","javascript","Lv.1"],
        "url": "/programmers/1-get-average/",
        "teaser": null
      },{
        "title": "[Programmers] 7. 짝수와 홀수 (javascript)",
        "excerpt":"🤔 문제 정수 num이 짝수일 경우 “Even”을 반환하고 홀수인 경우 “Odd”를 반환하는 함수, solution을 완성해주세요. 제한사항 num은 int 범위의 정수입니다. 0은 짝수입니다. 입출력 예시 maps answer 3 “Odd” 4 “Even” 의사코드 3항 연산자를 사용해서 나머지가 0이면 짝수, 0이 아니면 홀수를 리턴한다. 제출한 답 function solution(num) { return num % 2...","categories": ["programmers"],
        "tags": ["study","recursive","javascript","Lv.1"],
        "url": "/programmers/2-even-and-odd/",
        "teaser": null
      },{
        "title": "[Deep Dive]  1. 프로그래밍",
        "excerpt":"프로그래밍 컴퓨터에게 실행을 요구하는 커뮤니케이션 컴퓨터가 이해할 수 있을 정도로 정확하고 상세하게 요구사항을 설명하는 작업 요구사항의 집합을 분석해서 적절한 자료구조와 함수의 집합으로 변환한 뒤, 그 흐름을 제어하는 것 요구사항 분석 문제(요구사항)를 명확히 이해하기 단순하게 분해하기 자료를 정리하고 구분하기 순서에 맞게 행위를 배열하기 프로그래밍 언어 컴퓨터와의 대화에 사용되는 표현 수단 사람과...","categories": ["notes"],
        "tags": ["programming"],
        "url": "/notes/1-programming/",
        "teaser": null
      },{
        "title": "[Deep Dive]  2. javascript",
        "excerpt":"자바스크립트 웹 브라우저에서 사용하기 위해 만들어진 프로그래밍 언어 자바스크립트의 특징 웹 브라우저에서 동작하는 유일한 프로그래밍 언어 인터프리터 언어 멀티 패러다임 프로그래밍 언어 : 명령형, 함수형, 프로토타입 기반 객체지향 프로그래밍 지원 프로토타입 기반 객체지향 프로그래밍 Ajax(Asynchronous Javascript and XML) 자바스크립트를 이용해 서버와 브라우저가 비동기방식으로 데이터를 교환할 수 있는 통신 기능 서버에서...","categories": ["notes"],
        "tags": ["javascript","Ajax","Node.js","ECMAScript"],
        "url": "/notes/2-javascript/",
        "teaser": null
      },{
        "title": "[typescript] 함수의 타입 정의",
        "excerpt":"1. 함수의 타이핑(Typing the function) // 1. 각 매개변수의 타입 입력, 괄호 뒤에는 함수가 반환하는 값의 타입을 입력한다. function add(num1: number, num2: number): number { return num1 + num2; } // 2. 아무것도 리턴하지 않으면 void를 입력하면 된다. function add2(num1: number, num2: number): void { console.log(num1 + num2); } 2....","categories": ["typescript"],
        "tags": ["typescript","function"],
        "url": "/typescript/function/",
        "teaser": null
      },{
        "title": "[typescript] interface",
        "excerpt":"인터페이스는 객체의 타입을 정의하기 위해 사용된다. 인터페이스 정의하기 interface Character { name: string; age: number; } 선택적 프로퍼티(Optional Properties) 사용하기 프로퍼티가 필수 사항이 아닐 때에는 ?를 붙여 표시한다. interface Character { name: string; age: number; height?: string; //키를 Optional Properties로 처리 } let character: Character = { name: \"Jack\", age:...","categories": ["typescript"],
        "tags": ["typescript","interface"],
        "url": "/typescript/interface/",
        "teaser": null
      },{
        "title": "[Deep Dive]  3. 변수",
        "excerpt":"1. 변수의 정의와 사용하는 이유 변수의 의미 변수를 사용하는 이유 2. 변수를 선언하는 방법 변수 선언 변수 선언 방법 변수가 선언되는 단계 3. 값 할당 &amp; 재할당하기 변수에 값을 할당하는 방법 변수 선언과 값의 할당 시점 값을 재할당할 때 생기는 일 4. 식별자 네이밍 규칙 식별자 식별자 네이밍 규칙 네이밍...","categories": ["notes"],
        "tags": ["javascript","variable"],
        "url": "/notes/variable/",
        "teaser": null
      }]
