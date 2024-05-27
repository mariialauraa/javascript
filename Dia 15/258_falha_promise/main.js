// let promiseErrada = Promise.resolve(new Error("Algo deu errado"))

// promiseErrada
//     .then((value) => console.log(value))
//     .catch(reason => console.log("Erro: " + reason))

// Exemplo:

let promiseIncorreta = Promise.resolve(new Error("Não deu certo"))

console.log("executado...")

promiseIncorreta   
    .then((value) => console.log(value))
    .catch(reason => console.log(reason))