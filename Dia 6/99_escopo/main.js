let num = 10

const numero = function() {
    let num = 25
    console.log(num)
}

console.log(num) // escopo global (10)

numero() // chama a funcao (25)

// Escopo com IF:
let x = 10

if(x > 5) {
    let x = 20
    x++
    console.log(x) // 21
}

console.log(x) // 10