let ano = /\d\d\d\d/
console.log("ano")
console.log(ano.test("05")) //false
console.log(ano.test("2024")) //true
console.log(ano.test("opa")) //false

let dia = /\d\d/
console.log("dia")
console.log(dia.test("05")) //true
console.log(dia.test("05") && "05".length == 2) //true
console.log(dia.test("2024")) //true
console.log(dia.test("2024") && "2024".length == 2) //false
console.log(dia.test("opa")) //false
console.log(dia.test("opa12")) //true

let palavraTresLetras = /\w\w\w/
console.log("Palavra com 3 letras")
console.log(palavraTresLetras.test("dia")) //true
console.log(palavraTresLetras.test("ano")) //true
console.log(palavraTresLetras.test("oi")) //false 
console.log(palavraTresLetras.test("teste")) //true
console.log(palavraTresLetras.test("teste") && "teste".length == 3) //false