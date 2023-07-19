//Inicializando o servidor com o Express
const express = require("express");

const { randomUUID} = require("crypto");
const { readSync } = require("fs");

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

    const product = {
        name,
        price,
        id: randomUUID()
    }

    products.push(product)

   return response.json(product)
});


app.get("/products", (request, response) =>{


    return response.json(products)

})

app.get("/pruducts/:id", (request, response) =>{
const {id } = response.params
const product = products.find(product => product.id === id)

return response.json(product)

})


//Definindo a porta padrao como 4002
app.listen(4002,() => console.log('servidor esta rodando na porta 4002'))