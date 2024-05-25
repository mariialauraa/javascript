class CarrinhoCompras {
    constructor(itens, qtdeTotal, valorTotal) {
        this.itens = itens
        this.qtdeTotal = qtdeTotal
        this.valorTotal = valorTotal
    }
    adicionar(item) {

        let contador = 0

        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].qtde += item.qtde
                contador = 1
            }
        }
        if(contador == 0) {
            this.itens.push(item) //add item direto no array de itens
        }

        // qtdeTotal:
        this.qtdeTotal += item.qtde
        this.valorTotal += item.preco * item.qtde  
    }
    remover(item) {
        
        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id) {
                
                // achar o indice para poder remover
                let obj = this.itens[itemCarrinho]
                let index = this.itens.findIndex(function(obj) {
                    return obj.id == item.id
                })
                
                // remover os valores da qtdeTotal:
                this.qtdeTotal -= this.itens[itemCarrinho].qtde
                this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtde 
                
                // remover item:
                this.itens.splice(index, 1)
            }
        }
    }
}

// instância do objeto
let meuCarrinho = new CarrinhoCompras([
    // array de itens:
    {
        id: 1,
        nome: 'Camisa',
        qtde: 1,
        preco: 20
    },
    {
        id: 2,
        nome: 'Calça',
        qtde: 2,
        preco: 50 
    }
], 3, 120) //qtdeTotal e valorToral

console.log(meuCarrinho) // 3 e 120 

meuCarrinho.adicionar({id: 1, nome: 'Camisa', qtde: 2, preco: 20}) 
console.log(meuCarrinho) // 5 e 160

meuCarrinho.adicionar({id: 3, nome: 'Boné', qtde: 1, preco: 15}) 
console.log(meuCarrinho) // 6 e 175

meuCarrinho.remover({id: 1, nome: 'Camisa', qtde: 2, preco: 20})
console.log(meuCarrinho) // 