let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Pegar apenas o elemento 4:
let elemento4 = numeros.slice(3, 4)

// Para pegar o elemento 4 ate o 8:
let elemento4a8 = numeros.slice(3, 8)

// Pegar a partir do elemento 5:
let elemento5s = numeros.slice(4)

// Pegar os dois últimos elementos do array:
let ultimos = numeros.slice(-2)

// Pegar a partir do elemento 3 e tirar os dois últimos:
let elemento3a7 = numeros.slice(2, -2)

console.log("Pegar apenas o elemento 4: " + elemento4)
console.log("Do elemento 4 ao 8: " + elemento4a8)
console.log("A partir do elemento 5 ate o final: " + elemento5s)
console.log("Os dois últimos elementos do array: " + ultimos) // 8 e 9
console.log("Do 3 ao 7: " + elemento3a7)