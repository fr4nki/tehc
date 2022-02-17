Есть такая структура

```html
<div id="a">
    <div id="b">
         <div id="c"></div>
     </div>
</div>
```
Клик всегда происходит по div#c
```js
    const a = document.querySelector('#a');
    const b = document.querySelector('#b');
    const c = document.querySelector('#c');

    // это просто чтобы уменьшить количество кода в примере
    const log = (text) => (event) => {
        console.log(text);
    };
```

что будет в консоли?

---
```js
a.addEventListener("click", log("A"));
b.addEventListener("click", log("B"));
c.addEventListener("click", log("C"));
```

_Ответ: C B A_

---

```js
a.addEventListener("click", log("A"), true);
b.addEventListener("click", log("B"));
c.addEventListener("click", log("C"), true);
```

_Ответ: A C B_

---

```js
a.addEventListener("click", log("A"), true);
b.addEventListener("click", log("B1"), false);
b.addEventListener("click", log("B2"), true);
b.addEventListener("click", log("B3"), false);
c.addEventListener("click", log("C"), true);
```

_Ответ: A B2 C B1 B3_

---
```js
  a.addEventListener("click", log("A"), true);
  b.addEventListener(
    "click",
    (e) => {
      e.stopPropagation();
      console.log("B1");
    },
    false
  );
  b.addEventListener("click", log("B2"), true);
  b.addEventListener("click", log("B3"), false);
  c.addEventListener("click", log("C"), true);
```

_Ответ: A B2 C B1 B3_

---
```js
  a.addEventListener("click", log("A"), true);
  b.addEventListener("click", log("B1"), false);
  b.addEventListener(
      "click",
      (e) => {
          e.stopPropagation();
          console.log("B2");
      },
      true
  );
  b.addEventListener("click", log("B3"), false);
  c.addEventListener("click", log("C"), true);
```

_Ответ: A B2_

---
```js
  a.addEventListener("click", log("A1"), true);
  a.addEventListener(
      "click",
      (e) => {
          e.stopImmediatePropagation();
          console.log("A2");
      },
      true
  );
  a.addEventListener("click", log("A3"), true);
  b.addEventListener("click", log("B1"), true);
  b.addEventListener("click", log("B2"), false);
  c.addEventListener("click", log("C"), true);
```

_Ответ: A1 A2_

