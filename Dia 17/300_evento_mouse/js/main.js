//mousedown, mouseup, dblclick

let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector('#btn2')

btn1.addEventListener("mousedown", function() {
    console.log("Apertou o botão")
})

btn1.addEventListener("mouseup", function() {
    console.log("Soltou o botão")
})

btn2.addEventListener("dblclick", function() {
    console.log("Duplo clique")
})

//clicar com o botão direito do mouse (contextmenu)
btn2.addEventListener("contextmenu", function(e) {
    e.preventDefault() //tira o menu que aparece
    console.log("Botão direito")
})