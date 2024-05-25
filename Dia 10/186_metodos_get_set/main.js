let cachorro = {
    raca: "SRD",
    latir: function() {
        console.log("Au au")
    },
    morder: function() {
        console.log("RUF RUF")
    },
    setRaca: function(raca) {
        this.raca = raca
    },
    getRaca: function() {
        return "A raça é " + this.raca
    }
}

console.log(cachorro.raca)
cachorro.setRaca("Dalmata")
console.log(cachorro.getRaca())
console.log(cachorro.raca)

console.log("--pausa--")

// Exemplo 2:
let pessoa = {
    nome: "Maria",
    setNome: function(novoNome) {
        this.nome = novoNome
    },
    getNome: function() {
        return this.nome
    }
}

console.log(pessoa.nome)
pessoa.setNome("Laura")
console.log(pessoa.getNome())
console.log(pessoa.nome)