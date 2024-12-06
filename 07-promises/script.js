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

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "John", age: 30 })
  }, 1000)
}).then((user) => {
  console.log(user)
})

const getUser = new Promise((resolve, reject) => {
  const error = false
  if (!error) {
    resolve({ name: "John", age: 30 })
  } else {
    reject("发生错误。")
  }
})
getUser
  .then((user) => {
    console.log(user)
  })
  .catch((error) => {
    console.log(error)
  })
  .finally(() => {
    console.log("Promise已解决或被拒绝。")
  })
