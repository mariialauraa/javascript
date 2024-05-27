const pontoRegex = /./
console.log("/./")
console.log(pontoRegex.test("letra")) //true
console.log(pontoRegex.test("letra 1")) //true
console.log(pontoRegex.test(" ")) //true
console.log(pontoRegex.test("123")) //true

const dRegex = /\d/ //[0-9]
console.log("/\d/")
console.log(dRegex.test("letra")) //false
console.log(dRegex.test("letra 1")) //true
console.log(dRegex.test(" ")) //false
console.log(dRegex.test("123")) //true

const dRegex2 = /\D/ //[^0-9]
console.log("/\D/")
console.log(dRegex2.test("letra")) //true
console.log(dRegex2.test("letra 1")) //true
console.log(dRegex2.test(" ")) //true
console.log(dRegex2.test("123")) //false

const sRegex = /\s/ //[" "]
console.log("/\s/")
console.log(sRegex.test("letra")) //false
console.log(sRegex.test("letra 1")) //true
console.log(sRegex.test(" ")) //true
console.log(sRegex.test("123")) //false

const sRegex2 = /\S/ //[^" "]
console.log("/\S/")
console.log(sRegex2.test("letra")) //true
console.log(sRegex2.test("letra 1")) //true
console.log(sRegex2.test(" ")) //false
console.log(sRegex2.test("123")) //true

const wRegex = /\w/ //[0-9 e letras]
console.log("/\w/")
console.log(wRegex.test("letra")) //true
console.log(wRegex.test("letra 1")) //true
console.log(wRegex.test(" ")) //false
console.log(wRegex.test("123")) //true

const wRegex2 = /\W/ //[^0-9 e ^letras]
console.log("/\W/")
console.log(wRegex2.test("letra")) //false
console.log(wRegex2.test("letra1")) //false
console.log(wRegex2.test(" ")) //true
console.log(wRegex2.test("123")) //false