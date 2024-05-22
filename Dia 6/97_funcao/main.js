// Funcao sem parametro
function imprimirNoConsole() {
    console.log("Olá, mundo!")
}

imprimirNoConsole()

// Funcao com paramentro
function imprimirUmNumero(num) {
    console.log("O número é: " + num)
}

imprimirUmNumero(30)

// Funcao dentro de uma variavel
const numeroAleatorio = function() {
    console.log(Math.ceil(Math.random() * 100))
}

numeroAleatorio()
numeroAleatorio()

// Retornando um valor:
const soma = function(x, y) {
    return x + y
}

console.log(soma(5, 4))

// Função com if/else
const saudacao = function(nome) {
    if (nome == "Maria") {
        return `Olá ${nome}`
    }
    else {
        return "Você não está cadastrado"
    }
}

console.log(saudacao("Maria"))
console.log(saudacao("Miguel"))