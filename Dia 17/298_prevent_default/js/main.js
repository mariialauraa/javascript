let a = document.querySelector("a")

a.addEventListener("click", function(e) {
    e.preventDefault()
    console.log("Não vai mudar de link")
})