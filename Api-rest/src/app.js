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

function buscarIdexSelecao(id){
    return selecoes.findIndex( selecao => selecao.id == id)
}

const port = 3000


app.get('/', (req, res) => {

    res.status(200).send('Hello World!')

})


app.get('/selecoes/:id', (req, res) => {
  
  res.json( buscarSelecaoPorId(req.params.id))
})


app.post('/selecoes',(req, res) => {

    selecoes.push(req.body)

    res.status(201).send('Selecao cadastrada com sucesso!')
})

app.delete('/selecoes/:id', (req, res) => {

    let index = buscarSelecaoPorId(req.params.id)
    selecoes.splice(index, 1)
    res.send(`Selecao excluida com sucesso ID: ${req.params.id}`)
  })

  app.put('/selecoes/:id', (req, res) => {

    let index = buscarSelecaoPorId(req.params.id)
    selecoes.splice(index, 1)
    res.send(`Selecao excluida com sucesso ID: ${req.params.id}`)
  })


export default app