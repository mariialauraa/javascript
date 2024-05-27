const validarId = /\d+ID\b/ // \b certifica que a string terminou com ID

console.log(validarId.test("123ID")) //true
console.log(validarId.test("ID123")) //false
console.log(validarId.test("2ID")) //true
console.log(validarId.test("ID")) //false
console.log(validarId.test("meuID")) //false