//Inicializando o servidor com o Express
const express = require("express");

const app = express()

app.use(express.json())

const products = [];

/*
post = inseriri um dado
get = busca 1 ou mais dados
put = alterar um dado
Delete = remover um dado
*/

/*
Body => sempre que eu quiser enviar dados para minha aplicacao
params => /product/123123332
Query => /product?id=12312312&value=331231
*/

// url 
app.post("/products",(request, response) => {
    //Nome e Preco

    const {name, price} = request.body;

    products.push({
        name,
        price
    })

    console.log(body)
})

//Definindo a porta padrao como 4002
app.listen(4002,() => console.log('servidor esta rodando na porta 4002'))