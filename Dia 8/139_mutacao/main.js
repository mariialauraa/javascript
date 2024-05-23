let pessoa = {
    nome: "Maria"
}

let pessoa2 = pessoa // referência de um obj c/ outro

console.log(pessoa == pessoa2)

pessoa2.nome = "Laura"
console.log(pessoa.nome) // Laura

pessoa.nome = "João"
console.log(pessoa2.nome) // João