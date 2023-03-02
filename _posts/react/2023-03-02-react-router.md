---
title: "createBrowserRouter를 이용한 라우팅 적용"
excerpt: "react-router-dom V6의 createBrowserRouter 적용해보기"

categories:
  - react
tags:
  - [react-router-dom, react, createBrowserRouter]

toc: true
toc_sticky: true

date: 2023-03-02
last_modified_at: 2023-03-02
---

## createBrowserRouter(), RouterProvider

먼저 라우터를 만들고 첫 번째 루트를 구성해야 한다. `createBrowserRouter()`함수로 생성한 `router`를 `RouterProvider` 컴포넌트에 `props`로 넣어준다.

```javascript
//App.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
```

라우터를 분리해서 작성할 수도 있다.

### App.js

```javascript
import { RouterProvider } from "react-router-dom";
import router from "./router/Router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

### router.js

```javascript
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([]);

export default router;
```

## path, element, children

`path`와 `element`를 이용해서 경로와 컴포넌트를, `children` 속성으로 중첩된 라우터를 배열 형식으로 추가할 수 있다.

### router.js

```javascript
const router = createBrowserRouter([
  {
    path: "/",
    //렌더링되는 요소
    element: <Layout />,
    children: [
      {
        path: "a",
        element: <PageA />,
      },
    ],
  },
]);

export default router;
```

## Outlet

`Outlet`은 부모 루트가 자식 루트를 렌더링하도록 해준다.

### Layout.js

```javascript
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <div className="content">
        <Nav />
        // url이 '/a'일 때, 위에서 설정한 자식 요소인 <PageA> 컴포넌트가 여기서 출력된다.
        <Outlet />
      </div>
    </>
  )
}
export default Layout
```

## loader

라우트가 렌더링되기 전에 loader를 이용하여 정의한 함수를 실행할 수 있다.

### loader.js

```javascript
import { redirect } from "react-router-dom";

export const Loader = () => {
  const isLogged = localStorage.getItem("logIn");

  if (!isLogged) return redirect("/login");

  return null;
};

export const LoginLoader = () => {
  const isLogged = localStorage.getItem("logIn");

  if (isLogged) return redirect("/");

  return null;
};
```

loader 함수를 미리 정의해두었다. localStoragedp logIn 이라는 이름의 키의 존재 여부로 redirect를 실행하는 함수이다.

### router.js

```javascript
import { Loader, LoginLoader } from "../Loader/loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "a",
        element: <PageA />,
        loader: Loader,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
    loader: LoginLoader,
  },
]);

export default router;
```

라우터마다 적용할 로더를 설정하면 요소가 렌더링되기 전 함수가 실행된다.
