let cachorro = {
    patas: 4,
    raca: 'SRD',
    latir: function() {
        console.log("Au au")
    }
}

let labrador = Object.create(cachorro)
// Instanciando objetos a partir de uma classe
console.log(labrador.patas) // 4
labrador.latir() // Au au

console.log(labrador.raca) // SRD
labrador.raca = "Labrador"
console.log(labrador.raca) // Labrador
console.log(cachorro.raca) // SRD

// Serve como um molde para os próximos cachorros
let pastorAlemao = Object.create(cachorro)
pastorAlemao.raca = "Pastor Alemao"
console.log(pastorAlemao.raca) // Pastor Alemao