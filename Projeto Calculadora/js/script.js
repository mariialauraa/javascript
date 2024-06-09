const previousOperationText = document.querySelector("#previous-operation")
const currentOperationText = document.querySelector("#current-operation")
const buttons = document.querySelectorAll("#buttons-container")

class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText // valor anterior impresso na tela
        this.currentOperationText = currentOperationText // valor impresso na tela
        this.currentOperation = "" // valor que ta sendo digitado
    }
    // add o digito na tela da calculadora
    addDigit(digit) {
        // checa se a operação já tem um ponto "."
        if (digit === "." && this.currentOperationText.innerText.includes(".")) {
            return;
        }

        this.currentOperation = digit
        this.updateScreen()
    }
    // processar as operações da calculadora
    processOperation(operation) {
        // checa se o valor atual é vazio e operação diferente de C
        if (this.currentOperationText.innerText === "" && operation !== "C") {
            // muda a operação
            if (this.previousOperationText.innerText !== "") {
                this.changeOperation(operation)
            }
            return // se o previous tiver vazio apenas retorna
        }

        // pega valor atual e anterior
        let operationValue
        const previous = Number(this.previousOperationText.innerText.split(" ")[0])
        const current = Number(this.currentOperationText.innerText)

        switch(operation) {
            case "+":
                operationValue = previous + current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "-":
                operationValue = previous - current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "*":
                operationValue = previous * current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "/":
                operationValue = previous / current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "DEL":
                this.processDelOperator();
                break;
            case "CE":
                this.processClearCurrentOperator();
                break;
            case "C":
                this.processClearOperator();
                break;
            case "=":
                this.processEqualOperator();
                break;
            default:
                return;
        }
    }

    // muda os valores na tela da calculadora
    updateScreen(
        operationValue = null, 
        operation = null, 
        current = null, 
        previous = null
    ) {
        if (operationValue === null) {
            // numero já digitado + numero q ta sendo digitado
            this.currentOperationText.innerText += this.currentOperation 
        } else {
            // checa se o valor é zero, se for add o currentValue
            if (previous === 0) {
                operationValue = current
            }
            // add o valor atual para cima (previous) junto com a operação (+, -, /, *)
            this.previousOperationText.innerText = `${operationValue} ${operation}`
            this.currentOperationText.innerText = ""
        }
    }

    // muda as operações matemáticas
    changeOperation(operation) {
        const mathOperations = ["*", "-", "+", "/"];

        if (!mathOperations.includes(operation)) {
            return
        }

        // remove o último caractere, ou seja a operação (+,-,/,*) e concatena com o novo operador
        this.previousOperationText.innerText = 
            this.previousOperationText.innerText.slice(0, -1) + operation
    }

    // botão DEL - deleta o último digito
    processDelOperator() {
        this.currentOperationText.innerText = 
            this.currentOperationText.innerText.slice(0, -1)
    }

    // botão CE - limpa o valor atual
    processClearCurrentOperator() {
        this.currentOperationText.innerText = ""
    }

    // botão C - limpa o valor atual e o valor anterior
    processClearOperator() {
        this.currentOperationText.innerText = ""
        this.previousOperationText.innerText = ""
    }

    // botão de =
    processEqualOperator() {
        const operation = previousOperationText.innerText.split(" ")[1] // pega a operação

        this.processOperation(operation)
    }
}

const calc = new Calculator(previousOperationText, currentOperationText)

// ativar os eventos de botões
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // pega o botão que foi clicado
        const value = e.target.innerText 
        if (Number(value) >= 0 || value === ".") {
            calc.addDigit(value)
        } else {
            calc.processOperation(value)
        }
    })
})