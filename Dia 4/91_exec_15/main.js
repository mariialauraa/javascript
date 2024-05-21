let num = prompt('Digite um número?')
let divisoes = 0 // numero primo só é divisivel por 'ele' e por '1'

// achar numero de divisoes
for (let i = 1; i <= num; i++) {
    // ex: 4 - 1, 2, 4 ñ é primo
    // ex: 5 - 1, 5 é primo
    if (num % i == 0) {
        divisoes++
    }
}

// numero de divisoes for igual a 2
if (divisoes == 2) { 
    console.log(`O número ${num} é primo`)
}
else {
    console.log(`O número ${num} não é primo`)
}