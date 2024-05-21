/*
for(let i = 5; i < 20; i++) {
    if(i % 10 == 0) {
        console.log('Saiu do loop')
        break
    }
    console.log('Prosseguindo o loop')
}
*/
let nome = 'Maria'

for(let x = 0; x < 10; x++) {

    if(x == 3) {
        nome = 'Laura'
    }
    if(x == 5 && nome == 'Laura') {
        console.log('O nome é Laura, pode parar')
        break
    }
    console.log(x)
}