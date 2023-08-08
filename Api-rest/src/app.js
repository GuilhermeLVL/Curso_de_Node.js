import express from 'express'
import conexao from './app/database/conexao.js'

import selecaoControler from './app/controllers/selecaoControler.js'

const app = express()

// indicar para o express ler body com json
app.use(express.json())

// retornar o objeto por id
function buscarSelecaoPorId(id) {
    return selecoes.filter( selecao => selecao.id == id)
}

// pegar a posicao ou index do elemento do array por id
function buscarIndexSelecao(id) {
    return selecoes.findIndex( selecao => selecao.id == id)
}

// ROTAS
app.get('/selecoes', selecaoControler.index)

app.get('/selecoes/:id', selecaoControler.show)

app.post('/selecoes', selecaoControler.store)

app.put('/selecoes/:id', selecaoControler.update)

app.delete('/selecoes/:id',selecaoControler.delete)

export default app