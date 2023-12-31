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

import {DatabaseMemory} from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()


/****  O 4 Metodos mais famosos  ****/

        //Get => Buscar os dados
        //Post => Criar os dados
        //Put => Alterar os dados
        //Delete => Deletar os dados

    /****   Outros metodos  ****/

        //Path => Altera uma informcao expecifica do dado



        //Route Parameters(Informacao que expecifica o dado buscado (Id) )

//Rota para {-CRIAR-} o video
server.post('/videos',(request, reply) =>{
    database.create({
        title: 'Video 01',
        description: 'Esse e o video 01',
        duration:180,

    })

    console.log(database.list())

    return reply.status(201).send()
})

//Rota para {-BUSCAR-} o video
server.get('/videos',() => {
    return 'Hello World'
})


//O ID de '/videos/id' e um Route Parameters
//tem a funcao e de expecificar o elemento 
//que sera manipulado pelo metodo

//Rota para {-ATUALIZAR-} o video
server.put('/videos/id',() => {
    return 'Hello Guilherme'
})

//Rota para {-DELETAR-} o video
server.delete('/videos/id',() => {
    return 'Hello Amanda'
})




server.listen({
    port: 3333,
})
