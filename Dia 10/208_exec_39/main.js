class Carro {
    constructor(marca, cor, gasolina, consumo) {
        this.marca = marca
        this.cor = cor
        this.gasolina = gasolina
        this.consumo = consumo
    }
    dirigir(km) {

        let litrosConsumidos = km / this.consumo
        this.gasolina -= litrosConsumidos
    }
    abastecer(litro) {

        this.gasolina += litro
    }
}

let carro = new Carro('Gol', 'branco', 50, 14)
console.log(carro)

carro.dirigir(100)
console.log(carro)
console.log(carro.gasolina.toFixed(2))

carro.abastecer(10)
console.log(carro)
console.log(carro.gasolina.toFixed(2))