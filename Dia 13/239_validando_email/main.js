let validarEmail = /\w+@\w+\.\w+/

console.log(validarEmail.test("maria@gmail.com")) //true
console.log(validarEmail.test("maria@gmail.com.br")) //true
console.log(validarEmail.test("maria@gmail.")) //false
console.log(validarEmail.test("maria@com")) //false
console.log(validarEmail.test("gmail.com")) //false