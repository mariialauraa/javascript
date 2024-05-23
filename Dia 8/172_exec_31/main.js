let amigos = ["Maria", "Mayumi", "Miguel", "Vanusa", "Guilherme"]

let primos = ["Duda", "Carlos", "Lara"]

function numElementos(array) {
    if(array.length >= 5) {
        console.log("Muitos elementos")
    } else {
        console.log("Poucos elementos")
    }
}

numElementos(amigos)
numElementos(primos)