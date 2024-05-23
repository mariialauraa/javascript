let num = 1
let num2 = 5
let num3 = 3
let num4 = 4

function imprimirNumeros(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i])
    }
}

imprimirNumeros(num, num2, num3, num4);
console.log('pausa')
imprimirNumeros(num2, num3);
console.log('pausa')
imprimirNumeros(1, 2, 4, 6, 8, 9);