---
title: "[한입 크기로 잘라 먹는 리액트] 간단한 일기장 만들기"
excerpt: "react"

categories:
  - lecture
tags:
  - [udemy, react, useMemo, useCallback, useReducer]

toc: true
toc_sticky: true

date: 2023-04-14
last_modified_at: 2023-04-15
---

![제목을-입력해주세요_-004](https://user-images.githubusercontent.com/110877564/232182349-7039b316-9092-4f39-b2aa-752e54e9aeb7.png)

섹션 6에서는 간단한 일기장을 만들어보았다.

<br/>

<img width="1520" alt="스크린샷 2023-04-14 오후 7 48 00" src="https://user-images.githubusercontent.com/110877564/232024604-e33e6bae-0ede-4d64-92be-23dca9f8a2c6.png">

일기장은 총 세 영역으로 나누어진다. 첫 번째가 일기를 작성할 수 있는 에디터 영역, 두 번째는 일기의 메타 정보를 보여주는 영역, 마지막이 일기를 보여주는 리스트 영역이다.

<br/>

# Diary Editor 컴포넌트

<img width="556" alt="스크린샷 2023-04-14 오후 7 56 15" src="https://user-images.githubusercontent.com/110877564/232026257-c937b3c4-5d34-4168-8008-ab8fd6a96b7a.png">

## 여러가지 상태를 한번에 관리하기

다이어리 에디터는 작성자, 일기 본문, 감정 점수 세 개의 입력값을 필요로 한다. 각각 `input`, `textarea`, `select & option` 태그를 이용하는데, 이 입력값은 하나의 상태로 관리할 수 있다.

```javascript
const [state, setState] = useState({
  author: "",
  content: "",
  emotion: "1",
})

const handleChangeState = (e) => {
  setState({
    ...state, //spread 연산자
    [e.target.name]: e.target.value, //해당 값만 바꿔준다
  })
}

 return(
  ...
  <input name="author" value={state.author} onChange={handleChangeState} />
  //textare와 select 태그도 같은 방식으로 만들어준다.
  ...
 )
```

## useRef를 이용하여 원하는 요소에 포커싱 하기

일기 저장 버튼을 눌렀을 때, 저자 혹은 일기의 내용이 원하는 값 이상으로 입력되지 않았을 때 useRef를 이용하여 포커싱을 할 수 있다. useRef()는 DOM 요소를 조작할 수 있는 리액트 훅으로 ref는 레퍼런스, 즉 참조를 의미한다.

```javascript
const authorInput = useRef()
```

먼저 useRef를 호출한 뒤에 그 반환값을 상수에 담아주었다. 이 상수에는 `React.MutableRefObject`가 담기게 되는데, `MutableRefObject`는 DOM 요소를 저장하고 관리할 수 있는 기능을 가지고 있다.

```javascript
<input
  ref={authorInput}
  name="author"
  value={state.author}
  onChange={handleChangeState}
/>
```

`input`에 `ref` 속성을 통해 `authorInput`를 할당해준다.

```javascript
const handleSubmit = () => {
  if (state.author.length < 1) {
    authorInput.current.focus()
    return
  }
  //조건을 만족했을 경우 제출
}
```

`authorInput`가 는 현재 가리키고 있는 `input` 요소를 `current` 속성을 통해 조작할 수 있다. (`current` 속성은 `MutableRefObject`의 속성 중 하나로, 현재 참조하고 있는 DOM 요소를 가리키는 역할을 한다.)

<br/>

# Diary List & Diary Item 컴포넌트

<img width="1086" alt="스크린샷 2023-04-14 오후 8 41 07" src="https://user-images.githubusercontent.com/110877564/232034365-93ab6816-3ab6-4500-97f8-6026e10a3487.png">

## 배열을 이용하여 리스트 렌더링하기

다이어리 리스트에서 각각의 일기는 내용만 다르고 구조는 똑같이 생겼다. 만약 일기를 모두 HTML 요소로 나열한다면 중복되는 코드가 계속 늘어날 것이다. 하지만 다이어리 아이템이라는 컴포넌트를 하나 만들어서 반복문을 돌려주면 하나의 컴포넌트로 수많은 일기들을 나타낼 수 있다.

```javascript
const diaryList = /* 일기 데이터 */
```

먼저 다이어리 리스트를 불러온다.

```javascript
<div>
  {diaryList.map((diary) => (
    <DiaryItem key={diary.id} {...diary} />
  ))}
</div>
```

map 함수를 이용하여 일기 정보를 하나씩 전달하고, 그 정보를 이용하여 만들어진 `<DiaryItem>`가 일기 리스트의 개수만큼 반복되며 반환된다. 그러면 각각의 다이어리가 담긴 배열이 완성되어 렌더링되는 것이다.

```javascript
const DiaryItem = ({author, content, created_date, emotion, id}) => {}
```

`<DiaryList>`에서 내려준 `...diary`는 이렇게 props로 받아와서 사용하면 된다.

## state 끌어올리기

<img width="1174" alt="스크린샷 2023-04-14 오후 9 04 31" src="https://user-images.githubusercontent.com/110877564/232038763-85afaebe-1098-4410-8b04-b21d0fd97909.png">

리액트에서 데이터는 위에서 아래로 흐른다. 위의 그림처럼 상위 컴포넌트인 App에서 데이터를 관리하고, 다이어리 에디터나 리스트는 그 데이터를 내려받아서 사용한다.
그런데 이 데이터를 바꾸는 일은 하위 컴포넌트에서 발생한다. 여기서는 다이어리 에디터에서 일기를 추가하고 있는데, 이는 이벤트가 밑에서 위로 올라감을 의미한다. 이때 `setData` 처럼 상위 컴포넌트에서 상태를 변경하는 함수 자체를 하위 컴포넌트로 전달하고, 이 함수를 하위 컴포넌트에서 실행하여 상태가 변하는 것을 상태 끌어올리기라고 한다.

```javascript
//App.js
const [data, setData] = useState([])

const onCreate = (author, content, emotion) => {
  const newItem = {
    author,
    content,
    emotion,
    ...
  }
  setData((data)=>[newItem,...data])
}
```

이런 식으로 상위 컴포넌트인 App 컴포넌트에 데이터를 두고, 상태를 변경할 수 있는 함수인 `onCreate()`를 하위 컴포넌트에 props로 내려준다.

```javascript
//App.js
<DiaryEditor onCreate={onCreate}>
```

`<DiaryEditor>`에서는 함수를 내려받아서 사용하면, 상위 컴포넌트의 상태를 바꿀 수 있게 된다.

```javascript
//DiaryEditor.js

const DiaryEditor = ({onCreate}) => {
  const handleSubmit = () => {
    //글자수 조건 만족 시 onCreate 함수 실행
    onCreate(state.author, state.content, state.emotion)
  }
}
```

이렇게 data에 일기가 추가되면, 다시 그 데이터를 받아 다이어리 리스트에 반영이 되게 된다.

<br/>

# 리액트의 라이프 사이클 제어하기

<img width="1274" alt="스크린샷 2023-04-14 오후 9 35 10" src="https://user-images.githubusercontent.com/110877564/232044918-77eb82cb-bbef-48cc-94ea-738aa235d4b7.png">

리액트는 탄생, 변화, 죽음이라는 세 개의 생애 주기를 가진다. 함수형 컴포넌트에서 생애 주기를 제어하기 위해서는 useEffect 훅을 사용하면 된다.

useEffect는 두 개의 인자를 받는다.

첫 번째는 실행하게 될 콜백 함수이며, 두 번째는 의존성 배열이라는 것이다. 의존성 배열은 콜백 함수가 실행되는 조건을 제어할 수 있다. 즉 이 배열에 넣어둔 값이 변화하면 콜백 함수가 다시 실행된다.

```javascript
useEffect(() => {
  console.log("Mount!")
  return () => {
    //언마운트 시점에 실행
    console.log("Unmount!")
  }
}, []) // 빈 배열을 넣으면 컴포넌트가 마운트 될 때 한 번만 실행

useEffect(() => {
  if (count > 5) {
    alert("count가 5를 넘었습니다 따라서 1로 초기화합니다")
    setCount(1)
  }
}, [count]) //count 값이 변할 때마다 실행
```

<br/>

# 리액트에서 API 호출해서 일기의 초기값 만들어주기

`jsonplaceholder`는 더미 데이터를 api 호출로 얻을 수 있는 서비스이다.

[jsonplaceholder](https://jsonplaceholder.typicode.com/)
{: .notice--primary}

`fetch()`라는 내장 함수를 이용하면 인자로 전달한 url로 요청을 보낼 수 있다. 응답으로 받은 결과를 `res`에 담는 함수를 만들어준다.

```javascript
const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments").then(
    (res) => res.json()
  )
}
```

`useEffect()`를 이용하면 App 컴포넌트가 마운트 될 때 `getData()`를 호출해서 요청을 보낼 수 있다.

```javascript
useEffect(() => {
  getData()
}, [])
```

이 결과를 일기 데이터의 기초 데이터로 사용하기 위해 필요한 정보로 가공해준다.

```javascript
const initData = res.slice(0, 20).map((it) => {
  return {
    author: it.email,
    content: it.body,
    emotion: Math.floor(Math.random() * 5) + 1, //1~5 랜덤 난수 생성
    created_date: new Date().getTime(),
    id: dataId.current++,
  }
})
```

가공한 정보를 `setData`를 이용하여 data에 담아주면 App 컴포넌트가 마운트될 때 초기값으로 불러온 데이터가 들어가게 된다.

```javascript
setData(initData)
```

이 코드들을 합쳐주면 다음과 같다.

```javascript
//App.js
const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments").then(
    (res) => res.json()
  )

  const initData = res.slice(0, 20).map((it) => {
    return {
      author: it.email,
      content: it.body,
      emotion: Math.floor(Math.random() * 5) + 1, //1~5 랜덤 난수 생성
      created_date: new Date().getTime(),
      id: dataId.current++,
    }
  })

  setData(initData)
}
```

<br/>

# 최적화

## useMemo를 이용해서 연산 결과 재사용하기

<img width="1020" alt="스크린샷 2023-04-15 오전 5 42 38" src="https://user-images.githubusercontent.com/110877564/232150924-b7bf9af4-fbc9-4a6d-9fdf-a7ed26f494cd.png">

메모이제이션을 이용하면 복잡한 연산을 다시 하지 않아도 된다는 장점이 있다.

리액트에서는 useMemo를 통해 메모이제이션을 활용할 수 있다.

```javascript
//App.js

/* 감정 점수를 분석하는 함수 */
const getDiaryAnalysis = () => {
  const goodCount = data.filter((it) => it.emotion >= 3).length
  const badCount = data.length - goodCount
  const goodRatio = (goodCount / data.length) * 100
  return {goodCount, badCount, goodRatio}
}, [data.length]
```

<img width="946" alt="스크린샷 2023-04-15 오전 5 57 35" src="https://user-images.githubusercontent.com/110877564/232153319-4e2582cb-9667-493d-a62c-0c9355b71969.png">

여기서 만든 일기장의 경우 감정 점수를 수정할 수 있는 기능이 없다. 따라서 수정이 가능한 건 내용 뿐이고, 위에서 만든 `getDiaryAnalysis()` 함수는 일기가 추가/삭제되는 등 일기 리스트의 길이가 변할 때만 작동하면 된다. 여기서 useMemo를 사용하면 언제 다시 계산할 지 정해줄 수 있다.

```javascript
//App.js

/* 메모이제이션 하고 싶은 함수를 useMemo로 감싸준다. */
const getDiaryAnalysis = useMemo(() => {
  const goodCount = data.filter((it) => it.emotion >= 3).length
  const badCount = data.length - goodCount
  const goodRatio = (goodCount / data.length) * 100
  return {goodCount, badCount, goodRatio}
}, [data.length])
```

이때 주의해야하는 점은 useMemo로 감싼 함수는 함수가 아니라 값을 리턴받기 때문에, 사용할 때 함수처럼 사용하면 에러가 발생한다. 따라서 값을 사용하는 것처럼 바꿔주어야 한다.

```javascript
const {goodCount, badCount, goodRatio} = getDiaryAnalysis() //error

//useMemo를 사용하였으므로 함수(getDiaryAnalysis())가 아니라 값 getDiaryAnalysis으로 사용한다.
const {goodCount, badCount, goodRatio} = getDiaryAnalysis
```

💡 메모이제이션은 오히려 앱의 성능을 저하시킬 수 있기 때문에 남용하면 좋지 않다고 한다.
([참고](https://velog.io/@lky5697/stop-using-usememo-now?utm_source=substack&utm_medium=email))
{: .notice--primary}

## React.memo를 이용해서 컴포넌트 재사용하기

리액트에서 부모 컴포넌트가 리렌더링 되면, 자식 컴포넌트도 리렌더링 된다. 따라서 형제 컴포넌트에 어떤 일이 발생해서 부모 컴포넌트의 상태가 바뀌는 경우, 다른 형제의 컴포넌트는 그 상태를 사용하지 않아 리렌더링 될 필요가 없음에도 불구하고 리렌더되는 현상이 발생한다. 이때 React.memo를 이용하여 컴포넌트에 업데이트 조건을 걸어서 조건을 만족할 때만 리렌더링 되도록 할 수 있다.

[공식 문서](https://ko.reactjs.org/docs/react-api.html#reactmemo)에 따르면, React.memo는 고차 컴포넌트(HOC)이다. 고차 컴포넌트는 컴포넌트를 가져와 새 컴포넌트를 반환하는 함수이다.

```javascript
const 좋아진컴포넌트 = 고차함수(컴포넌트)
```

React.memo도 이렇게 매개변수로 컴포넌트를 전달하면, 전달 받은 props가 동일한 결과를 나타낸다면 다시 계산하지 않고 리렌더링도 일어나지 않도록 할 수 있다.

### 예시 1

```javascript
const TextView = ({text}) => {
  useEffect(() => {
    console.log(`Update :: Text : ${text}`)
  })
  return <div>{text}</div>
}

const CountView = ({count}) => {
  useEffect(() => {
    console.log(`Update :: Count : ${count}`)
  })
  return <div>{count}</div>
}
```

렌더링 될 때마다 console에 표시가 되는 컴포넌트를 만들었다. 이 컴포넌트들을 상위 컴포넌트에서 불러서 사용을 해보자.

```javascript
export default function App() {
  const [count, setCount] = useState(1)
  const [text, setText] = useState("")

  return (
    <div className="App">
      <div>
        <h2>count</h2>
        <CountView count={count} />
        <button value={count} onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>

      <div>
        <h2>text</h2>
        <TextView text={text} />
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  )
}
```

App 컴포넌트에서 버튼을 클릭하면 text는 상태가 그대로인데도 `<TextView>` 컴포넌트가 다시 렌더링되면서 console이 찍히는 것을 확인할 수 있다. 또 text를 바꾸었을 때도 count는 2인데 계속 렌더링되고 있다.

<img width="256" alt="스크린샷 2023-04-15 오전 9 45 40" src="https://user-images.githubusercontent.com/110877564/232174748-a95ca3fe-913f-4434-ab8f-0d392545ab07.png">

이제 이 컴포넌트들을 React.memo로 감싸보자.

```javascript
const TextView = React.memo(({text}) => {
  useEffect(() => {
    console.log(`Update :: Text : ${text}`)
  })
  return <div>{text}</div>
})

const CountView = React.memo(({count}) => {
  useEffect(() => {
    console.log(`Update :: Count : ${count}`)
  })
  return <div>{count}</div>
})
```

이렇게 바꿔주면 각자 인자로 들어온 값이 바뀌지 않으면 재계산하지 않게 된다.

<img width="258" alt="스크린샷 2023-04-15 오전 9 48 49" src="https://user-images.githubusercontent.com/110877564/232174872-ab13f181-d7a1-4ba3-903d-3c9221e500bb.png">

### 예시 2

다른 예도 살펴보자.

```javascript
const CounterA = React.memo(({count}) => {
  useEffect(() => {
    console.log(`CounterA Update - count : ${count}`)
  })
  return <div>{count}</div>
})

const CounterB = React.memo(({obj}) => {
  useEffect(() => {
    console.log(`CounterB Update - count : ${obj.count}`)
  })
  return <div>{obj.count}</div>
})

const OptimizeTest = () => {
  const [count, setCount] = useState(1)
  const [obj, setObj] = useState({
    count: 1,
  })
  return (
    <div style={{padding: 50}}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count}></CounterA>
        <button onClick={() => setCount(count)}>A BUTTON</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <CounterB obj={obj} />
        <button onClick={() => setObj({count: obj.count})}>B BUTTON</button>
      </div>
    </div>
  )
}

export default OptimizeTest
```

아까처럼 두 개의 컴포넌트를 만들고 React.memo로 감싼 뒤 상위 컴포넌트에서 불러와서 사용해보았다. 다른 점은 버튼을 클릭해도 같은 결과를 리턴하고, Counter B 같은 경우 객체 형태라는 것이다.
버튼을 클릭했을 때, Counter A는 예상대로 동작한다. 즉 count가 바뀌지 않기 때문에 리렌더링 되지 않고, 콘솔 창에 아무것도 나타나지 않는다. 하지만 B 버튼을 누르면 obj의 count가 바뀌지 않음에도 리렌더링 된다. 이건 객체를 비교할 때, 얕은 비교를 하기 때문이다.

얕은 비교는 객체를 값이 아니라 주소를 기준으로 비교하는 것이다.

<img width="1314" alt="스크린샷 2023-04-15 오전 10 27 15" src="https://user-images.githubusercontent.com/110877564/232176589-7335d630-0fe0-4f27-b574-0dc143ac2ac3.png">

위의 그림처럼 a 객체와 b 객체는 선언될 때 다른 주소에 저장된다. 따라서 값은 같더라도, 주소가 다르기 때문에 비교했을 때 false가 나온다.

<img width="1314" alt="스크린샷 2023-04-15 오전 10 30 53" src="https://user-images.githubusercontent.com/110877564/232176735-70f3c216-294d-4e79-b30b-4bee71afceaf.png">

한편 a를 선언한 후에 b에 직접 할당할 경우, 둘은 같은 주소를 가지게 된다. 따라서 비교했을 때 true가 나온다.

여기서 B 버튼을 클릭했을 때, `setObj({count: obj.count})`가 실행되면서 새로운 객체 `{count: obj.count}`가 생성되어 obj가 변경되고, 이전 상태의 obj와 새로운 obj는 얕은 비교를 수행해서 값은 다르지만 주소가 다르기 때문에 다르다고 판단되어 `<CounterB>` 컴포넌트가 다시 렌더링된다.

이런 현상을 방지하기 위해 React.memo에 두 번째 인자로, `areEqual()`이라는 함수를 사용할 수 있다.

```javascript
//React.memo를 없애주었다
const CounterB = ({obj}) => {
  useEffect(() => {
    console.log(`CounterB Update - count : ${obj.count}`)
  })
  return <div>{obj.count}</div>
}

const areEqual = (prev, next) => {
  return prev.obj.count === next.obj.count //이전 props 현재 props가 같으면 리렌더링 하지 않음
}

const MemoisedCouanterB = React.memo(CounterB, areEqual) //컴포넌트를 반환하는 고차 컴포넌트

//return
    <div>
        <h2>Counter B</h2>
        <MemoisedCouanterB obj={obj}></MemoisedCouanterB>
        <button onClick={() => setObj({count: obj.count})}>B BUTTON</button>
    </div>
```

`areEqual()` 함수를 적용해보았다. 이렇게 바꿔줄 경우, 먼저 `areEqual()` 함수에서 obj가 아니라 obj.count를 비교한다. 객체가 아니라 값을 비교하기 때문에 값이 같다면 true가 나오고, 아니라면 false가 나오게 된다. 그리고 React.memo의 두 번째 인자가 false가 되는 경우에만 다시 리렌더링을 수행하게 되기 때문에, 얕은 비교를 막고 실제로 값이 변경되었을 때에만 리렌더링이 일어나게 된다.

## useCallback으로 함수 최적화하기

useMemo는 메모이제이션된 값을 반환한다. 만약 함수를 반환하고 싶을 때에는 useCallback을 사용하면 된다.

다이어리를 작성하는 폼인 `<DiaryEditor>` 컴포넌트는 App 컴포넌트에서 props로 `onCreate()` 함수를 내려받는다. 만약 다이어리가 수정되거나 삭제될 경우 App 컴포넌트에서 다이어리의 상태가 바뀌면서 `onCreate()` 함수도 재생성되고, 또 이 함수를 내려받는 `<DiaryEditor>` 컴포넌트도 리렌더링되게 된다. 일기 추가와만 관련이 있는데도 불구하고 불필요하게 렌더링되고 있는 것이다. 이럴 때 `onCreate()` 함수에 useCallback을 적용하면 좋다.

```javascript
const onCreate = useCallback((author, content, emotion) => {
  const newItem = {
    author,
    content,
    emotion,
  }
  setData([newItem, ...data]) //이렇게하면 data가 새로운 배열로 덮어씌워지기 때문에 새로운 데이터만 남게 된다.
  setData((data) => [newItem, ...data]) //이렇게 함수형 업데이트를 해줘야 이전 상태값을 받아와서 의도에 맞는 업데이트가 가능하다.
}, [])
```

이렇게 감싸주면 다른 함수로 인해 data가 업데이트 되어도 `onCreate()`는 달라진 부분이 없으면 다시 생성되지 않아 `<DiaryEditor>`가 불필요하게 리렌더링되는 것을 방지할 수 있다.

<br/>

# useReducer를 이용하여 복잡한 상태 분리하기

useReducer를 이용하면 상태 관리 로직을 컴포넌트 밖으로 빼내서 컴포넌트의 복잡도를 줄일 수 있다. useReducer는 상태변화를 처리해주는 reducer와 state의 초기값으로 두 개의 인자를 받아 state와 dispatch 함수로 이루어진 배열을 반환한다.

```javascript
const [data, dispatch] = useReducer(reducer, [])
```

먼저 dispatch로 상태 변화를 일으키고, reducer가 상태 변화를 처리해서 data가 변경되는 구조를 가진다.

```javascript
const onCreate = useCallback((author, content, emotion) => {
  dispatch({
    type: "CREATE",
    data: {author, content, emotion, id: dataId.current},
  })

  dataId.current += 1
}, [])
```

dispatch는 이런 식으로 호출하면서 객체를 전달하는데, 이 객체 이름을 action 객체라고 부른다. action 객체를 reducer로 전달하면 reducer에서 상태를 변경해준다.

```javascript
const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      const created_date = new Date().getTime()
      const newItem = {
        ...action.data,
        created_date,
      }
      return [newItem, ...state]
    }

    //case 별로 구현

    default:
      return state
  }
}
```

dispatch에서는 첫번째 인자로 원래 상태를, 두 번째 인자로 dispatch가 전달해준 action 객체를 받는다.
그리고 action의 타입에 따라 state를 변경해준 뒤, 바뀐 state를 반환한다. 즉 상태가 변경된다.

<br/>

# context로 컴포넌트 트리에 전역으로 데이터 공급하기

리액트는 단방향 데이터 흐름을 가지기 때문에, 데이터를 위에서 아래로 props로 전해준다. 하지만 컴포넌트가 여러 단계에 걸쳐 연결되어 있을 경우, 제일 아래에 있는 컴포넌트에서만 필요한 데이터를 전달해주려면 최상위 컴포넌트에서 그 아래로, 또 그 아래로 계속 props를 내려주게 된다. 이때 중간에 있는 컴포넌트들은 데이터를 사용하지도 않으면서 오로지 props를 전달하는 역할을 하게 된다. 이를 props 드릴링이라고 하는데, 이런 드릴링이 생길 경우 데이터를 관리하기가 매우 복잡해진다.

이런 문제를 해결하기 위해 context라는 개념이 생겨났다.

<img width="1314" alt="스크린샷 2023-04-15 오후 12 55 32" src="https://user-images.githubusercontent.com/110877564/232181738-9ea2fc17-dbdf-48ec-8b1b-6ac8ec1f9337.png">
이 그림처럼 provider라는 컴포넌트는 App 컴포넌트에서 모든 데이터를 받아서 필요한 컴포넌트에 바로 데이터를 줄 수 있다. 따라서 불필요한 데이터 드릴링이 일어나지 않게 된다.

이때 provider가 포함하고 있는 범위를 context, 문맥이라고 하며 이 context 안에서는 어떤 컴포넌트든 데이터를 받아와서 사용할 수 있다.

리액트는 `context API`를 제공하여 이런 기능을 사용할 수 있게 만들어준다.

## context 생성

```javascript
const DiaryStateContext = React.createContext()
```

## Context Provier를 이용해서 데이터 공급하기

```javascript
  //App.js
  <DiaryStateContext.Provider value={data {/*전역으로 공급할 값*/}}>
    {/*context 안에 위치하는 자식 컴포넌트들*/}
  </DiaryStateContext.Provider>
```

## 하위 컴포넌트에서 데이터를 가져와서 사용하기

```javascript
//DiaryList.jsx
const diaryList = useContext(DiaryStateContext) //data가 할당된다.
```

## context 중첩해서 사용하기

데이터 뿐만 아니라 상태를 변경하는 dispatch 함수도 전역으로 내려주고 싶으면 어떻게 할까? 만약 아까 만들어두었던 `DiaryStateContext`를 사용하면 데이터가 변경될 때마다 함수들도 재생성되는 문제가 발생한다. 따라서 다른 문맥을 만들어 중첩해서 사용하는 것이 좋다.

```javascript
//App.js
const DiaryDispatchContext = React.createContext() //새로운 context 생성

//전달할 함수를 하나로 만들기
const memoizedDispatches = useMemo(() => {
  return {onCreate, onRemove, onEdit}
}, [])

//중첩해서 사용
return (
  <DiaryStateContext.Provider value={data}>
    <DiaryDispatchContext.Provider value={memoizedDispatches}>
      {/*context 안에 위치하는 자식 컴포넌트들*/}
    </DiaryDispatchContext.Provider>
  </DiaryStateContext.Provider>
)
```

`DiaryStateContext`와 마찬가지로 인자로 원하는 문맥을 넣고 꺼내서 사용하면 된다.

```javascript
//DiaryItem.jsx
const {onRemove, onEdit} = useContext(DiaryDispatchContext)
```

간단한 일기장을 만들면서 CRUD 기능, 최적화, 상태 관리까지 전체적으로 알아볼 수 있었던 섹션이었다.
