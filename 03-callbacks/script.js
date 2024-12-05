// function toggle(e) {
//   console.log("callback ran")
//   e.target.classList.toggle("danger")
// }

// document.querySelector("button").addEventListener("click", toggle)

const posts = [
  { title: "帖子一", body: "这是帖子一" },
  { title: "帖子二", body: "这是帖子二" },
]

function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      const div = document.createElement("div")
      div.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`
      document.querySelector("#posts").appendChild(div)
    })
  }, 1000)
}

getPosts()
