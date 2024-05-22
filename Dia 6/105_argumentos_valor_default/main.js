function repetirFrase(frase, n=2) {
    for(let x = 1; x <= n; x++) {
        console.log(frase + " " + x)
    }
}

console.log("Testando", 5)
console.log("Só duas vezes")

// Caso o programador passe o argumento, o valor default é substituido.

function potencia(base, exp=2) {
    return Math.pow(base, exp)
}

console.log(potencia(8)) // 8**2
console.log(potencia(2,3)) // 2**3