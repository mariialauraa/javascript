const person = {
    name: 'Jhon',
    lastname: 'Doe'
}

// Destructuring
const {name: fname, lastname: lname} = person

console.log(fname)
console.log(person.name)
console.log(lname)
console.log(person.lastname)