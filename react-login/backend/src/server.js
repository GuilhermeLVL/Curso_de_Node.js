//Importando o Express

const express = require("express")
const app = express()

//Convertendo a saida do Express para Json
app.use(express.json())

//Definindo a Url com o arquivo Json
app.get('/',(req,res) =>{

    res.send('Hello World!')
})