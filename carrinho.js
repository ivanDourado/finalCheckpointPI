const produtos = require("./produtos");
/* 
Em seguida, um usuário deseja filtrar os produtos, com base em alguns
critérios. Selecione todos os produtos que tenham:
Valor entre 482 e 1600;
Qualidade superior a 6;
Status como disponível.
O resultado do filtro deve ser armazenado na variável carrinho.
*/
/*let array = array.filter() */
let carrinho = produtos.filter( item =>{
    let qualidade = item.qualidadeDoProduto;
    let statusEstoque = item.status;
    let valor = item.valorDoProduto;

    let exigido = ( valor >= 482 && valor <= 1600 && qualidade > 6 && statusEstoque == true ); 
    return exigido;    
} );


let valorTotalCarrinho  = carrinho.reduce( (x,y)=>{return x.valorDoProduto +y.valorDoProduto}); 

 console.table(carrinho); 
console.log(` Totalizando o valor de ${valorTotalCarrinho}`);

