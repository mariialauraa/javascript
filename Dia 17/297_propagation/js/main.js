let btn1 = document.querySelector("#btn1")
let p = document.querySelector("p")

function msg(event) {
    console.log("Clicou no button")
    event.stopPropagation() //para não acionar o evento do <p>
}

btn1.addEventListener("click", msg) //filho

//pai
p.addEventListener("click", function() {
    console.log("Clicou no paragrafo")
})