class ContaBancaria {
    constructor(saldoConta, saldoPoupanca, jurosPoupanca) {
        this.saldoConta = saldoConta
        this.saldoPoupanca = saldoPoupanca
        this.jurosPoupanca = jurosPoupanca
    }
    deposito(valor) {
        this.saldoConta += valor
    }
    saque(valor) {
        this.saldoConta -= valor
    }
    transferirCP(valor) {
        this.saldoConta -= valor
        this.saldoPoupanca += valor
    }
    transferirPC(valor) {
        this.saldoPoupanca -= valor
        this.saldoConta += valor
    }
    jurosDeAniversario() {
        let juros =  (this.saldoPoupanca * this.jurosPoupanca) / 100
        this.saldoPoupanca += juros
    }
}

class ContaEspecial extends ContaBancaria {
    constructor(saldoConta, saldoPoupanca, jurosPoupanca) {
        super(saldoConta, saldoPoupanca, jurosPoupanca*2)
    }
}

let conta = new ContaBancaria(1000, 5000, 1)
console.log(conta)

conta.saque(500)
console.log(conta)

conta.deposito(5000)
console.log(conta)

conta.transferirCP(3000)
console.log(conta)

conta.jurosDeAniversario()
console.log(conta)

let contaEspecial = new ContaEspecial(10000, 50000, 1)
console.log(contaEspecial)

contaEspecial.saque(5000)
console.log(contaEspecial)

contaEspecial.jurosDeAniversario()
console.log(contaEspecial)