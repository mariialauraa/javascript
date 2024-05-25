// Prototype é o pai de um Objeto

const pessoa = {
    maos: 2
}

console.log(Object.getPrototypeOf(pessoa)) 
console.log(Object.getPrototypeOf(pessoa) === Object.prototype) // true

console.log(pessoa.hasOwnProperty('maos')) // true

// Cria um objeto a partir de outro objeto:

let pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos) // 2
console.log(pessoaNova.hasOwnProperty('maos')) // false, 
//mas ele consegue acessar por causa do Prototype pessoa

console.log(Object.getPrototypeOf(pessoaNova) == pessoa) // true