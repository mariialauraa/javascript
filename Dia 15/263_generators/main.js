// Generator:
function* criadorId() {
    let id = 0

    while(true) {
        yield id++
    }
}

let criaId = criadorId()

console.log(criaId.next().value) // 0 - value = yield
console.log(criaId.next().value) // 1
console.log(criaId.next().value) // 2