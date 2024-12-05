const jokeEl = document.getElementById("joke")
const jokeBtn = document.getElementById("joke-btn")

const generateJoke = () => {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", "https://api.chucknorris.io/jokes/random", true)

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        const joke = JSON.parse(this.responseText).value
        jokeEl.innerHTML = joke
      } else {
        jokeEl.innerHTML = "出现错误，不好笑。"
      }
    }
  }

  xhr.send()
}

jokeBtn.addEventListener("click", generateJoke)

document.addEventListener("DOMContentLoaded", generateJoke)
