function somaComDelay(a, b) {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(a + b) // 3
        }, 2000)
    })
}

async function soma(a, b, c) {
    let x = somaComDelay(a, b) // 3
    let y = c // 3

    return await x + y // 6
}

soma(1, 2, 3).then((value) => console.log(value))