const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("异步任务完成")
    resolve()
  }, 1000)
})

promise.then(() => {
  console.log("Promise已消耗")
})

console.log("来自全局作用域的输出")

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("异步任务2完成")
    resolve()
  }, 1000)
}).then(() => {
  console.log("Promise 2已消耗")
})
