const usuario = /^(?=.{3,16}$)[a-z0-9-_]/

console.log(usuario.test("matheus_123")) //true
console.log(usuario.test("matheus")) //true
console.log(usuario.test("mt")) //false
console.log(usuario.test("matheus_12345678910")) //false
