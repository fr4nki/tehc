# Сравнение стейта в componentDidUpdate

**Что будет в `console.log(prev === curr);` и почему?**

```js
constructor() {
	this.state = {
		foo": "[],
	};
}

componentDidUpdate(, prevState) {
	const prev = prevState.foo.join();
	const curr = this.state.foo.join();

	console.log(prev === curr);
}

onClick() => {
	this.setState(prevState => {
		prevState.foo.push(‘1’);

        return prevState;
	});
}

render() {
    return (
        <Button onClick={this.onClick} />
    )
}
```
