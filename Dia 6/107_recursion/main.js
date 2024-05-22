function retornarNumeroPar(n) {
    if(n % 2 == 0) {
        console.log("n agora é par: " + n) // #2 32
    }
    else {
        console.log(n) // #1 = 33
        retornarNumeroPar(n - 1) // 33-1 = 32
    }
}

retornarNumeroPar(33)
retornarNumeroPar(30)