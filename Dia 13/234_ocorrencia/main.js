let telefone = /\(\d{2}\)\d{4,5}-\d{4}/

console.log("telefone")
console.log(telefone.test("(00)4004-5050")) //true
console.log(telefone.test("(11)99999-8080")) //true
console.log(telefone.test("(77)999-999")) //false
console.log(telefone.test("(1)9999-9")) //false

let cep = /\d{5}-\d{3}/

console.log("cep")
console.log(cep.test("88123-500")) //true
console.log(cep.test("cep")) //false
console.log(cep.test("123-456")) //false