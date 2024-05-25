// É utilizada como uma CONSTANTE, só q para propriedade de objeto

class Cachorro {
    constructor(raca) {
        this.raca = raca
    }
}

let patas = Symbol()
Cachorro.prototype[patas] = 4

let golden = new Cachorro('Golden Retriever')
console.log(golden.raca)

// acessando symbol
console.log(Cachorro.prototype[patas])
console.log(golden[patas])