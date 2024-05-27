const validaMarca = /Marca: (Nike|Adidas|Puma|Asics)/

console.log(validaMarca.test("Marca: Puma")) //true
console.log(validaMarca.test("Marca: ")) //false
console.log(validaMarca.test("Marca: Rainha")) //false
console.log(validaMarca.test("Nike")) //false