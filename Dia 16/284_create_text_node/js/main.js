// Inserindo um texto em um elemento criado já no HTML
// <p id="sem-texto"></p>

let pSemTexto = document.getElementById("sem-texto")

let texto = document.createTextNode("Inserir este texto")

pSemTexto.appendChild(texto)