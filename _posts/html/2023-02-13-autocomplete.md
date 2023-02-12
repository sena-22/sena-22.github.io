---
title: "[HTML] 에디터에서 HTML 자동완성하기"
excerpt: "html code autocomplete"

categories:
  - html
tags:
  - [html, autocomplete]

toc: true
toc_sticky: true

date: 2023-02-13
last_modified_at: 2023-02-13
---

## 태그 자동완성

### 입력

```html
<div>div>div*5>img[src="img/$.png"]+h2>lorem5^p</div>
```

- `>` : 자식 태그로 생성
- `[]` : 태그의 속성 지정
- `$` : 태그가 반복될 때마다 1씩 증가된 값이 입력.
- `+` : 형제 태그로 생성
- `^` : 다시 상위 태그로 이동
- `lorem + 숫자` : Lorem Ipsum을 숫자만큼 생성

### 결과

```html
<div>
  <div>
    <img src="img/1.png" alt="" />
    <h2>Lorem ipsum dolor sit amet.</h2>
    <p></p>
  </div>
  <div>
    <img src="img/2.png" alt="" />
    <h2>Sunt, fuga. Alias, repellat et.</h2>
    <p></p>
  </div>
  <div>
    <img src="img/3.png" alt="" />
    <h2>Dolorem unde reprehenderit sapiente hic?</h2>
    <p></p>
  </div>
  <div>
    <img src="img/4.png" alt="" />
    <h2>Odit cupiditate consectetur expedita ipsa.</h2>
    <p></p>
  </div>
  <div>
    <img src="img/5.png" alt="" />
    <h2>Et nam perspiciatis harum quaerat!</h2>
    <p></p>
  </div>
</div>
```

## html 기본 틀

### 입력

```html
!tab
```

### 결과

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```
