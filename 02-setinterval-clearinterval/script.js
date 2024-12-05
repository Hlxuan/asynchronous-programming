let intervalID = setInterval(myCallback, 1000, "你好")
function myCallback(a) {
  console.log(a, Date.now())
}

function stopChange() {
  clearInterval(intervalID)
}
document.getElementById("stop").addEventListener("click", stopChange)
