### Что выведет? и как исправить?

```js
const arr = [20, 40, 30, 15];

for (var i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}
```js
