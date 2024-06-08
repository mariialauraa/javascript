// Com Array
const fruits = ["Maça", "Laranja", "Banana"]

const [fruta1, fruta2, fruta3] = fruits // os índices das frutas

console.log(fruta1)
console.log(fruta2)
console.log(fruta3)

// Com Objeto
const productDetails = {
    name: "mouse",
    price: 39.99,
    category: "perifericos",
    color: "cinza"
}

const {name: productName, price, category: productCategory, color} = productDetails

console.log(`O nome do produto é ${productName}, custa R$${price}, pertencem a categoria ${productCategory} e é da cor ${color}.`)