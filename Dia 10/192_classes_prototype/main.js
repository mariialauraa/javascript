// apenas as propriedades
function Cachorro(raca, patas) {
    this.raca = raca
    this.patas = patas
}
// método atrelado ao prototype
Cachorro.prototype.latir = function() {
    console.log("Au au")
}

Cachorro.prototype.roncar = function() {
    console.log("room")
}

let pug = new Cachorro('Pug', 4)
console.log(pug)
console.log(pug.raca)
pug.latir()
pug.roncar()