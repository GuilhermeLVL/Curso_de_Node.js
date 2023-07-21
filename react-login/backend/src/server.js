//Importando o Express

const express = require("express")
const routes = require("./routes");
const cors = require("cors");
const app = express()

//Convertendo a saida do Express para Json
app.use(express.json())
app.use(cors())
app.use(routes)

//Definindo a Url padrao c
app.get('/',(req,res) =>{

    res.send('Hello World!')
})

//Definindo a porta padrao do servidor http://localhost:3000/
app.listen(3000, () =>{
    console.log('Escutando a porta 3000')
    
})

