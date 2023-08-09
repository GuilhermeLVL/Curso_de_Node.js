import conexao from "../database/conexao.js"

class selecaoRepository{
//crud
create(){}

findAll(){
    const sql = "SELECT * FROM selecoes;"
   return new Promise((resolve, reject) =>{
    conexao.query(sql, (erro, resultado) => {
        if (erro) return reject("Nao foi possivel localizar")

        const row = JSON.parse(JSON.stringify(resultado))
        return resolve(row)
    })
   })
}

findById(id){
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
update(){}
delete(){}

}

export default new selecaoRepository()
