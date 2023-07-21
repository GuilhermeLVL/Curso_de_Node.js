const express = require('express');

const routes = express.Router();

//Dados locais
const users = [{
    id:1,
    name:"Guilherme",
    email:"guilherme@gmail.com",
    password:"dasdasdas"
}]

routes.post('/login',(req, res) => {

    //Dados da api(node)
    const {email, password} = req.body;

    //Comparando os dados da api com os dados locaias
    const user = users.find(user => user.email === email && user.password === password) ;

    if(user){
       return res.status(200).json(user);
    }

    return res.send(401).json({message: "Invalid"  });
});

module.exports = routes;