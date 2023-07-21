const express = require('express');

const routes = express.Router();
const users = [{
    id:1,
    name:"Guilherme",
    email:"guilherme@gmail.com ",
    password:"123123"
}]
routes.post('/login',(req, res) => {

    const {email, password} = req.body;

    const user = users.find(user => user.email === email && user.password === password) ;

    if(user){
        res.status(200).json(user);
    }

    res.send(401).json({message: "Invalid"  });
});

module.exports = routes;