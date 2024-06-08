const products = [
    {productName: 'Camisa', price: 10.99, category: 'Roupas'},
    {productName: 'Chaleira Elétrica', price: 49.99, category: 'Eletro'},
    {productName: 'Fogão', price: 400.00, category: 'Eletro'},
    {productName: 'Calça jeans', price: 50.99, category: 'Roupas'},
]

products.map((product) => {
    if (product.category === 'Roupas') {
        product.onSale = true
    }
})

console.log(products)