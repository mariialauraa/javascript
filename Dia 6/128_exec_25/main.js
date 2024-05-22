function numerosPares(num) {
    for(let i = num; i > 0; i--) {
        if(i % 2 == 0) {
            console.log(i)
        }
    }
}

numerosPares(5)
numerosPares(100)