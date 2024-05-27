console.log(/[123]/.test("Existe 123 aqui?")) //true
console.log(/[0-9]/.test("O numero 65 existe aqui?")) //true

const reg1 = /[12345]/
console.log(reg1.test("Temos o número 6")) //false
console.log(reg1.test("Temos o número 14")) //true

console.log(reg1.test("Temos números?")) //false