const validarIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/

console.log(validarIp.test("127.0.0.1")) //true
console.log(validarIp.test("8.8.8.8")) //true
console.log(validarIp.test("192.168.0.62")) //true
console.log(validarIp.test("192.168.0")) //false
console.log(validarIp.test("192")) //false
console.log(validarIp.test("1942.10068.0.123")) //false