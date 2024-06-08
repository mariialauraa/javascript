// Com Array
const num1 = [1, 2, 3]
const num2 = [4, 5, 6]

const numeros = [...num1, ...num2]
console.log(numeros) // 1, 2, 3, 4, 5, 6

const numero = [0, ...num1, 4]
console.log(numero) // 0, 1, 2, 3, 4

// Com Objeto
const carName = {name: 'Gol'}
const carBrand = {brand: 'VW'}
const otherInfos = {color: 'red', price: 49000}

const car = {...carName, ...carBrand, ...otherInfos, wheels: 4}
console.log(car)