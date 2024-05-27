const validarMaiuscula = /[A-Z]/

console.log(validarMaiuscula.test("TESTANDO o teste")) //true
console.log(validarMaiuscula.test("testando o teste")) //false
console.log(validarMaiuscula.test("TESTANDO")) //true