const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("异步任务完成")
    resolve()
  }, 1000)
})

promise.then(() => {
  console.log("Promise已消耗")
})
