let notAeB = /[^ab]/
console.log(notAeB.test("a")) //false (isolada)
console.log(notAeB.test("ab")) //false (isolada)
console.log(notAeB.test("b")) //false (isolada)
console.log(notAeB.test("Aqui tem b")) //true

let notAaZ = /[^a-z]/
console.log(notAaZ.test("asd")) //false
console.log(notAaZ.test("123")) //true
console.log(notAaZ.test("aquitemb")) //false
console.log(notAaZ.test("AquiTemB")) //true
console.log(notAaZ.test("aqui tem b")) //true