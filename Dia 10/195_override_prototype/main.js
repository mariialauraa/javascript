class Cachorro {
    constructor (raca) {
        this.raca = raca
    }
}

let poodle = new Cachorro('Poodle')

Cachorro.prototype.raca = 'SRD'

console.log(Cachorro.prototype.raca) // valor default
console.log(poodle.raca) // valor da instancia do objeto