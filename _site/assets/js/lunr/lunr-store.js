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
        "excerpt":"프로그래밍 컴퓨터에게 실행을 요구하는 커뮤니케이션 컴퓨터가 이해할 수 있을 정도로 정확하고 상세하게 요구사항을 설명하는 작업 요구사항의 집합을 분석해서 적절한 자료구조와 함수의 집합으로 변환한 뒤, 그 흐름을 제어하는 것 요구사항 분석 문제(요구사항)를 명확히 이해하기 단순하게 분해하기 자료를 정리하고 구분하기 순서에 맞게 행위를 배열하기 프로그래밍 언어 컴퓨터와의 대화에 사용되는 표현 수단 사람과...","categories": ["javascript"],
        "tags": ["programming"],
        "url": "/javascript/1-programming/",
        "teaser": null
      },{
        "title": "[Deep Dive]  2. javascript",
        "excerpt":"자바스크립트 웹 브라우저에서 사용하기 위해 만들어진 프로그래밍 언어 자바스크립트의 특징 웹 브라우저에서 동작하는 유일한 프로그래밍 언어 인터프리터 언어 멀티 패러다임 프로그래밍 언어 : 명령형, 함수형, 프로토타입 기반 객체지향 프로그래밍 지원 프로토타입 기반 객체지향 프로그래밍 Ajax(Asynchronous Javascript and XML) 자바스크립트를 이용해 서버와 브라우저가 비동기방식으로 데이터를 교환할 수 있는 통신 기능 서버에서...","categories": ["javascript"],
        "tags": ["javascript","Ajax","Node.js","ECMAScript"],
        "url": "/javascript/2-javascript/",
        "teaser": null
      },{
        "title": "[typescript] 함수의 타입 정의",
        "excerpt":"1. 함수의 타이핑(Typing the function) // 1. 각 매개변수의 타입 입력, 괄호 뒤에는 함수가 반환하는 값의 타입을 입력한다. function add(num1: number, num2: number): number { return num1 + num2; } // 2. 아무것도 리턴하지 않으면 void를 입력하면 된다. function add2(num1: number, num2: number): void { console.log(num1 + num2); } 2....","categories": ["typescript"],
        "tags": ["typescript","function"],
        "url": "/typescript/function/",
        "teaser": null
      },{
        "title": "[typescript] interface",
        "excerpt":"인터페이스는 객체의 타입을 정의하기 위해 사용된다. 인터페이스 정의하기 interface Character { name: string age: number } 선택적 프로퍼티(Optional Properties) 사용하기 프로퍼티가 필수 사항이 아닐 때에는 ?를 붙여 표시한다. interface Character { name: string age: number height?: string //키를 Optional Properties로 처리 } let character: Character = { name: \"Jack\", age:...","categories": ["typescript"],
        "tags": ["typescript","interface"],
        "url": "/typescript/interface/",
        "teaser": null
      },{
        "title": "[Deep Dive]  3. 변수",
        "excerpt":"1. 변수의 정의와 사용하는 이유 변수의 의미 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 메모리 공간을 식별하기 위해 붙인 이름 변수를 사용하는 이유 기억하고 싶은 값을 메모리에 저장하고, 그 값을 다시 참조해서 재사용하기 위해 변수라는 메커니즘을 사용한다. 변수와 관련된 용어 변수 이름(변수명) 메모리 공간에 저장된 값을 식별할 수 있는...","categories": ["javascript"],
        "tags": ["javascript","variable"],
        "url": "/javascript/variable/",
        "teaser": null
      },{
        "title": "[Programmers] 8. 약수의 합 (javascript)",
        "excerpt":"🤔 문제 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요. 제한사항 n은 0 이상 3000이하인 정수입니다 입출력 예시 maps answer 12 28 5 6 의사코드 해당 수를 나눈 나머지가 0이 되는 숫자가 약수 1부터 n까지 1씩 증가시키면서 n을 해당 수로 나눈 나머지가 0일 때만 더해준다. 더한...","categories": ["programmers"],
        "tags": ["study","recursive","javascript","Lv.1"],
        "url": "/programmers/sum-of-divisor/",
        "teaser": null
      },{
        "title": "[Deep Dive]  4. 표현식",
        "excerpt":"1. 값 값 표현식이 평가되어 생성된 결과 평가 식을 해석해서 값을 생성하거나 참조하는 것 2. 표현식 표현식 값으로 평가될 수 있는 문 리터럴 사람이 이해할 수 있는 문자 혹은 약속된 기호를 사용해서 값을 생성하는 표기법(notation) 자바스크립트 엔진이 런타임에 리터럴을 평가해서 값을 생성한다. 리터럴도 값으로 평가되므로 표현식이다. 3. 문 토큰 문법적인...","categories": ["javascript"],
        "tags": ["javascript","expression"],
        "url": "/javascript/1-expression/",
        "teaser": null
      },{
        "title": "[Deep Dive]  5. 데이터 타입",
        "excerpt":"1. 타입(데이터 타입) 타입은 값의 종류를 말한다. ES6에서는 7개의 타입을 제공하며, 원시 타입과 객체 타입으로 분류할 수 있다. 원시 타입(primitive type) number javascript는 다른 언어와 달리 하나의 숫자 타입만 존재한다. 정수만을 위한 타입이 없어 모든 수를 실수로 처리한다. 양의 무한대(Infinity), 음의 무한대(-Infinity), 산술연산불가(NaN) 표현도 가능하다. NaN은 대소문자를 꼭 지켜야 한다....","categories": ["javascript"],
        "tags": ["javascript","type"],
        "url": "/javascript/2-type/",
        "teaser": null
      },{
        "title": "[Programmers] 9. 자릿수 더하기 (javascript)",
        "excerpt":"🤔 문제 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요. 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다. 제한사항 N의 범위 : 100,000,000 이하의 자연수 입출력 예시 maps answer 123 6 987 24 의사코드 Array.from() 메서드를 사용해서 N을...","categories": ["programmers"],
        "tags": ["study","recursive","javascript","Lv.1"],
        "url": "/programmers/place-value/",
        "teaser": null
      },{
        "title": "[Deep Dive]  6. 연산자",
        "excerpt":"연산자와 피연산자 연산자는 하나 이상의 표현식을 대상으로 산술, 할당, 비교 등을 수행하여 하나의 값을 만든다. 이때 대상이 되는 표현식이 피연산자이다. 피연산자는 값으로 평가될 수 있어야 한다. 연산자 표현식 연산자와 피연산자의 조합으로 이루어진 표현식이다. 피연산자와 마찬가지로 값으로 평가될 수 있어야 한다. 1. 산술 연산자 산술 연산자는 피연산자를 대상으로 수학적 계산을 수행해...","categories": ["javascript"],
        "tags": ["javascript","operator"],
        "url": "/javascript/operator/",
        "teaser": null
      },{
        "title": "[typescript] 리터럴, 유니온, 교차 타입",
        "excerpt":"리터럴 타입 리터럴 타입은 구체적인 문자열과 숫자 값을 타입으로 지정하여, 지정한 값만 사용할 수 있게 만든 타입이다. //const로 선언한 원시 값은 재할당이 불가능하다. // 리터럴 타입의 표현 방식은 const 키워드가 작동하는 방식과 유사하다. const userName1 = 'jack'; //let으로 선언한 값은 재할당이 가능하다. 이 경우 숫자도 함께 지정했기 때문에 숫자로 재할당이...","categories": ["typescript"],
        "tags": ["typescript","literal type","union type","intersection type"],
        "url": "/typescript/union-literal-intersection-types/",
        "teaser": null
      },{
        "title": "[Programmers] 10. 자연수 뒤집어 배열로 만들기 (javascript)",
        "excerpt":"🤔 문제 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다. 제한사항 n은 10,000,000,000이하인 자연수입니다. 입출력 예시 n return 12345 [5,4,3,2,1] 의사코드 빈 배열 생성 n을 배열로 만들기 배열의 앞쪽부터 하나씩 빼서 새로운 배열의 맨 앞에 넣기 제출한 답 function solution(n) { const...","categories": ["programmers"],
        "tags": ["study","recursive","javascript","Lv.1"],
        "url": "/programmers/1-natural-to-array/",
        "teaser": null
      },{
        "title": "[Programmers] 11. 문자열 내 p와 y의 개수 (javascript)",
        "excerpt":"🤔 문제 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 ‘p’의 개수와 ‘y’의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. ‘p’, ‘y’ 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다. 예를 들어 s가 “pPoooyY”면 true를 return하고 “Pyy”라면 false를 return합니다. 제한사항 문자열...","categories": ["programmers"],
        "tags": ["study","recursive","javascript","Lv.1"],
        "url": "/programmers/2-count-p-y/",
        "teaser": null
      },{
        "title": "[typescript] class",
        "excerpt":"클래스 클래스 정의하기 typescript에서 class를 선언할 때, 멤버 변수는 미리 선언해주어야 한다. title:string; public 혹은 readonly를 적어주는 방법도 있다 class Book { // 1. title:string; title: string; /* 생성자 */ constructor(title: string) { this.title = title; } /* 클래스 메서드*/ static create() {} /* 인스턴스 메서드*/ init() {} } //...","categories": ["typescript"],
        "tags": ["typescript","class","member visibility","abstract class"],
        "url": "/typescript/class/",
        "teaser": null
      },{
        "title": "[Deep Dive]  7. 제어문",
        "excerpt":"제어문은 조건에 따라 코드 블록을 실행하거나 반복 실행할 때 사용한다. 블록문 블록문(코드 블록, 블록)은 0개 이상의 문을 중괄호({})로 묶은 것을 말한다. 블록문은 자체 종결성을 가지기 때문에 끝에 세미콜론을 붙이지 않는다. 조건문 1. if…else 문 if (조건식) { //조건식이 true일 때 실행 } else { //조건식이 false일 때 실행 } 조건이...","categories": ["javascript"],
        "tags": ["javascript","control flow statement"],
        "url": "/javascript/control-flow-statement/",
        "teaser": null
      },{
        "title": "[Deep Dive]  DOM",
        "excerpt":"DOM은 노드들로 구성된 트리자료를 말한다. HTML 문서는 텍스트로 이루어져 있는데, 이 문서를 브라우저에 시각적으로 보여주려면 브라우저가 이해할 수 있게 변환해주어야 한다. HTML을 파싱하여 브라우저가 이해할 수 있도록 만들어진 트리구조가 DOM이다. DOM은 HTML 문서의 계층적 구조와 정보를 표현하며, 이를 제어할 수 있는 API(프로퍼티와 메서드)를 제공한다. 🤔 파싱? 파싱은 텍스트 문서의 문자들을...","categories": ["javascript"],
        "tags": ["javascript","DOM"],
        "url": "/javascript/1-DOM/",
        "teaser": null
      },{
        "title": "[Deep Dive] Event",
        "excerpt":"1. 이벤트 드리븐 프로그래밍 2. 이벤트 타입 3. 이벤트 핸들러 등록 이벤트 핸들러 어트리뷰트 방식 이벤트 핸들러 프로퍼티 방식 addEventListener 방식 4. 이벤트 핸들러 제거 5. 이벤트 객체 이벤트 객체의 상속 구조 이벤트 객체의 공통 프로퍼티 마우스 정보 취득 키보드 정보 취득 6. 이벤트 전파 7. 이벤트 위임 8. DOM...","categories": ["javascript"],
        "tags": ["javascript","event"],
        "url": "/javascript/2-Event/",
        "teaser": null
      },{
        "title": "[Programmers] 12. x만큼 간격이 있는 n개의 숫자 (javascript)",
        "excerpt":"🤔 문제 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요. 제한사항 x는 -10000000 이상, 10000000 이하인 정수입니다. n은 1000 이하인 자연수입니다. 입출력 예시 x n answer 2 5 [2,4,6,8,10] 4 3...","categories": ["programmers"],
        "tags": ["study","recursive","javascript","Lv.1"],
        "url": "/programmers/number-with-x-interval/",
        "teaser": null
      },{
        "title": "project setting",
        "excerpt":"초기 환경 설정 CRA &amp; typescript 설치 npx create-react-app &lt;프로젝트 이름&gt; --templage typescript styled-components 설치 npm i styled-components //type definition npm i -D @types/styled-components styled-reset 설치 및 적용 styled-reset 설치 npm i styled-reset styled-reset 적용 import { createGlobalStyle } from \"styled-components\" import reset from \"styled-reset\" const GlobalStyles = createGlobalStyle`${reset}` function...","categories": ["notes"],
        "tags": ["react","typesciprt","redux"],
        "url": "/notes/setting/",
        "teaser": null
      },{
        "title": "[Programmers] 13. 정수 제곱근 판별 (javascript)",
        "excerpt":"🤔 문제 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다. n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요. 제한사항 n은 1이상, 50000000000000 이하인 양의 정수입니다. 입출력 예시 n return 121 144 3 -1 의사코드...","categories": ["programmers"],
        "tags": ["study","recursive","javascript","Lv.1"],
        "url": "/programmers/distinguish-sqrt/",
        "teaser": null
      },{
        "title": "createBrowserRouter를 이용한 라우팅 적용",
        "excerpt":"createBrowserRouter(), RouterProvider 먼저 라우터를 만들고 첫 번째 루트를 구성해야 한다. createBrowserRouter()함수로 생성한 router를 RouterProvider 컴포넌트에 props로 넣어준다. //App.js import { createBrowserRouter, RouterProvider } from \"react-router-dom\"; const router = createBrowserRouter([]); ReactDOM.createRoot(document.getElementById(\"root\")).render( &lt;RouterProvider router={router} /&gt; ); 라우터를 분리해서 작성할 수도 있다. index.js import ReactDOM from 'react-dom/client' import App from './App' import './index.css'...","categories": ["react"],
        "tags": ["react-router-dom","react","createBrowserRouter"],
        "url": "/react/react-router/",
        "teaser": null
      },{
        "title": "[Deep Dive] 8. object",
        "excerpt":"1. 객체 객체 : 0개 이상의 프로퍼티로 구성된 집합 프로퍼티 : 객체의 상태를 나타내는 값으로, 키와 값의 쌍으로 구성된다. 2. 객체 생성 객체를 만드는 방법은 객체 리터럴을 사용하는 방법과 Object 생성자 함수, 클래스 등을 이용하는 방법이 있다. 객체 리터럴을 사용하여 객체 만들기 리터럴은 값을 생성하기 위한 표기법이고, 객체 리터럴은 객체를...","categories": ["javascript"],
        "tags": ["javascript","object"],
        "url": "/javascript/1-object/",
        "teaser": null
      },{
        "title": "[Deep Dive] 9. 원시 값과 객체의 차이점",
        "excerpt":"원시값과 객체의 차이점 변경 불가능한 값 vs. 변경 가능한 값 원시 값은 변경 불가능한 값이고, 객체는 변경 가능한 값이다. 여기서 주의해야 할 점은 변수와 값을 구분해서 생각해야 한다는 것이다. let a = 1 // 메모리 공간을 확보하고 1을 저장한 후 그 공간에 a라는 이름을 붙인다. a = 2 // 새로운...","categories": ["javascript"],
        "tags": ["javascript","primitive type","object/reference type"],
        "url": "/javascript/2-primitive_object/",
        "teaser": null
      },{
        "title": "innerHTML",
        "excerpt":"innerHTML 요소 안에 포함된 HTML 또는 XML 마크업을 가져오거나 설정함 ... &lt;body&gt; &lt;div id=\"insert\"&gt;text&lt;/div&gt; &lt;/body&gt; &lt;script&gt; const $insert = document.getElementById(\"insert\"); console.log($insert.innerHTML); // text &lt;div&gt;inner&lt;/div&gt; &lt;/script&gt; closest() 주어진 CSS 선택자와 일치하는 요소를 찾을 때까지 자기 자신을 포함해 위쪽을 순회 closest(selectors); data-* 속성 사용자 정의 속성 /* &lt;태그 data-*='값'&gt;&lt;/태그&gt; *에는 대문자를 포함할...","categories": ["note"],
        "tags": ["javascript"],
        "url": "/note/js-test-1/",
        "teaser": null
      },{
        "title": "login",
        "excerpt":"로그인과 관련된 기술 일반적으로 로그인 구현 방법 백엔드에서 일어나는 일 맛보기 인프라 관점에서 생각해보기 여러가지 실습과 질문/답변 로그인의 기술적 정의와 실제 서비스에서의 사용도 직접 로그인 화면과 mock api 세팅 구성해 본 로그인 로직이 실제 서비스에 적용되기 위해 필요한 부분 로그인이란? 시스템에 엑세스(접근)하기 위해 식별자 정보를 입력하는 것 시스템 로그를 남긴다(의심스러운...","categories": ["note"],
        "tags": ["login"],
        "url": "/note/login/",
        "teaser": null
      },{
        "title": "Lighthouse로 성능 검사하기",
        "excerpt":"Lighthouse Lighthouse는 사이트를 검사해서 성능 측정 결과와 개선책을 제공해주는 도구이다. 크롬 개발자 도구에서 바로 사용할 수 있다. 옵션을 선택 후 Analyze page load를 누르면 분석을 시작한다. Lighthouse 분석 항목 Mode (택 1) 1. Navigation 초기 페이지를 불러올 때 발생하는 성능을 분석한다. 2. Timespan 사용자가 지정한 시간 동안 발생한 성능을 분석한다....","categories": ["notes"],
        "tags": ["Lighthouse"],
        "url": "/notes/lighthouse/",
        "teaser": null
      },{
        "title": "[Programmers] 14. 행렬의 덧셈 (javascript)",
        "excerpt":"🤔 문제 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요. 제한사항 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다. 입출력 예시 arr1 arr2 return [[1,2],[2,3]] [[3,4],[5,6]] [[4,6],[7,9]] [[1],[2]]...","categories": ["programmers"],
        "tags": ["study","recursive","javascript","Lv.1"],
        "url": "/programmers/1-matrix_addition/",
        "teaser": null
      },{
        "title": "[Programmers] 15. 직사각형 별찍기 (javascript)",
        "excerpt":"🤔 문제 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다. 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요. 제한사항 n과 m은 각각 1000 이하인 자연수입니다. 입출력 예시 입력 5 3 출력 ***** ***** ***** 의사코드 행 개수만큼 별을 추가한다 행의 마지막이면 스페이스를 추가한다 열...","categories": ["programmers"],
        "tags": ["study","recursive","javascript","Lv.1"],
        "url": "/programmers/2-rectangle-star/",
        "teaser": null
      },{
        "title": "[Programmers] 16. 최대공약수와 최소공배수 (javascript)",
        "excerpt":"🤔 문제 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다. 제한사항 두 수는 1이상 1000000이하의 자연수입니다. 입출력 예시 n m return...","categories": ["programmers"],
        "tags": ["study","recursive","javascript","Lv.1"],
        "url": "/programmers/3-gcdlcm/",
        "teaser": null
      },{
        "title": "[baekjoon] 2231. 분해합(node.js)",
        "excerpt":"🤔 문제 어떤 자연수 N이 있을 때, 그 자연수 N의 분해합은 N과 N을 이루는 각 자리수의 합을 의미한다. 어떤 자연수 M의 분해합이 N인 경우, M을 N의 생성자라 한다. 예를 들어, 245의 분해합은 256(=245+2+4+5)이 된다. 따라서 245는 256의 생성자가 된다. 물론, 어떤 자연수의 경우에는 생성자가 없을 수도 있다. 반대로, 생성자가 여러...","categories": ["baekjoon"],
        "tags": ["study","분해합","완전탐색","브론즈2"],
        "url": "/baekjoon/1/",
        "teaser": null
      },{
        "title": "[baekjoon] 2309. 일곱 난쟁이(node.js)",
        "excerpt":"🤔 문제 왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다. 일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다. 아홉 명의 난쟁이는 모두 자신이 “백설 공주와 일곱 난쟁이”의 주인공이라고 주장했다. 뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을 기억해 냈다. 아홉...","categories": ["baekjoon"],
        "tags": ["study","일곱 난쟁이","완전탐색","브론즈1"],
        "url": "/baekjoon/2/",
        "teaser": null
      },{
        "title": "[baekjoon] 10448. 유레카 이론(node.js)",
        "excerpt":"🤔 문제 자연수가 주어졌을 때, 그 정수가 정확히 3개의 삼각수의 합으로 표현될 수 있는지 없는지를 판단해주는 프로그램을 만들어라. 단, 3개의 삼각수가 모두 달라야 할 필요는 없다. 제한사항 시간 제한 : 1초 메모리 제한 : 256 MB 입력 프로그램은 표준입력을 사용한다. 테스트케이스의 개수는 입력의 첫 번째 줄에 주어진다. 각 테스트케이스는 한...","categories": ["baekjoon"],
        "tags": ["study","유레카 이론","완전탐색","브론즈1"],
        "url": "/baekjoon/3/",
        "teaser": null
      },{
        "title": "[baekjoon] 1436. 영화감독 숌(node.js)",
        "excerpt":"🤔 문제 666은 종말을 나타내는 수라고 한다. 따라서, 많은 블록버스터 영화에서는 666이 들어간 제목을 많이 사용한다. 영화감독 숌은 세상의 종말 이라는 시리즈 영화의 감독이다. 조지 루카스는 스타워즈를 만들 때, 스타워즈 1, 스타워즈 2, 스타워즈 3, 스타워즈 4, 스타워즈 5, 스타워즈 6과 같이 이름을 지었고, 피터 잭슨은 반지의 제왕을 만들 때,...","categories": ["baekjoon"],
        "tags": ["study","영화감독 숌","완전탐색","실버5"],
        "url": "/baekjoon/4/",
        "teaser": null
      },{
        "title": "[baekjoon] 1018. 체스판 다시 칠하기(node.js)",
        "excerpt":"🤔 문제 지민이는 자신의 저택에서 MN개의 단위 정사각형으로 나누어져 있는 M×N 크기의 보드를 찾았다. 어떤 정사각형은 검은색으로 칠해져 있고, 나머지는 흰색으로 칠해져 있다. 지민이는 이 보드를 잘라서 8×8 크기의 체스판으로 만들려고 한다. 체스판은 검은색과 흰색이 번갈아서 칠해져 있어야 한다. 구체적으로, 각 칸이 검은색과 흰색 중 하나로 색칠되어 있고, 변을 공유하는...","categories": ["baekjoon"],
        "tags": ["study","체스판 다시 칠하기","완전탐색","실버4"],
        "url": "/baekjoon/5/",
        "teaser": null
      },{
        "title": "[Deep Dive] 10. 함수",
        "excerpt":"함수 동일한 작업을 반복해야 할 때 함수를 사용한다. 함수를 이용하면 코드를 다시 사용할 수 있기 때문에 유지보수하기도 편하고 실수를 줄일 수 있다. 함수 리터럴 함수 리터럴을 이용하여 함수를 생성할 수 있다. 함수 리터럴은 function 키워드, 함수 이름, 매개변수, 함수 몸체로 구성된다. 함수 이름 함수 이름은 식별자이다. 따라서 식별자 네이밍 규칙을...","categories": ["javascript"],
        "tags": ["javascript","function"],
        "url": "/javascript/function/",
        "teaser": null
      },{
        "title": "[Deep Dive] 11. 스코프",
        "excerpt":"스코프 스코프는 변수나 함수가 유효한 범위를 말한다. 만약 같은 이름의 변수가 두 개인 경우, 그 변수를 참조할 때 둘 중 어느 변수를 참조할 지 결정해야 한다. 이때 자바스크립트 엔진은 스코프를 통해 어떤 변수를 참조할 지 결정한다. let name = \"jack\" function getName() { let name = \"an\" console.log(\"local\", name) //...","categories": ["javascript"],
        "tags": ["javascript","scope"],
        "url": "/javascript/scope/",
        "teaser": null
      },{
        "title": "[Programmers] 17. 삼총사 (javascript)",
        "excerpt":"🤔 문제 한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다. 이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다. 예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때, 첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로...","categories": ["programmers"],
        "tags": ["study","recursive","javascript","Lv.1"],
        "url": "/programmers/three-musketeers/",
        "teaser": null
      },{
        "title": "[Programmers] 18. 삼진법 뒤집기 (javascript)",
        "excerpt":"🤔 문제 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요. 제한사항 n은 1 이상 100,000,000 이하인 자연수입니다. 입출력 예시 n result 45 7 2 229 의사코드 toString()에 매개변수를 넣을 경우 매개변수에 넣은 진수로 변환이 가능하다 parseInt()의 두 번째...","categories": ["programmers"],
        "tags": ["study","recursive","javascript","Lv.1"],
        "url": "/programmers/reverse-ternary/",
        "teaser": null
      },{
        "title": "[Programmers] 19. 이상한 문자 만들기 (javascript)",
        "excerpt":"🤔 문제 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요. 제한사항 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다. 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로...","categories": ["programmers"],
        "tags": ["study","recursive","javascript","Lv.1"],
        "url": "/programmers/1-weird-string/",
        "teaser": null
      },{
        "title": "[Programmers] 20. 예산 (javascript)",
        "excerpt":"🤔 문제 S사에서는 각 부서에 필요한 물품을 지원해 주기 위해 부서별로 물품을 구매하는데 필요한 금액을 조사했습니다. 그러나, 전체 예산이 정해져 있기 때문에 모든 부서의 물품을 구매해 줄 수는 없습니다. 그래서 최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 합니다. 물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해...","categories": ["programmers"],
        "tags": ["study","recursive","javascript","Lv.1"],
        "url": "/programmers/2-budget/",
        "teaser": null
      },{
        "title": "[Programmers] 21. 시저 암호 (javascript)",
        "excerpt":"🤔 문제 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 “AB”는 1만큼 밀면 “BC”가 되고, 3만큼 밀면 “DE”가 됩니다. “z”는 1만큼 밀면 “a”가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요. 제한사항 공백은 아무리...","categories": ["programmers"],
        "tags": ["study","recursive","javascript","Lv.1"],
        "url": "/programmers/3-caesar-cipher/",
        "teaser": null
      },{
        "title": "[Deep Dive] 12. 프로퍼티 어트리뷰트",
        "excerpt":"1. 내부 슬롯, 내부 메서드 내부 슬롯, 내부 메서드? 자바스크립트 엔진의 내부 로직으로, 이중 대괄호([[ ]])로 감싼 것들을 말한다. 보통은 접근이 불가능하다. 하지만 일부의 내부 슬롯과 메서드들은 간접적으로 접근할 수 있다. 예를 들어, [[Prototype]] 내부 슬롯의 경우, __proto__로 접근이 가능하다. 2. 프로퍼티 어트리뷰트 JS 엔진이 관리하는 meta-property를 말한다. 프로퍼티 생성...","categories": ["javascript"],
        "tags": ["javascript","property attribute"],
        "url": "/javascript/1-property-attribute/",
        "teaser": null
      },{
        "title": "[Deep Dive] 13. 생성자 함수에 의한 객체 생성",
        "excerpt":"Object 생성자 함수 new 연산자와 Object 생성자 함수를 이용하여 객체를 만들 수 있다. 이때 만들어지는 객체는 빈 객체이다. const character = new Object() console.log(character) // {} 만들어진 객체에 프로퍼티나 메서드를 추가할 수 있다. character.name = \"jack\" //프로퍼티 추가 character.go = () =&gt; console.log(\"go!\") // 메서드 추가 console.log(character) //{name: 'jack', go:...","categories": ["javascript"],
        "tags": ["javascript"],
        "url": "/javascript/2-new-Object/",
        "teaser": null
      },{
        "title": "[Programmers] 22. 최소직사각형 (javascript)",
        "excerpt":"🤔 문제 명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다. 이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다. 아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다. 명함 번호...","categories": ["programmers"],
        "tags": ["study","recursive","javascript","Lv.1"],
        "url": "/programmers/min-rectangle/",
        "teaser": null
      },{
        "title": "[Programmers] 23. 비밀 지도 (javascript)",
        "excerpt":"🤔 문제 네오는 평소 프로도가 비상금을 숨겨놓는 장소를 알려줄 비밀지도를 손에 넣었다. 그런데 이 비밀지도는 숫자로 암호화되어 있어 위치를 확인하기 위해서는 암호를 해독해야 한다. 다행히 지도 암호를 해독할 방법을 적어놓은 메모도 함께 발견했다. 지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 “공백”(“ “) 또는 “벽”(“#”) 두 종류로 이루어져...","categories": ["programmers"],
        "tags": ["study","recursive","javascript","Lv.1"],
        "url": "/programmers/secret-map/",
        "teaser": null
      },{
        "title": "[React Discord Clone] 1. 사이드바 컴포넌트 만들기 ",
        "excerpt":"   컴포넌트 구조   사이드바 컴포넌트의 대략적인 구조는 다음과 같다.       ","categories": ["lecture"],
        "tags": ["udemy","clone","sidebar","html","css"],
        "url": "/lecture/discord-clone-1/",
        "teaser": null
      },{
        "title": "리액트에 Sass 설치하기",
        "excerpt":"Sass 설치하기   npm i node-sass   npm node-sass     확장자 변경하기   확장자를 css가 아니라 scss로 바꿔준다.      마찬가지로 import할 때도 css에서 scss로 변경한다.     ","categories": ["notes"],
        "tags": ["Sass"],
        "url": "/notes/sass/",
        "teaser": null
      },{
        "title": "[typescript] 제네릭(Generics)",
        "excerpt":"제네릭 타입을 함수의 파라미터처럼 사용하게 해주는 타입을 말한다. 제네릭 사용방법 function getInfo&lt;T&gt;(info: T): T { return info } /* 함수를 호출할 때 타입 정의 */ getInfo&lt;string&gt;(\"jack\") getInfo&lt;number&gt;(10) 제네릭은 함수를 호출할 때 타입이 동적으로 결정된다. 🤔 any를 사용하면 되지 않을까? 제네릭을 사용하지 않더라도 any 타입을 사용하면 여러 타입을 받을 수 있다....","categories": ["typescript"],
        "tags": ["typescript","generics"],
        "url": "/typescript/generics/",
        "teaser": null
      },{
        "title": "[Programmers] 24. 문자열 내 마음대로 정렬하기 (javascript)",
        "excerpt":"🤔 문제 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 [“sun”, “bed”, “car”]이고 n이 1이면 각 단어의 인덱스 1의 문자 “u”, “e”, “a”로 strings를 정렬합니다. 제한 조건 strings는 길이 1 이상, 50이하인 배열입니다. strings의 원소는 소문자 알파벳으로 이루어져...","categories": ["programmers"],
        "tags": ["study","recursive","javascript","Lv.1"],
        "url": "/programmers/1-sort-string/",
        "teaser": null
      },{
        "title": "[Programmers] 25. 숫자 문자열과 영단어 (javascript)",
        "excerpt":"🤔 문제 네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다. 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다. 1478 → “one4seveneight” 234567 → “23four5six7” 10203 → “1zerotwozero3” 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열...","categories": ["programmers"],
        "tags": ["study","recursive","javascript","Lv.1"],
        "url": "/programmers/2-string-number-words/",
        "teaser": null
      },{
        "title": "[Programmers] 26. k번째 수 (javascript)",
        "excerpt":"🤔 문제 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다. 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면 array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다. 1에서 나온 배열을 정렬하면 [2, 3, 5,...","categories": ["programmers"],
        "tags": ["study","recursive","javascript","Lv.1"],
        "url": "/programmers/3-kth/",
        "teaser": null
      },{
        "title": "[Programmers] 27. 두 개 뽑아서 더하기 (javascript)",
        "excerpt":"🤔 문제 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요. 제한 조건 numbers의 길이는 2 이상 100 이하입니다. numbers의 모든 수는 0 이상 100 이하입니다. 입출력 예시 numbers result [2,1,3,4,1] [2,3,4,5,6,7]...","categories": ["programmers"],
        "tags": ["study","recursive","javascript","Lv.1"],
        "url": "/programmers/4-two-sum/",
        "teaser": null
      },{
        "title": "[Programmers] 28. 크기가 작은 부분 문자열 (javascript)",
        "excerpt":"🤔 문제 숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서, 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요. 예를 들어, t=”3141592”이고 p=”271” 인 경우, t의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다. 이 문자열이 나타내는...","categories": ["programmers"],
        "tags": ["study","recursive","javascript","Lv.1"],
        "url": "/programmers/5-small-part-string/",
        "teaser": null
      },{
        "title": "[Programmers] 29. 콜라 문제 (javascript)",
        "excerpt":"🤔 문제 오래전 유행했던 콜라 문제가 있습니다. 콜라 문제의 지문은 다음과 같습니다. 정답은 아무에게도 말하지 마세요. 콜라 빈 병 2개를 가져다주면 콜라 1병을 주는 마트가 있다. 빈 병 20개를 가져다주면 몇 병을 받을 수 있는가? 단, 보유 중인 빈 병이 2개 미만이면, 콜라를 받을 수 없다. 문제를 풀던 상빈이는 콜라...","categories": ["programmers"],
        "tags": ["study","recursive","javascript","Lv.1"],
        "url": "/programmers/coke/",
        "teaser": null
      },{
        "title": "Color Picker",
        "excerpt":"개발할 때 유용한 구글 확장 기능들   브라우저의 색상 값을 얻을 수 있는 color picker         구글 웹 스토어로 들어간다.   color picker 검색   Live Color Picker 추가   color picker를 선택하고 원하는 색상을 더블클릭하면 색상값이 복사된다  ","categories": [],
        "tags": [],
        "url": "/color-picker/",
        "teaser": null
      },{
        "title": "Material Ui",
        "excerpt":"material-ui를 이용하여 아이콘 사용하기   설치하기   npm install @mui/material @emotion/react @emotion/styled npm install @mui/icons-material   참고   아이콘 검색      여기에서 원하는 아이템을 검색           import문 복사           원하는 곳에서 사용       ","categories": [],
        "tags": [],
        "url": "/material-ui/",
        "teaser": null
      },{
        "title": "개발할 때 유용한 vscode extension",
        "excerpt":"TODO Highlight TODO Highlight를 설치하고 다음과 같이 TODO:를 입력하면 하이라이트가 자동으로 만들어진다. 이때 기본적으로 Todo:,TODO : 처럼 소문자로 입력하거나 콜론을 띄어 쓰면 인식되지 않는다. 만약 다른 단어나 스타일을 적용하고 싶으면 설정을 바꿔준다. //settings.json \"todohighlight.defaultStyle\": { //원하는 디폴트 설정 }, \"todohighlight.keywords\": [ \"DEBUG:\", //디폴트로 설정할 키워드들 ... { \"text\": \"REVIEW:\", //키워드별로...","categories": ["notes"],
        "tags": ["vscode extension","TODO Highlight"],
        "url": "/notes/vsc-extension/",
        "teaser": null
      },{
        "title": "[Deep Dive] 14. 함수 객체의 프로퍼티",
        "excerpt":"일급 객체 함수는 일급 객체이다. 그래서 객체처럼 사용할 수 있다. 객체처럼 사용할 수 있다는 건 값처럼 사용할 수 있다는 뜻이고, 값처럼 사용한다는 의미는 변수에 할당하거나, 객체에 저장하거나, 매개변수로 사용할 수도 있다는 뜻이다. //함수를 변수에 할당할 수 있다. const sum = (a, b) =&gt; { return a + b } console.log(typeof...","categories": ["javascript"],
        "tags": ["javascript","function"],
        "url": "/javascript/first-class-object/",
        "teaser": null
      },{
        "title": "Font",
        "excerpt":"구글 폰트 눈누  ","categories": [],
        "tags": [],
        "url": "/font/",
        "teaser": null
      },{
        "title": "[한입 크기로 잘라 먹는 리액트] 자바스크립트 기초 1 ",
        "excerpt":"이전에 한입 크기로 잘라 먹는 리액트(React.js)라는 강의를 수강하면서 개념 부분보다는 실제 리액트 프로젝트 만들기에만 집중했던 기억이 있다. 최근 들어 기초 개념을 정리해야 할 필요성을 느끼고 있는데 udemy 기술 블로그 챌린지를 하길래 바로 신청했다! 챌린지를 통해 5주간 강의를 들으면서 자바스크립트 개념 복습 + 전에 만든 감성 일기장 업그레이드를 진행하면서 블로그에 정리할...","categories": ["lecture"],
        "tags": ["udemy","javascript","variable"],
        "url": "/lecture/javascript_1/",
        "teaser": null
      },{
        "title": "[한입 크기로 잘라 먹는 리액트] 자바스크립트 기초 2 ",
        "excerpt":"1. 함수 함수가 왜 필요할까? 함수는 같은 동작을 하는 유사한 코드의 중복을 줄이기 위해 사용한다. 먼저 함수를 사용하지 않고 직사각형의 넓이를 구하는 식을 만들어보자. let width1 = 10 let height1 = 10 let area1 = width1 * height1 console.log(area1) //100 마찬가지로 길이가 다른 직사각형을 만드는 식도 만들어보자. let width2 =...","categories": ["lecture"],
        "tags": ["udemy","javascript"],
        "url": "/lecture/javascript_2/",
        "teaser": null
      },{
        "title": "[한입 크기로 잘라 먹는 리액트] 자바스크립트 기초 3 ",
        "excerpt":"1. 객체 객체는 원시형과 달리 여러가지 데이터를 넣을 수 있는 자료형이다. 객체를 만드는 방법 객체를 만드는 방법에는 크게 두 가지가 있다. let personA = new Object() // Object 생성자를 이용하는 방법 let personB = {} // 객체 리터럴을 이용하는 방법 let personC = { key: \"value\", //프로퍼티(속성) key2: \"value2\", }...","categories": ["lecture"],
        "tags": ["udemy","javascript"],
        "url": "/lecture/javascript_3/",
        "teaser": null
      },{
        "title": "[한입 크기로 잘라 먹는 리액트] 자바스크립트 응용 1 ",
        "excerpt":"1. Truthy &amp; Falsy 자바스크립트는 자기만의 기준으로 값을 true나 false로 분류한다. if문이나 for문 같은 제어문, 삼항 조건 연산자의 조건식은 불리언 값으로 표현되어야 한다. 이때 불리언 타입이 아닌 값을 Truthy나 Falsy 값으로 구분하여, Truthy 값은 true로, Falsy 값은 false로 암묵적으로 타입을 바꿔버린다. Truthy 값 [], {}, 비어있지 않은 문자열, 숫자(Infinity 포함)...","categories": ["lecture"],
        "tags": ["udemy","javascript"],
        "url": "/lecture/javascript_4/",
        "teaser": null
      },{
        "title": "[한입 크기로 잘라 먹는 리액트] 자바스크립트 응용 2 ",
        "excerpt":"1. 비구조화 할당(구조분해할당) 배열의 비구조화 할당 배열의 요소를 하나씩 꺼내서 변수를 선언하는 방법은 이렇다. let arr = [\"one\", \"two\", \"three\"] let one = arr[0] let two = arr[1] let three = arr[2] 이때 비구조화 할당을 사용하면 위의 할당 과정을 한 줄로 줄일 수 있다! let [one, two, three] = arr...","categories": ["lecture"],
        "tags": ["udemy","javascript"],
        "url": "/lecture/javascript_5/",
        "teaser": null
      },{
        "title": "[한입 크기로 잘라 먹는 리액트] 자바스크립트 응용 3 ",
        "excerpt":"1. 동기 &amp; 비동기 동기적 방식은 앞의 작업이 끝나기를 기다렸다가, 뒤의 작업을 이어서 하는 방식을 말한다. 그리고 작업이 스레드에서 수행되고 있을 때, 다른 작업을 동시에 할 수 없는 방식을 블로킹 방식이라고 한다. 동기적 방식의 단점은 앞의 작업이 오래 걸릴 때, 그 다음 작업은 시작도 못하기 때문에 하염없이 기다려야 한다는 것이다....","categories": ["lecture"],
        "tags": ["udemy","javascript"],
        "url": "/lecture/javascript_6/",
        "teaser": null
      },{
        "title": "[Mini Project] wanted challenge  1. 회원가입 구현하기",
        "excerpt":"2023년 원티드 프리온보딩 프론트엔드 인턴십 챌린지 사전과제를 진행한 내용을 기록해보았다. 과제는 CRA를 이용하여 로그인과 회원가입, TODO LIST를 구현하는 것이었다. 회원가입 //Signup.js &lt;div&gt; &lt;form onSubmit={isUser ? SigninHandler : SignupHandler}&gt; &lt;input data-testid=\"email-input\" placeholder=\"email\" name=\"email\" /&gt; &lt;input data-testid=\"password-input\" placeholder=\"password\" name=\"password\" /&gt; {isUser ? ( &lt;button data-testid=\"signin-button\" type=\"submit\"&gt; 로그인 &lt;/button&gt; ) : ( &lt;button...","categories": ["mini project"],
        "tags": ["project","wanted challenge","react"],
        "url": "/mini%20project/sign-up/",
        "teaser": null
      },{
        "title": "[Mini Project] 감성 일기장에 타입스크립트 적용하기 1. typescript 설치하기",
        "excerpt":"한입 크기로 잘라 먹는 리액트(React.js)를 수강하면서 만들었던 감성 일기장을 타입스크립트로 마이그레이션 해보려고 한다. 강의에서 만들었던 감성 일기장은 여기에 배포해두었다. 타입스크립트 설치하기 create-react-app을 이용하여 새로 프로젝트를 생성하면서 타입스크립트를 설치할 땐 이렇게 한다. npx create-react-app my-app --template typescript --template는 CRA에서 제공하는 기본 템플릿 대신 다른 템플릿을 사용할 수 있도록 해주는 옵션이다. 여기서는...","categories": ["mini project"],
        "tags": ["project","wanted challenge","react","typescript"],
        "url": "/mini%20project/emotion-diary-1/",
        "teaser": null
      },{
        "title": "Todolist",
        "excerpt":"   //NOTE:로그인 후 페이지 이동 직후 create 명령이 작동하지 않음. get요청도 마찬가지   export const get_todos = async () =&gt; { const access_token = getTokenToLocalStorage(‘access_token’) //추가 const get_todos_res = await axios.get(${BASE_URL}/todos, { headers: { Authorization: Bearer ${access_token} } }) return get_todos_res.data }   전역에서 선언해서 사용하던 access_token을 함수 내에서 사용하니까 잘 받아온다.  ","categories": [],
        "tags": [],
        "url": "/todolist/",
        "teaser": null
      }]
