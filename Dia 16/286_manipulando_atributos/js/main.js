//No footer temos <a href="#">Site</a>

let a = document.querySelector("footer a")

console.log(a.getAttribute('href')) //vê o que ta no atributo (#)

let link = 'https://www.google.com'

a.setAttribute('href', link)

console.log(a.getAttribute('href')) //https://www.google.com