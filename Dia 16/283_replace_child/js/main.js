// Trocar o <h1> por um <p>

let novoElemento = document.createElement("p")
let texto = document.createTextNode("Algum texto") //entra no lugar de Algum título

novoElemento.appendChild(texto)

let h1 = document.querySelector("#titulo-principal")
let pai = h1.parentNode

pai.replaceChild(novoElemento, h1) //novo elemento, antigo elemento