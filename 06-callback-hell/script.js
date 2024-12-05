function getData(endpoint) {
  const XHR = new XMLHttpRequest()
  XHR.open("GET", endpoint)

  XHR.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log(JSON.parse(this.responseText))
    }
  }

  setTimeout(() => {
    XHR.send()
  }, Math.floor(Math.random() * 3000) + 1000)
}

getData("./movies.json")
getData("./actors.json")
getData("./directors.json")
