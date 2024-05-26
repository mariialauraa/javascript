let arr = [1, 2, 3, 4, 5]
let arr2 = []

// function iterarArray(array) {
//     if(array.length == 0) {
//         throw new Error("O array precisa ter pelo menos um elemento")
//     } else {
//         for(let i = 0; i < array.length; i++) {
//             console.log(i)
//         }
//     }
// }

function arrayVazio(array) {
    if(array.length > 0) {
        throw new Error("O array não pode ter elementos")
    } else {
        console.log("Agora deu certo")
    }
}

// iterarArray(arr)
// iterarArray(arr2)

arrayVazio(arr2)
arrayVazio(arr)