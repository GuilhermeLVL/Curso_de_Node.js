/*
import {createServer} from 'node:http'

********************************
//Request busca as informacoes no (BackEnd).
//Response Mostra as informacoes trazidas pelo Request no (FrontEND).
********************************
const server = createServer((request , response) => {
return response.write("ola")


})

server.listen(3333)
*/

import { fastify } from "fastify";
const server = fastify()

/****  O 4 Metodos mais famosos  ****/

        //Get => Buscar os dados
        //Post => Criar os dados
        //Put => Alterar os dados
        //Delete => Deletar os dados

    /****   Outros metodos  ****/

        //Path => Altera uma informcao expecifica do dado



        //Route Parameters(Informacao que expecifica o dado buscado (Id) )

//Rota para {-CRIAR-} o video
server.post('/videos',() =>{
    return ""
})

//Rota para {-BUSCAR-} o video
server.get('/videos',() => {
    return 'Hello World'
})

//Rota para {-ATUALIZAR-} o video
server.put('/videos/id',() => {
    return 'Hello Guilherme'
})
server.get('/node',() => {
    return 'Hello Amanda'
})

server.listen({
    port: 3333,
})
