function Cachorro(raca, patas) {
    this.raca = raca
    this.patas = patas
    this.uivar = function() {
        console.log('Auuu')
    }
}

let husky = new Cachorro('Husky', 4)
console.log(husky)
console.log(husky.patas)
husky.uivar()