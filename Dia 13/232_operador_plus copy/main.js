let opcional = /Prova\s?\d?/

console.log(opcional.test("Prova")) //true
console.log(opcional.test("Prova 1")) //true
console.log(opcional.test("Prova 2")) //true

const padrao = /Abacax?i/

console.log(padrao.test("Abacaxi")) //true
console.log(padrao.test("Abacai")) //true
console.log(padrao.test("Abcaxi")) //false

const padrao2 = /\d+\w?/

console.log(padrao2.test("123")) //true
console.log(padrao2.test("123 abc")) //true
console.log(padrao2.test("123 ")) //true