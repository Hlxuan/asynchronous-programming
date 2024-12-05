// let intervalID = setInterval(myCallback, 1000, "你好")
// function myCallback(a) {
//   console.log(a, Date.now())
// }

let intervalID

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(changeColor, 1000)
  }
}

function stopChange() {
  clearInterval(intervalID)
}

document.getElementById("start").addEventListener("click", startChange)

document.getElementById("stop").addEventListener("click", stopChange)

function changeColor() {
  if (document.body.style.backgroundColor !== "black") {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
  } else {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
  }
}
