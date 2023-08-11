import mysql from 'mysql'

const conexao = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:"root",
    password: "16dejulho2002",
    database:'bd-copa'
})

conexao.connect()

const consulta = (sql, valores='', mensagemReject)=> {
    return new Promise((resolve, reject) =>{
        conexao.query(sql, selecao, (erro, resultado) => {
            if (erro) return reject("Nao foi possivel cadastrar")
    
            const row = JSON.parse(JSON.stringify(resultado))
            return resolve(row)
           })
       })
}
export default conexao