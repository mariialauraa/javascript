//Inserir um elemento depois do <p>

let novoElemento = document.createElement("p")
let texto = document.createTextNode("Algum texto")

novoElemento.appendChild(texto)

//encontrar o pai do elemento <p>
let p = document.querySelector("#paragrafo-principal")
let pai = p.parentNode

pai.appendChild(novoElemento) //<p>Algum texto</p>