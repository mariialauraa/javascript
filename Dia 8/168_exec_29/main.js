let onibus = {
    rodas: 8,
    limitePessoas: 40,
    portas: 2
}

console.log(onibus.rodas)
console.log(onibus.limitePessoas)
console.log(onibus.portas)

onibus.janelas = 20
console.log(onibus.janelas)

delete onibus.rodas
console.log(onibus.rodas)
console.log(onibus)