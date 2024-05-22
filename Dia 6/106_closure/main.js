function lembrarSoma(x) {
    return function(y) {
        return x + y
    }
}

let soma1 = lembrarSoma(2)
console.log(soma1(5)) // 2 + 5 = 7

let soma2 = lembrarSoma(5)
console.log(soma2(7)) // 5 + 7 = 12

//Exemplo:
function contador(i) {
    let cont = i
    let somarContador = function() {
        console.log(cont)
        cont++
    }
    return somarContador // sempre retorna uma função qdo trabalha com Closure
}

let meuContador = contador(5)
meuContador() // 5
meuContador() // 6
meuContador() // 7
