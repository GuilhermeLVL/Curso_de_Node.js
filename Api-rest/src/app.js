import express from 'express'

const app = express()


app.use(express.json())

//Mock
const selecoes = [
    {id:1, selecao:'Brasil', grupo:'G'},
    {id:2, selecao:'Suica', grupo:'G'},
    {id:3, selecao:'Servia', grupo:'G'},
    {id:4, selecao:'Camaroes', grupo:'G'},
]


function buscarSelecaoPorId(id){
    return selecoes.filter(selecao => selecao.id == id)

}


const port = 3000

app.get('/', (req, res) => {

    res.status(200).send('Hello World!')

})

app.get('/selecoes', (req, res) => {
    
    
})

app.get('/selecoes/:id', (req, res) => {
  
  res.json( buscarSelecaoPorId(req.params.id))
})

app.post('/selecoes',(req, res) => {

    selecoes.push(req.body)

    res.status(201).send('Selecao cadastrada com sucesso!')
})


export default app