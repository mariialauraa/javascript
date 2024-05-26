"use strict"

// erro falta o let ou const:
teste = "opa"

function teste() {
    "use strict"
    testando = "teste" // erro falta o let ou const
}

teste()

delete Object.prototype // erro não pode deletar objeto nativo