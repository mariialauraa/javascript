let validarDN = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/

console.log(validarDN.test("20/04/2002")) //true
console.log(validarDN.test("20/04/92")) //false
console.log(validarDN.test("20-04-2002")) //false
console.log(validarDN.test("4/20/2002")) //false
console.log(validarDN.test("2002/04/20")) //false
console.log(validarDN.test("99/99/9999")) //true