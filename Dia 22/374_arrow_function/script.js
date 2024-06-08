const sum = function sum(a, b) {
    return a + b
}
console.log(sum(2, 8))

// Arrow Function
const arrowSum = (a, b) => {
    return a + b
}
console.log(arrowSum (2, 8))

const arrowSumUmaLinha = (a, b) => a + b
console.log(arrowSumUmaLinha(2, 8))

// Exemplo 2:
const greeting = (firstName) => {
    if (firstName) {
        return `Olá ${firstName}!`
    } else {
        return "Olá!"
    }
}

console.log(greeting("Maria"))
console.log(greeting())

const testeArrow = () => console.log('testou!')
testeArrow()

// 'this' da arrow function
const user = {
    firstName: 'Theo',
    sayUserName() {
        let self = this
        setTimeout(function() {
            console.log(self)
            console.log("Username: " + self.firstName)
        }, 500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log("Name: " + this.firstName)
        }, 700)
    }
}

user.sayUserName()
user.sayUserNameArrow()