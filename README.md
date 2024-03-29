# Javascript Arrow Functions

Red Ventures Micro Workshop

- [Javascript Arrow Functions](#Javascript-Arrow-Functions)
  - [Safe Harbor](#Safe-Harbor)
  - [Life Without Arrow Functions](#Life-Without-Arrow-Functions)
  - [What is an Arrow Function](#What-is-an-Arrow-Function)
  - [Benifits of Arrow Functions](#Benifits-of-Arrow-Functions)
  - [When Not to Use Arrow Functions](#When-Not-to-Use-Arrow-Functions)
  - [Resources](#Resources)


## Safe Harbor

While arrow functions have major support in most modern browsers, some older browsers do not support the feature. Therefore, it is up to you to make sure the browsers you support are addressed. You can consult [can I use](https://caniuse.com/#feat=arrow-functions) for a full list of supported browsers for this feature.

![can i use arrow functions](images/caniusearrowfunctions.png)

## Life Without Arrow Functions
![Old Tech](https://media.giphy.com/media/bZQvimlS7kuGc/giphy.gif)
```js

// Function Declaration
foo(){
  alert("Hello, World")
}

foo()

// Function Expression
const bar = function(word) {
  alert(`Hello, ${word}`)
}

```

## What is an Arrow Function
![green arrow functions](https://media.giphy.com/media/EMm31ROmLJtEk/giphy.gif)

> An **arrow function expression** is a syntactically compact alternative to a regular function expression, although without its own bindings to the `this`, `arguments`, `super`, or `new.target` keywords. Arrow function expressions are ill suited as methods, and they cannot be used as constructors.
>
> -- <cite>MDN</cite>

- **An arrow function is not just _syntactic sugar_ for js functions**
- Arrow functions are always anonymous functions

## Benifits of Arrow Functions

![That is awesome](https://media.giphy.com/media/Qh6NZWsFx1G1O/giphy.gif)

- concise syntax
- implicit returns
- no rebinding of `this`

## When Not to Use Arrow Functions

![When not to use](https://media.giphy.com/media/ka58AlHmghpQ4uUmTl/giphy.gif)

There are a few cases where you do not want to use arrow functions without some significant rework.

- Click handlers
- Object methods

```js
const game = {
  score: 3,
  increase: function() {
    this.score++
  }
}


// don't do
const game = {
  score: 3,
  increase: () => this.score++
}

// Better refactor
const game = {
  score: 3,
  increase() {
    this.score++
  }
}
```

- When you need the `arguments` keyword

## Resources

- [Wes Bos - JavaScript Arrow Functions Introduction](https://wesbos.com/arrow-functions/)
- [Wes Bos - When Not to use an Arrow Function](https://wesbos.com/arrow-function-no-no/)
- [Fun Fun Function: Arrow Functions](https://www.youtube.com/watch?v=6sQDTgOqh-I)
- [MDN: Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [When (and why) you should use ES6 arrow functions — and when you shouldn’t](https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/)
- [Official Spec](https://www.ecma-international.org/ecma-262/6.0/#sec-arrow-function-definitions)

