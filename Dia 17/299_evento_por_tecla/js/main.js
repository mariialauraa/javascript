//keyup: solta a tecla
//keydown: aperta a tecla

//o keydown pode ficar rodando o evento infinito se eu não soltar a tecla
window.addEventListener("keydown", function(e) {
    if(e.key == 'q') {
        console.log('Apertou a letra q')
    }
    // else if(e.key == 'Enter') {
    //     console.log('Apertou o ENTER')
    // }
})

//por isso o keyup é mais recomendado
window.addEventListener("keyup", function(e) {
    if(e.key == "Enter") {
        console.log('Apertou o ENTER')
    }
})