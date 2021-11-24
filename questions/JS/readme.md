# JavaScript


- Что выведет? И как исправить, если есть ошибка?

```js
const arr = [20, 40, 30, 15];

for (var i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}
```

---

- Какой порядок вывода в консоль и почему?

```js
console.log(1);

setTimeout(() => console.log(2), 0);

Promise.resolve().then(() => {
    console.log(3);
}).then(() => {
    console.log(4);
})

Promise.resolve().then(() => {
    console.log(5);
}).then(() => {
    console.log(6);
})

setTimeout(() => console.log(7));

console.log(8);
```
