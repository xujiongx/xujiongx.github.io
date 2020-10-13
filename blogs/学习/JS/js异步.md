---
title: js异步
date: 2020-10-14
categories:
  - 学习
tags:
  - JS
  - 异步
---


## 为什么需要js异步？

- JavaScript 主机（host）环境提供了许多函数，这些函数允许我们计划 **异步** 行为（action）。也就是说我们现在开始执行的行为，但它们会在稍后完成。比如setTimeout是异步完成的。

- 在实际开发中我们经常会遇到这种情况，比如加载脚本和模块是异步的，来看看下面这个loadScript函数：

  ```js
  function loadScript(src) {
      //创建script标签并指定src属性，最后插入head里面
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
  }
  ```

  由于这个函数加载了js脚本，因此是是异步的函数，如果异步函数下面有其他代码。下面的代码不会等待脚本加载完成再执行

  ```js
  loadScript('./test.js')   //./test.js中有test()函数
  test()						//报错，没有这个函数
  ```

## 如何解决js异步问题？？

### callback

- 在loadScript中传入第二个参数callback，在script加载完成时执行回调函数，代码如下：

  ```js
  function loadScript(src,callback) {
      //创建script标签并指定src属性，最后插入head里面
    let script = document.createElement('script');
    script.src = src;
    script.onload=()=>callback(script)
    document.head.append(script);
  }
  ```

- 改造后我们就可以在callback里面调用脚本的函数，代码如下：

  ```js
  loadScript('./test.js',script=>{test()})  //执行成功
  ```

- 是否考虑过，要是脚本不存在或者网络问题，脚本加载失败了怎么办？？当然是要在loadScript里面增加一个错误处理，代码如下：

  ```js
  function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
  
    document.head.append(script);
  }
  ```

  加载成功时，它会调用 `callback(null, script)`，否则调用 `callback(error)`。

  如何使用？代码如下：

  ```js
  loadScript('/my/script.js', function(error, script) {
    if (error) {
      // 处理 error
    } else {
      // 脚本加载成功
    }
  });
  ```
  
- 再思考一下，我们在callback里面又要加载其他脚本怎么办？当然是再嵌套loadScript呗，代码如下：

  ```js
  loadScript('/my/script.js', function(script) {
  
    loadScript('/my/script2.js', function(script) {
  
      loadScript('/my/script3.js', function(script) {
        // ...加载完所有脚本后继续
      });
    })
  
  });
  ```

  这样的回调一旦多起来，就会形成厄运金字塔（回调地狱），嵌套调用的“金字塔”随着每个异步行为会向右增长。很快它就失控了。

  我们可以通过使每个行为都成为一个独立的函数来尝试减轻这种问题，如下所示：

  ```js
  loadScript('1.js', step1);
  
  function step1(error, script) {
    if (error) {
      handleError(error);
    } else {
      // ...
      loadScript('2.js', step2);
    }
  }
  
  function step2(error, script) {
    if (error) {
      handleError(error);
    } else {
      // ...
      loadScript('3.js', step3);
    }
  }
  
  function step3(error, script) {
    if (error) {
      handleError(error);
    } else {
      // ...加载完所有脚本后继续 (*)
    }
  };
  ```

  这样写作用相同，但是没有了很深的嵌套，代码需要到处跳转，可读性差很多，而且命名也很混乱。
  
  幸运的是我们可以使用promise方法来解决这些问题。

### Promise

- 如何用promise改造loadScript函数？代码如下：

  ```js
  function loadScript(src) {
    return new Promise(function(resolve, reject) {
      let script = document.createElement('script');
      script.src = src;
  
      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error(`Script load error for ${src}`));
  
      document.head.append(script);
    });
  }
  ```

- 如何使用？

  ```js
  let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
  
  promise.then(
    script => alert(`${script.src} is loaded!`),
    error => alert(`Error: ${error.message}`)
  );
  
  promise.then(script => alert('Another handler...'));
  ```

- 当要加载多个js脚本的时候怎么使用promise？？这个时候就需要了解**promise链**了，代码如下：

  ```js
  loadScript("/article/promise-chaining/one.js")
    .then(function(script) {
      return loadScript("/article/promise-chaining/two.js");
    })
    .then(function(script) {
      return loadScript("/article/promise-chaining/three.js");
    })
    .then(function(script) {
      // 使用在脚本中声明的函数
      // 以证明脚本确实被加载完成了
      one();
      two();
      three();
    });
  ```

  使用箭头函数优化：

  ```js
  loadScript("/article/promise-chaining/one.js")
    .then(script => loadScript("/article/promise-chaining/two.js"))
    .then(script => loadScript("/article/promise-chaining/three.js"))
    .then(script => {
      // 脚本加载完成，我们可以在这儿使用脚本中声明的函数
      one();
      two();
      three();
    });
  ```

