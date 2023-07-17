import app from "./src/app.js"

import conexao from "./infra/conexao.js"
const PORT = 3000

conexao.connect( (erro) => {
   if(erro){
    console.log(erro)
   }else{
    console.log('Deu Bom')
   }

})

app.listen(PORT, () =>{
    console.log(`${PORT}`)
})

