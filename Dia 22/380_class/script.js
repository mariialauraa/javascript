class Product {
    constructor(name, price) { // inicia propriedades
        this.name = name
        this.price = price
    }
    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product("Camisa", 20)
console.log(shirt.name)
console.log(shirt.price)
console.log(shirt.productWithDiscount(10))

console.log(`A ${shirt.name} ficou R$${shirt.productWithDiscount(10)} com desconto.`)

const tenis = new Product("Adidas", 399)
console.log(tenis.name)
console.log(tenis.price)
console.log(tenis.productWithDiscount(15))

console.log(`Promoção ${tenis.name} com 15% de descontos, custando R$${tenis.productWithDiscount(15)}`)