function tamanhoDoTexto(string) {
    if(string.length > 10) {
        console.log("Texto muito longo")
    } else {
        console.log("Texto dentro do limite")
    }
    console.log(string.length)
}

tamanhoDoTexto("Olá mundo")
tamanhoDoTexto("Ola universo")
tamanhoDoTexto("Ola mundo!")