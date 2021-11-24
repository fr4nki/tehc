// Что выведет?

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