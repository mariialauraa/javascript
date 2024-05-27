let validarDomino = /[?www.]\w+\.com|com.br/

console.log(validarDomino.test("www.google.com")) //true
console.log(validarDomino.test("www.google.com.br")) //true
console.log(validarDomino.test("www.google")) //false
console.log(validarDomino.test(".google.com")) //true