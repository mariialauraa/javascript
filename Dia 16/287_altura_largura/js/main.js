let elemento = document.querySelector("#titulo-principal")

console.log('largura com bordas: ' + elemento.offsetWidth) //consideram as bordas
console.log('altura com bordas: ' + elemento.offsetHeight)

console.log('largura sem bordas: ' + elemento.clientWidth) //não consideram as bordas
console.log('altura sem bordas: ' + elemento.clientHeight)