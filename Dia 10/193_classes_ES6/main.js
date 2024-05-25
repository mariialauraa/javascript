class Cachorro {
    // só é possivel add propriedades via constructor
    constructor(raca, cor) {
        this.raca = raca
        this.cor = cor
    }
    // métodos
    latir() {
        console.log("Au au")
    }
    brincar() {
        console.log("Auauau")
    }
}

// Propriedades via prototype
Cachorro.prototype.patas = 4;

let labrador = new Cachorro('Labrador', 'Caramelo');

console.log(labrador);
console.log(labrador.patas); // 4
labrador.latir();
labrador.brincar();