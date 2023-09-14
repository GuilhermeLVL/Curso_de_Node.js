import {createServer} from 'node:http'


//Request busca as informacoes no (BackEnd).
//Response Mostra as informacoes trazidas pelo Request no (FrontEND).

const server = createServer((request , response) => {
console.log('Oi');


})

server.listen(3333)
