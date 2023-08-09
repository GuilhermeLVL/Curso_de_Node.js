import conexao from "../database/conexao.js"
import selecaoRepository from "../repositories/selecaoRepository.js"

class SelecaoControler {
    

    async index(req, res) {
        // res.status(200).send(selecoes)
       const row = await selecaoRepository.findAll()
       res.json(row)
    }


    show(req, res) {
        // res.json(buscarSelecaoPorId(req.params.id))
        const id = req.params.id
        const sql = "SELECT * FROM selecoes WHERE id=?;"
        conexao.query(sql, id, (erro, resultado) => {
            const linha = resultado[0]
            if(erro) {
                res.status(404).json({ 'erro': erro})
            } else {
                res.status(200).json(linha)
            }
        })
    }


    store(req, res) {
        // selecoes.push(req.body)
        // res.status(201).send('Seleção cadastrada com sucesso!')
        const selecao = req.body
        const sql = "INSERT INTO selecoes SET ?"
        conexao.query(sql, selecao, (erro, resultado) => {
            if(erro) {
                res.status(404).json({ 'erro': erro})
            } else {
                res.status(201).json(resultado)
            }
        })
    }


    update(req, res) {
  
        const id = req.params.id
        const selecao = req.body
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        conexao.query(sql, [selecao, id], (erro, resultado) => {
            if(erro) {
                res.status(404).json({ 'erro': erro})
            } else {
                res.status(200).json(resultado)
            }
        })
    }


    delete(req, res){
    
        const id = req.params.id
        const sql = "DELETE FROM selecoes WHERE id=?;"
        conexao.query(sql, id, (erro, resultado) => {
            const linha = resultado[0]
            if(erro) {
                res.status(404).json({ 'erro': erro})
            } else {
                res.status(200).json(linha)
            }
        })
    }

}

//Padrao singleTon
export default new SelecaoControler()