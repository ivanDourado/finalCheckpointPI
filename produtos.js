/* 
 Qualidade do Produto: 0~10;
Status : Booleano;
*/
/* 
Em seguida, um usuário deseja filtrar os produtos, com base em alguns
critérios. Selecione todos os produtos que tenham:
Valor entre 482 e 1600;
Qualidade superior a 6;
Status como disponível.
O resultado do filtro deve ser armazenado na variável carrinho.
*/

let produtos = [
    {
        nome_do_produto: "Limpador de parabrisa dianteiro",
        valorDoProduto: 570,
        qualidadeDoProduto:7,
        status:true
    },

    
    {
        nome_do_produto: "Limpador de motor interno",
        valorDoProduto: 500,
        qualidadeDoProduto:5,
        status:false
    },

    
    {
        nome_do_produto: "Limpador de metal",
        valorDoProduto: 510,
        qualidadeDoProduto:8,
        status:false
    },

    
    {
        nome_do_produto: "Limpador de motores a diesel",
        valorDoProduto: 590,
        qualidadeDoProduto:9,
        status:true
    },

];

module.exports = produtos;

    