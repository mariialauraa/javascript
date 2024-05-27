let umOuMaisNumeros = /\d+/

console.log(umOuMaisNumeros.test("12345678910987654321")) //true
console.log(umOuMaisNumeros.test("1")) //true
console.log(umOuMaisNumeros.test(" ")) //false
console.log(umOuMaisNumeros.test("numero")) //false
console.log(umOuMaisNumeros.test("numero 1")) //true