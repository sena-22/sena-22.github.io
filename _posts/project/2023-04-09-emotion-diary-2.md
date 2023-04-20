---
title: "[Mini Project] 감성 일기장 업그레이드 2. App.js(context API) typing"
excerpt: "wanted challenge"

categories:
  - mini project
tags:
  - [project, wanted challenge, react, typescript]

toc: true
toc_sticky: true

date: 2023-04-09
last_modified_at: 2023-04-09
---

![표지](https://user-images.githubusercontent.com/110877564/230750510-b1638c6d-45a8-4c42-9567-548e6ec473c5.png)

이번 포스팅에서는 `App.js`를 `App.tsx`로 바꾸고, 발생하는 오류를 기준으로 타입을 만들어주었다.

감성 일기장의 `App()`은 크게 두 가지 기능을 가지고 있다. 첫번째는 `라우팅`이고, 두번째는 데이터를 전역에서 관리하기 위한 `context` 설정이다. `라우팅` 부분은 따로 변경할 점은 없었고, 주로 `context provider`와 관련한 함수들에서 에러가 발생했다.타입을 설정하다보니 `context API`도 잘 기억이 안 나서 같이 복습했다.

### return

```typescript
// App.tsx
<DiaryStateContext.Provider value={data}>
  <DiaryDispatchContext.Provider value={{onCreate, onRemove, onEdit}}>
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/new" element={<New />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="/diary/:id" element={<Diary />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  </DiaryDispatchContext.Provider>
</DiaryStateContext.Provider>
```

리턴 부분은 이렇게 Provider들이 전체를 감싸면서 상태를 전역에서 관리할 수 있도록 제공하고, 안쪽에서 라우팅이 되고 있다.

### typing

```typescript
interface DiaryItem {
  id?: number
  date: string
  content: string
  emotion: string
  text?: string
}
```

`DiaryItem`은 각 다이어리에 들어가야 하는 정보들의 타입을 지정해주었다.

```typescript
type Action =
  | {type: "INIT"; data: DiaryItem[]}
  | {type: "CREATE"; data: DiaryItem}
  | {type: "REMOVE"; targetId: number}
  | {type: "EDIT"; data: DiaryItem}
```

`Action`은 타입에 따라 들어가는 데이터를 유니온 타입으로 지정했다. 유니온 타입은 `OR` 연산자라고 생각하면 된다. ([유니온 타입](https://joshua1988.github.io/ts/guide/operator.html#union-type))
`DiaryItem[]`은 `DiaryItem`이 배열 형태로 저장됨을 뜻한다.

```typescript
type TodoState = DiaryItem[]

type TodoDispatch = {
  onCreate: (data: DiaryItem) => void
  onRemove: (targetId: number) => void
  onEdit: (data: DiaryItem) => void
}
```

`TodoState`는 `DiaryItem[]`을 그냥 사용해도 무방하지만, 가독성이 더 좋을 것 같아 나눠서 작성했다.

### createContext

```typescript
export const DiaryStateContext = createContext<TodoState>([])
export const DiaryDispatchContext = createContext<TodoDispatch>({
  onCreate: () => {},
  onRemove: () => {},
  onEdit: () => {},
})
```

`createContext`는 `Context`객체를 만든다. 인자로 초기값을 넣어주는데, Provider에서 value prop을 설정하지 않았을 때 사용된다.

### Context.Provider

```typescript
<DiaryStateContext.Provider value={data}>
```

Provider로 감싼 하위 컴포넌트들에게 상태 변화를 알려주는 역할을 한다. 여기서 제공하는 것은 value prop에 설정해 둔 값이다.

### useReducer

```typescript
const [data, dispatch] = useReducer(reducer, [])
```

위에서 value로 설정한 데이터는 `useReducer`를 이용해서 설정한다.

`useReducer`는 `reducer`를 받아서, `state`(여기서는 `data`)와 `dispatch`를 반환하는 함수이다.
이때 `reducer`는 `(state, action) => newState` 형태로 받는다.

### reducer

```typescript
const reducer: React.Reducer<DiaryItem[], Action> = (state, action) => {
  let newState: DiaryItem[] = []
  switch (action.type) {
    case "INIT": {
      return action.data
    }
    case "CREATE": {
      newState = [action.data, ...state]
      break
    }
    case "REMOVE": {
      newState = state.filter((it: {id: number}) => it.id !== action.targetId)
      break
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? {...action.data} : it
      )
      break
    }
    default:
      return state
  }
  localStorage.setItem("diary", JSON.stringify(newState)) //서버에  요청
  return newState
}
```

`React.Reducer<DiaryItem[], Action>`는 `reducer` 함수가 `DiaryItem[]` 타입의 상태(state)와 `Action` 타입의 액션(action)을 받아서 새로운 상태를 반환함을 나타낸다.

```typescript
const reducer = (state: DiaryItem[], action: Action) => {}
```

이 형태로 적어도 되기는 한다. 하지만 `React.Reducer`를 사용하는 것이 `typescript`가 반환값을 더 잘 추론할 수 있고, `state`와 `action`의 관계를 명확하게 구분할 수 있다고 한다.

```typescript
//index.d.ts
type Reducer<S, A> = (prevState: S, action: A) => S
```

위의 코드가 `React.Reducer`는 타입스크립트에서 제공하는 인터페이스이다.

### dispatch

아까 [useReducer를 이용하여 만든 dispatch](#const-data-dispatch)는 reducer에게 action을 보내는 용도로 사용된다.

```typescript
const onCreate = (newDiaryItem: DiaryItem) => {
  dispatch({
    type: "CREATE",
    data: newDiaryItem,
  })
  dataId.current++
}
```

`dispatch()`를 호출하면서 action 객체에 type과 data를 객체로 만들어 보내면, `reduce()`에서 `action.type`, `action.data` 이런 식으로 사용할 수 있다.

```typescript
//reducer()
  ...
 case "CREATE": {
      newState = [action.data, ...state]
      break
    }
  ...
```

이제 `App.tsx` 에서 발생한 에러를 모두 없앴다. 상태관리 로직을 다른 파일로 분리해도 좋을 것 같아서 타입스크립트 적용이 끝나면 해보고 싶다.

다음 포스팅부터는 다이어리에 관련된 컴포넌트들을 하위 수준부터 바꿔보려고 한다.
