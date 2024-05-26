function checarNumero(valor) {
    let resultado = Number(valor)
    if(Number.isNaN(resultado)) {
        alert("Por favor digite um numero")
        return null
    } else {
        return resultado
    }
}

console.log(checarNumero(5))
console.log(checarNumero('teste'))

let number = prompt("Digite um numero")
checarNumero(number)