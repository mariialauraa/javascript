class Mamifero {
    constructor(patas) {
        this.patas = patas
    }
}

class Cachorro extends Mamifero {
    constructor(patas, raca) {
        super(patas, patas) //settar a propriedade da classe pai
        this.raca = raca
    }
}

let pug = new Cachorro(4, 'Pug')
console.log(pug)
console.log(pug.patas)

// Verica quem é o pai do objeto
console.log(new Cachorro instanceof Mamifero)