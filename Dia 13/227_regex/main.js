console.log(/testando/.test("tttestandooo")) //true
console.log(/testando/.test("testaaando")) //false

const reg1 = new RegExp('bola')

console.log(reg1.test("Tem bola?")) //true
console.log(reg1.test("Não tem")) //false

const reg2 = /bola/
let text = 'Tem bola na cesta'

console.log(reg2.test(text)) //true
console.log(reg2.test("Tem bola?")) //true
console.log(reg2.test("Não tem")) //false