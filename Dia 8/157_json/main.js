let pessoa = {
    "name": "Maria",
    "age": 32,
    "position": "Developer",
    "languages": ["Ruby", "Java", "JavaScript"]
}

console.log(pessoa.name)
console.log(pessoa.languages)

// JSON para String
let jsonToString = JSON.stringify(pessoa)
console.log(jsonToString)

// String para JSON
let stringToJson = JSON.parse(jsonToString)
console.log(stringToJson)
console.log(stringToJson.languages[2])