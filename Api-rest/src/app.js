import express from 'express'

const app = express()

//Mock
const selecoes = [
    {id:1, selecao:'Brasil', grupo:'G'},
    {id:2, selecao:'Suica', grupo:'G'},
    {id:3, selecao:'Servia', grupo:'G'},
    {id:4, selecao:'Camaroes', grupo:'G'},
]

const port = 3000

app.get('/', (req, res) => {

    res.status(200).send('Hello World!')

})

app.get('/selecoes', (req, res) => {

    res.send(selecoes)
})


export default app