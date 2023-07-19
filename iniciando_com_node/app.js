//Inicializando o servidor com o Express
const express = require("express");

const app = express()

app.get("/primeira-rota",(request, response) => {

    return response.json({
        message:"Acessou a primeira rota"
    })
})

//Definindo a porta padrao como 4002
app.listen(4002,() => console.log('servidor esta rodando na porta 4002'))