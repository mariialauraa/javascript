class Conta {
    constructor(saldo) {
        this.saldo = saldo
    }
    deposito(value) {
        return this.saldo += value
    }
    saque(value) {
        return this.saldo -= value
    }
}

let minhaConta = new Conta(1000)
console.log(minhaConta)

minhaConta.deposito(500)
console.log(minhaConta.saldo)

minhaConta.saque(200)
console.log(minhaConta.saldo)