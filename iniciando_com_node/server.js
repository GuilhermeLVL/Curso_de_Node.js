//Criando um servidor

const http = require("http");

http.createServer((request, response) => {

    response.writeHead(200, {'Content-Type': 'application/json'})


    //por meio do if, pode-se criar a url  "http://localhost:4001/produto"
        if(request.url === '/produto'){
            response.end(JSON.stringify({
                message:"Rota de produto"
            }))
        }

        if(response.url === '/usuario'){
        response.end(JSON.stringify({
            
            message:"rota de usario"
        }))

        }

        //Qualquer ur leva para essa pagina
        response.end(JSON.stringify({

            message:" Qualque outra rota"
        }))

})

.listen(4001,() => console.log('servidor esta rodadndo na porta 4001'))