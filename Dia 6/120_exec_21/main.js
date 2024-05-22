function tipoDeDado(dado) {
    if(typeof dado === 'string' ) {
        console.log("É uma string")
    } 
    else if(typeof dado === 'number') {
        console.log("É um number")
    }
    else if(typeof dado === 'boolean') {
        console.log("É um boolean")
    }
}

tipoDeDado(5)
tipoDeDado("Palavra")
tipoDeDado(true)