- promise错误

  - 在最后添加.catch()处理异常，`.catch` 不仅会捕获显式的 rejection，还会捕获它上面的处理程序（handler）中意外出现的 error。也就说只要出错，就会跳转到最近的.catch()上。

  - 当.catch()处理完了任务，会继续执行处理程序上的.then(),否则会跳到下一个.catch().

  - 当一个错误没有被处理怎么办？？也就是说没有catch来处理错误，那就会产生一个全局错误，在浏览器中，我们可以使用 `unhandledrejection` 事件来捕获这类 error：

    ```js
    window.addEventListener('unhandledrejection', function(event) {
      // 这个事件对象有两个特殊的属性：
      alert(event.promise); // [object Promise] - 生成该全局 error 的 promise
      alert(event.reason); // Error: Whoops! - 未处理的 error 对象
    });
    
    new Promise(function() {
      throw new Error("Whoops!");
    }); // 没有用来处理 error 的 catch
    ```

- promise APi

  - promise.all 假设我们希望并行执行多个 promise，并等待所有 promise 都准备就绪。

    例如，并行下载几个 URL，并等到所有内容都下载完毕后再对它们进行处理。

    只要有一个任务错误就会报错,示例：

    ```js
    let urls = [
      'https://api.github.com/users/iliakan',
      'https://api.github.com/users/remy',
      'https://api.github.com/users/jeresig'
    ];
    
    // 将每个 url 映射（map）到 fetch 的 promise 中
    let requests = urls.map(url => fetch(url));
    
    // Promise.all 等待所有任务都 resolved
    Promise.all(requests)
      .then(responses => responses.forEach(
        response => alert(`${response.url}: ${response.status}`)
      ));
    ```

    

  - Promise.allSettled，和.all使用类似，但是返回的一个数组，例如：

    ```js
    [
      {status: 'fulfilled', value: ...response...},//成功
      {status: 'fulfilled', value: ...response...},
      {status: 'rejected', reason: ...error object...}//失败
    ]
    ```

  - polyfill  如果浏览器不支持 `Promise.allSettled`，很容易进行 polyfill：

    ```js
    if(!Promise.allSettled) {
      Promise.allSettled = function(promises) {
        return Promise.all(promises.map(p => Promise.resolve(p).then(value => ({
          status: 'fulfilled',
          value
        }), reason => ({
          status: 'rejected',
          reason
        }))));
      };
    }
    ```

  - promise.race  与 `Promise.all` 类似，但只等待第一个 settled 的 promise 并获取其结果（或 error）。

  - promise.reject/resolve

### Promiseifcatione

- 为什么要promise化？由于许多函数和库都是基于回调的，因此，在实际开发中经常会需要进行这种转换。因为使用 promise 更加方便，所以将基于回调的函数和库 promisify 是有意义的。（译注：promisify 即指 promise 化）

- 如何promise化？代码如下：

  ```js
  let loadScriptPromise = function(src) {
    return new Promise((resolve, reject) => {
      loadScript(src, (err, script) => {
        if (err) reject(err)
        else resolve(script);
      });
    })
  }
  
  // 用法：
  // loadScriptPromise('path/script.js').then(...)
  ```

- 在实际开发中，我们可能需要 promisify 很多函数，所以使用一个 helper 很有意义。我们将其称为 `promisify(f)`：它接受一个需要被 promisify 的函数 `f`，并返回一个包装（wrapper）函数

  ```js
  function promisify(f) {
    return function (...args) { // 返回一个包装函数（wrapper-function）
      return new Promise((resolve, reject) => {
        function callback(err, result) { // 我们对 f 的自定义的回调
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
  
        args.push(callback); // 将我们的自定义的回调附加到 f 参数（arguments）的末尾
  
        f.call(this, ...args); // 调用原始的函数
      });
    };
  };
  
  // 用法：
  let loadScriptPromise = promisify(loadScript);
  loadScriptPromise(...).then(...);
  ```

  如果原始的callback有多个参数该怎么办？？下面是 `promisify` 的更高级的版本：如果像这样进行调用 `promisify(f, true)`，那么 promise 的结果将是回调结果的数组 `[res1, res2, ...]`：

  ```js
  // promisify(f, true) 来获取结果数组
  function promisify(f, manyArgs = false) {
    return function (...args) {
      return new Promise((resolve, reject) => {
        function callback(err, ...results) { // 我们自定义的 f 的回调
          if (err) {
            reject(err);
          } else {
            // 如果 manyArgs 被指定，则使用所有回调的结果 resolve
            resolve(manyArgs ? results : results[0]);
          }
        }
  
        args.push(callback);
  
        f.call(this, ...args);
      });
    };
  };
  
  // 用法：
  f = promisify(f, true);
  f(...).then(arrayOfResults => ..., err => ...)
  ```

### async/await

- async是什么？async function(){},在函数前面的 “async” 这个单词表达了一个简单的事情：即这个函数总是返回一个 promise。其他值将自动被包装在一个 resolved 的 promise 中。

- 关键字 `await` 让 JavaScript 引擎等待直到 promise 完成（settle）并返回结果。比如：

  ```js
  async function f() {
  
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // 等待，直到 promise resolve (*)
  
    alert(result); // "done!"
  }
  
  f();
  ```

- 使用try,catch做错误处理，或者再外面加个.catch()
- async/await可以和promise.all结合使用，原理是一样的。