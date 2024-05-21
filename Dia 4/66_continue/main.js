let x = 0

while (x < 11) {
    x++
    if(x % 2 == 0) { // pula os números pares
        continue
    }
    console.log(x)
    x++
}

//Exemplo 2
for(let i = 10; i > 0; i--) {
    if(i % 2 == 0) {
        console.log('Caiu no continue')
        continue
    }
    console.log(i)
}