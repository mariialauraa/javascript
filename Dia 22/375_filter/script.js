const arr = [1, 2, 3, 4, 5]

const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n
    }
})

console.log(arr)
console.log(highNumbers)

// Exemplo 2:
const users = [
    {username: 'Matheus', available: true},
    {username: 'Maria', available: true},
    {username: 'Miguel', available: false},
    {username: 'Mayumi', available: false},
    {username: 'Laura', available: true},
]

const availableUser = users.filter((user) => user.available)
console.log(availableUser)

const notAvailableUser = users.filter((user) => !user.available)
console.log(notAvailableUser)