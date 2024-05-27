// function verificarAlgo(num) {
//     return new Promise((resolve, reject) => {
//         if(num == 2) {
//             resolve(console.log("O número é 2"))
//         } else {
//             reject(new Error("Falhou"))
//         }
//     })
// }

// verificarAlgo(3)
// verificarAlgo(2)

// Exemplo

function verificarNumero(numero) {
    return new Promise((resolve, reject) => {
        if(numero == 2) {
            resolve(console.log(`O número é ${numero}`))
        } else {
            reject(new Error("Falhou"))
        }
    })
}

verificarNumero(2)
verificarNumero(5)