//Inicializando o servidor com o Express
const express = require("express");

const app = express()

const products = [];

/*
post = inseriri um dado
get = busca 1 ou mais dados
put = alterar um dado
Delete = remover um dado
*/

// url 
app.post("/products",(request, response) => {
    //Nome e Preco
    
})

//Definindo a porta padrao como 4002
app.listen(4002,() => console.log('servidor esta rodando na porta 4002'))