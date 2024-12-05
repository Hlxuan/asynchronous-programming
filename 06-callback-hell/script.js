function getData(endpoint, cb) {
  const XHR = new XMLHttpRequest()
  XHR.open("GET", endpoint)
  XHR.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      cb(JSON.parse(this.responseText))
    }
  }
  setTimeout(() => {
    XHR.send()
  }, Math.floor(Math.random() * 3000) + 1000)
}

getData("./movies.json", (moviesData) => {
  console.log(moviesData)
  getData("./actors.json", (actorsData) => {
    console.log(actorsData)
    getData("./directors.json", (directorsData) => {
      console.log(directorsData)
    })
  })
})
