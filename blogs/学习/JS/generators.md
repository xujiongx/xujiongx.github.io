---
title: Generator
date: 2020-10-15
categories:
  - 学习
tags:
  - JS
---

## Generator有什么用？

- 常规函数只会返回一个单一值（或者不返回任何值）。而 Generator 可以按需一个接一个地返回（“yield”）多个值。它们可与 iterable完美配合使用，从而可以轻松地创建数据流。

## 什么是generator?

- generator方法如下：

  ```js
  function* generatorDemo{
      yield 1;
      yield 2;
      return 3;
  }
  ```

- generator方法实际上是生成了一个generator object,generator是通过next()方法依次返回的yield:

  ```js
  function* generatorDemo{
      yield 1;
      yield 2;
      return 3;
  }
  
  let generator=generatorDemo()
  
  generator.next()  //{value:1,done:false}
  generator.next()  //{value:2,done:false}
  generator.next()  //{value:3,done:true}
  ```

## generator是可迭代的

- generator是可迭代的,但当 `done: true` 时，`for..of` 循环会忽略最后一个 `value`。因此，如果我们想要通过 `for..of` 循环显示所有的结果，我们必须使用 `yield` 返回它们：

  ```js
  function* generatorDemo{
      yield 1;
      yield 2;
      yield 3;
  }
  let generator=generatorDemo()
  for(let value of generator){
      console.log(value)
  }
  
  //或者可以
  //...generator()   //1,2,3
  ```

## 使用generator进行迭代

- 让我们思考一下可迭代对象，以range函数举例：

  ```js
  let range = {
    from: 1,
    to: 5,
  
    // for..of range 在一开始就调用一次这个方法
    [Symbol.iterator]() {
      // ...它返回 iterator object：
      // 后续的操作中，for..of 将只针对这个对象，并使用 next() 向它请求下一个值
      return {
        current: this.from,
        last: this.to,
  
        // for..of 循环在每次迭代时都会调用 next()
        next() {
          // 它应该以对象 {done:.., value :...} 的形式返回值
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  // 迭代整个 range 对象，返回从 `range.from` 到 `range.to` 范围的所有数字
  alert([...range]); // 1,2,3,4,5
  ```

  我们可以通过提供一个 generator 函数作为 `Symbol.iterator`，来使用 generator 进行迭代：

  ```js
  let range = {
    from: 1,
    to: 5,
  
    *[Symbol.iterator]() { // [Symbol.iterator]: function*() 的简写形式
      for(let value = this.from; value <= this.to; value++) {
        yield value;
      }
    }
  };
  
  alert( [...range] ); // 1,2,3,4,5
  ```

  之所以代码正常工作，是因为 `range[Symbol.iterator]()` 现在返回一个 generator，而 generator 方法正是 `for..of` 所期望的：

  - 它具有 `.next()` 方法
  - 它以 `{value: ..., done: true/false}` 的形式返回值

## generator组合使用

- 组合的 generator 的例子：

  ```js
  function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
  }
  
  function* generatePasswordCodes() {
  
    // 0..9
    yield* generateSequence(48, 57);
  
    // A..Z
    yield* generateSequence(65, 90);
  
    // a..z
    yield* generateSequence(97, 122);
  
  }
  
  let str = '';
  
  for(let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
  }
  
  console.log(str); // 0..9A..Za..z
  ```

  

## yield是一条双向路

- `yield` 是一条双向路（two-way street）：它不仅可以向外返回结果，而且还可以将外部的值传递到 generator 内。例如：

  ```js
  function* gen() {
    let ask1 = yield "2 + 2 = ?";
  
    alert(ask1); // 4
  
    let ask2 = yield "3 * 3 = ?"
  
    alert(ask2); // 9
  }
  
  let generator = gen();
  
  alert( generator.next().value ); // "2 + 2 = ?"
  
  alert( generator.next(4).value ); // "3 * 3 = ?"
  
  alert( generator.next(9).done ); // true
  ```

## generator.throw

- throw也是一种结果，也可以被yield

  ```js
  function* gen() {
    try {
      let result = yield "2 + 2 = ?"; // (1)
  
      alert("The execution does not reach here, because the exception is thrown above");
    } catch(e) {
      alert(e); // 显示这个 error
    }
  }
  
  let generator = gen();
  
  let question = generator.next().value;
  
  generator.throw(new Error("The answer is not found in my database")); // (2)
  ```

## async iterator和generator

- async iterator

  ```js
  let range = {
    from: 1,
    to: 5,
  
    // 在刚使用 for await..of 循环时，for await..of 就会调用一次这个方法
    [Symbol.asyncIterator]() { // (1)
      // ...它返回 iterator object：
      // 后续的操作中，for await..of 将只针对这个对象
      // 并使用 next() 向它请求下一个值
      return {
        current: this.from,
        last: this.to,
  
        // for await..of 循环在每次迭代时都会调用 next()
        async next() { // (2)
          // 它应该以对象 {done:.., value :...} 的形式返回值
          // (会被 async 自动包装成一个 promise)
  
          // 可以在内部使用 await，执行异步任务：
          await new Promise(resolve => setTimeout(resolve, 1000)); // (3)
  
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  (async () => {
  
    for await (let value of range) { // (4)
      alert(value); // 1,2,3,4,5
    }
  
  })()
  ```

- async generator

  ```js
  async function* generateSequence(start, end) {
  
    for (let i = start; i <= end; i++) {
  
      // 耶，可以使用 await 了！
      await new Promise(resolve => setTimeout(resolve, 1000));
  
      yield i;
    }
  
  }
  
  (async () => {
  
    let generator = generateSequence(1, 5);
    for await (let value of generator) {
      alert(value); // 1，然后 2，然后 3，然后 4，然后 5
    }
  
  })();
  ```

- async inerable

  ```js
  let range = {
    from: 1,
    to: 5,
  
    *[Symbol.iterator]() { // [Symbol.iterator]: function*() 的简写形式
      for(let value = this.from; value <= this.to; value++) {
        yield value;
      }
    }
  };
  
  for(let value of range) {
    alert(value); // 1，然后 2，然后 3，然后 4，然后 5
  }
  ```

  