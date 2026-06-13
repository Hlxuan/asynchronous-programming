# asynchronous-programming（异步编程）
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/m/Hlxuan/asynchronous-programming) ![GitHub issues](https://img.shields.io/github/issues/Hlxuan/asynchronous-programming) ![GitHub Stars](https://img.shields.io/github/stars/Hlxuan/asynchronous-programming)

## 项目描述

### [01-settimeout-cleartimeout](./01-settimeout-cleartimeout/)
专注于`setTimeout`和`clearTimeout`函数的使用。

### [02-setinterval-cleartimeout](./02-setinterval-cleartimeout/)
实验的目标是实现页面中两个按钮的功能："开始颜色改变"和"停止颜色改变"。点击"开始"按钮后，页面背景颜色将在每秒钟或我们设定的任何间隔时间内不断变化，而点击"停止"按钮则可以停止颜色变化。

### [03-callbacks](./03-callbacks/)
深入了解回调函数。

### [04-ajax-xhr](./04-ajax-xhr/)
通过`XML HTTP`请求对象（`XHR`）获取本地或远程的`JSON`数据。

### [05-joke-generator-challenge（笑话生成器项目挑战）](./05-joke-generator-challenge/)
通过一个API获取并显示`Chuck Norris`的笑话。

### [06-callback-hell（回调地狱）](./06-callback-hell/)
深入学习`Promise`,创建一个有多个嵌套回调函数。

### [07-promises](./07-promises/)
如何处理`Promise`，以及使用`Promise`构造函数创建它们。

### [08-callback-to-promise（从回调到Promise的重构）](./08-callback-to-promise/)
使用`Promise`重构回调地狱。

### [09-promise-chaining（Promise链式调用）](./09-promise-chaining/)
这是一种用于处理需要按顺序完成的异步任务的技术，或者当一个`Promise`返回的值需要在另一个`Promise`中使用时的常用技术。

### [10-promises-vs-callback-hell（Promises vs 回调地狱）](./10-promises-vs-callback-hell/)
这一部分，我们将把之前演示回调地狱的代码改为使用`Promise`。回调地狱是指多重嵌套的回调函数形成类似三角形的结构。通过使用`Promise`及其`.then`语法，我们可以利用`Promise`链式调用来显著简化代码结构。

### [11-promise-all](./11-promise-all/)
我们将学习如何使用`Promise.all()`方法。这是一种用于同时处理多个异步任务的方法，类似于我们之前使用的回调和`Promise`链式调用。
