const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

app.use(express.static('public'));

app.get('/usuarios/', function(req, res){
    console.log("entrou aqui!");
})

app.get('/usuarios/id/:id/', function(req, res){
    let id = req.params.id; 
    let filtro = usuarios.filter(filtrarId);
    
    function filtrarId(lista){
        return lista.id == id;
    }
    res.send(filtro);
})

app.get('/usuarios/nome/:nome/', function(req, res){
    let nome = req.params.nome;
    nome = nome.toLowerCase();
    filtro = filtrarNome(nome);

    function filtrarNome(query) {
        return usuarios.filter(function(el){
            query = query.toString();
            filtro = el.nome.toString().indexOf(query.toLowerCase()) > -1;
            return filtro;
        })
    }
    res.send(filtro);
})

app.get('/usuarios/email/:email', function(req, res){
    let email = req.params.email; 
    email = email.toLowerCase();
    let filtro = usuarios.filter(filtrarEmail);
    
    function filtrarEmail(lista){
        return lista.email == email;
    }
    res.send(filtro);
})

const usuarios = [
    {
        "id": 1,
        "nome": "bruno santos",
        "email": "brunofernandes@gmail.com"
    },
    {
        "id": 2,
        "nome": "felipe augusto",
        "email": "fefe@outlook.com"
    },
    {
        "id": 3,
        "nome": "ingrid da silva",
        "email": "ingridmoon@yahoo.com.br"
    },
    {
        "id": 4,
        "nome": "alice santos",
        "email": "alifiremage16@firemage.com"
    },
    {
        "id": 5,
        "nome": "fernanda cesar",
        "email": "sunandmoon@yahoo.com.br"
    },
    {
        "id": 6,
        "nome": "zetta fernandes",
        "email": "lopiin@lopiin.com.br"
    },
    {
        "id": 7,
        "nome": "gabriel santos",
        "email": "gabgab@gmail.com"
    },
    {
        "id": 8,
        "nome": "leticia santos",
        "email": "ticinha@yahoo.com.br"
    },
    {
        "id": 9,
        "nome": "sabrina figueiredo",
        "email": "sabiazinha@yahoo.com.br"
    },
    {
        "id": 10,
        "nome": "paulo cesar",
        "email": "cezarpaulo@yahoo.com.br"
    },
    {
        "id": 11,
        "nome": "julio augusto",
        "email": "jujulio@hotmail.com.br"
    },
    {
        "id": 12,
        "nome": "paulo henrique",
        "email": "pauloher@yahoo.com.br"
    },
    {
        "id": 13,
        "nome": "julio cesar",
        "email": "cezarjulio@yahoo.com.br"
    },
    {
        "id": 14,
        "nome": "plinio figueiredo",
        "email": "pinowfigueiredo@yahoo.com.br"
    },
];

app.listen(port, function() {
console.log('App de Exemplo escutando na porta ' + port + '!');
});