let y = 5

const multiplicar = function(n) {
    let y = n * 2
    console.log(y) // escopo da funcao

    if(y == 10) {
        let y = 55
        console.log(y) // escopo do if
    }
}

multiplicar(y) // Passei y = 5 como argumento (5*2) - Resultado: 10 e 55
console.log(y) // 5

// Exemplo 2:
let a = 10

function multiplicarDoisNumeros(x, y) {
    let a = x * y

    if(a > 10) {
        let a = 0
        console.log(a) // 21 > 10 = 0
    }
    console.log(a) // imprime o resultado da funcao = 21
}

multiplicarDoisNumeros(3, 7) // 21
console.log(a) // 10