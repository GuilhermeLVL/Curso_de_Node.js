import conexao from "../database/conexao.js"
import selecaoRepository from "../repositories/selecaoRepository.js"

class SelecaoControler {
    

    async index(req, res) {
        // res.status(200).send(selecoes)
       const row = await selecaoRepository.findAll()
       res.json(row)
    }


    async show(req, res) {

        const id = req.params.id
         const row = await selecaoRepository.findById(id)
        res.json(row)
    }


   async store(req, res) {
        
        const selecao = req.body
        const row = await selecaoRepository.create(selecao)
        res.json(row)
    }


    async update(req, res) {
  
        const id = req.params.id
        const selecao = req.body
        const row = await selecaoRepository.update(selecao,id)
        res.json(row)
        
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