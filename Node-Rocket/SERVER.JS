import {createServer} from 'node:http';


//Request faz tem afuncao de buscar dados(Busca no Back).
//Response Devolve o resultado buscado pelo Request(Mostra no Front).
const server = createServer((request, response) => {
  console.log("oi")

  return response.enn()
})

server.listen(3333)