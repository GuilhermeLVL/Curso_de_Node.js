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

findById(){}
update(){}
delete(){}

}

export default new selecaoRepository()
