import express from 'express'
import conexao from '../infra/conexao'

const app = express()


app.use(express.json())


function buscarSelecaoPorId(id){
    return selecoes.filter(selecao => selecao.id == id)

}

function buscarIdexSelecao(id){
    return selecoes.findIndex( selecao => selecao.id == id)
    
}

const port = 3000

app.post('/selecoes',(req, res) => {

 
const sql = 'SELECT * FROM selecoes;'

 conexao.query(sql, (erro, resultado) => {

  if(erro){
    console.log(erro)

  }else{
    res.status(200).json(resultado)
  }

 })
 
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

    let index = buscarIdexSelecao(req.params.id)
    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo =   req.body.selecao

    res.json(selecoes)
  })


export default app