setTimeout(function () {
  console.log("来自回调的输出")
}, 2000)

console.log("来自全局作用域的输出")

function changeText() {
  const h1 = document.querySelector("h1")
  h1.textContent = "来自回调的输出"
}
setTimeout(changeText, 2000)

const timerID = setTimeout(changeText, 3000)

document.querySelector("#cancel").addEventListener("click", function () {
  clearTimeout(timerID)
  console.log("定时器 ID:", timerID)
  console.log("定时器已取消")
})
