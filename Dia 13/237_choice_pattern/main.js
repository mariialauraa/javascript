let frutas = /\d+ (bananas|peras|uvas)/

console.log(frutas.test("10 bananas")) //true
console.log(frutas.test("5 laranjas")) //false
console.log(frutas.test("3 uvas")) //true

let nomes = /\w+: (Maria|Miguel|Hugo)/

console.log(nomes.test("Nome: Maria")) //true
console.log(nomes.test("Hugo")) //false
console.log(nomes.test("Nome: Matheus")) //false