function getData(endpoint) {
  const XHR = new XMLHttpRequest()
  XHR.open("GET", endpoint)

  XHR.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log(JSON.parse(this.responseText))
    }
  }
}
