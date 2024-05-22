function nomeComIdade(nome, idade) {
    if(idade === undefined) {
        console.log("Seu nome é " + nome)
    } else {
        console.log("Seu nome é " + nome + " e você tem " + idade + " anos")
    }
}

nomeComIdade("Maria")
nomeComIdade("Maria", 32)

function soma(x, y) {
    if (x === undefined || y === undefined) {
        console.log("Esta função precisa ter os dois argumentos")
    } else {
        return x + y
    }
}

console.log(soma(4))
console.log(soma(4, 2))