import mysql from 'mysql'

const conexao = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:"root",
    password: "16dejulho2002",
    database:bd-copa
})

export default conexao