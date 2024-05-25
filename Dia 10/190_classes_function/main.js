function criarCachorro(raca, patas, cor) {
    let cachorro = Object.create({}) // cria um obj vazio
    cachorro.raca = raca
    cachorro.patas = patas
    cachorro.cor = cor
    cachorro.latir = function() {
        console.log('Au au')
    }
    return cachorro // retorna o obj
}

let doberman = criarCachorro('Doberman', 4, 'preto')
console.log(doberman)
doberman.latir()

console.log(doberman.raca)
console.log(doberman.patas)
console.log(doberman.cor)