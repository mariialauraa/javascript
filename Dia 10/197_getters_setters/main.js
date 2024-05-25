class Cachorro {
    constructor(raca, cor) {
        this.raca = raca
        this.cor = cor
    }

    get getCor() {
        return 'A cor do cachorro é ' + this.cor
    }

    set setCor(cor) {
        this.cor = cor
    }
}

let pastor = new Cachorro('Pastor Alemao', undefined)
console.log(pastor)

pastor.setCor = 'capa preta'
console.log(pastor.getCor)