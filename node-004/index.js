const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/usuarios/', function(req, res){
    res.send(CLIENTES);
});

app.get('/usuarios/id/:id/', function(req, res){
    let id = req.params.id; 
    let filtro = CLIENTES.filter(filtrarId);
    
    function filtrarId(lista){
        return lista.id == id;
    }
    res.send(filtro);
});

app.get('/usuarios/nome/:nome/', (req, res) => {
    let nome = req.params.nome;
    nome = nome.toLowerCase();
    let filtro = filtrarNome(nome);

    function filtrarNome(query) {
        return CLIENTES.filter(function(el){
            query = query.toString();
            let filtro = el.nome.toString().indexOf(query.toLowerCase()) > -1;
            return filtro;
        })
    }
    res.send(filtro);
});

app.get('/usuarios/email/:email', function(req, res){
    let email = req.params.email; 
    email = email.toLowerCase();
    let filtro = filtrarEmail(email);
    
    function filtrarEmail(query) {
        return CLIENTES.filter(function(el){
            query = query.toString();
            let filtro = el.email.t10oString().indexOf(query.toLowerCase()) > -1;
            return filtro;
        })
    }
    res.send(filtro);
});

app.delete('/usuarios/excluir/id', function(req, res){
    function excluirId(lista){
        return lista.id === idExcluir;
    }

    const idExcluir = req.query.id;
    const filtroExcluir = CLIENTES.findIndex(excluirId);
    CLIENTES.splice(filtroExcluir, 1);
    console.log(CLIENTES);
    res.send(CLIENTES);
})

app.delete('/usuarios/excluir/email', function(req, res){
    function excluirEmail(lista){
        return lista.email === idExcluir;
    }

    const emailExcluir = req.query.email;
    const filtroExcluir = CLIENTES.findIndex(excluirEmail);
    CLIENTES.splice(filtroExcluir, 1);
    console.log(CLIENTES);
    res.send(CLIENTES);
})

app.delete('/usuarios/excluir/nome', function(req, res){
    function excluirNome(lista){
        return lista.nome === nomeExcluir;
    }

    const nomeExcluir = req.query.nome;
    const filtroExcluir = CLIENTES.findIndex(excluirNome);
    CLIENTES.splice(filtroExcluir, 1);
    console.log(CLIENTES);
    res.send(CLIENTES);
})

let CLIENTES = [
    {
        "id": "1",
        "nome": "bruno santos",
        "email": "brunofernandes@gmail.com"
    },
    {
        "id": "2",
        "nome": "felipe augusto",
        "email": "fefe@outlook.com"
    },
    {
        "id": "3",
        "nome": "ingrid da silva",
        "email": "ingridmoon@yahoo.com.br"
    },
    {
        "id": "4",
        "nome": "alice santos",
        "email": "alifiremage16@firemage.com"
    },
    {
        "id": "5",
        "nome": "fernanda figueiredo cesar",
        "email": "sunandmoon@yahoo.com.br"
    },
    {
        "id": "6",
        "nome": "zetta fernandes",
        "email": "lopiin@lopiin.com.br"
    },
    {
        "id": "7",
        "nome": "gabriel santos",
        "email": "gabgab@gmail.com"
    },
    {
        "id": "8",
        "nome": "leticia santos",
        "email": "ticinha@yahoo.com.br"
    },
    {
        "id": "9",
        "nome": "sabrina figueiredo",
        "email": "sabiazinha@yahoo.com.br"
    },
    {
        "id": "10",
        "nome": "paulo cesar",
        "email": "cezarpaulo@yahoo.com.br"
    },
    {
        "id": "11",
        "nome": "julio augusto",
        "email": "jujulio@hotmail.com.br"
    },
    {
        "id": "12",
        "nome": "paulo henrique",
        "email": "pauloher@yahoo.com.br"
    },
    {
        "id": "13",
        "nome": "julio cesar",
        "email": "cezarjulio@yahoo.com.br"
    },
    {
        "id": "14",
        "nome": "plinio figueiredo",
        "email": "pinowfigueiredo@yahoo.com.br"
    },
    {
        "id": "15",
        "nome": "santana santos",
        "email": "santisanto@gmail.com"
    },
    {
        "id": "16",
        "nome": "douglas emanuel",
        "email": "dougem@outlook.com"
    },
    {
        "id": "17",
        "nome": "bruna aparecida",
        "email": "bruninha@yahoo.com.br"
    },
    {
        "id": "18",
        "nome": "alice da silva",
        "email": "alicesilva18@alicesilva.com"
    },
    {
        "id": "19",
        "nome": "carlos henrique dos santos",
        "email": "carlitos@yahoo.com.br"
    },
    {
        "id": "20",
        "nome": "ylana fernandes",
        "email": "ylana@lopiin.com.br"
    },
    {
        "id": "21",
        "nome": "gabriela santos",
        "email": "gabigabriela@gmail.com"
    },
    {
        "id": "22",
        "nome": "raissa ribeiro",
        "email": "rairib@yahoo.com.br"
    },
    {
        "id": "23",
        "nome": "victor escarel",
        "email": "vitaominimalista@yahoo.com.br"
    },
    {
        "id": "24",
        "nome": "ian real",
        "email": "realian@yahoo.com.br"
    },
    {
        "id": "25",
        "nome": "derik augusto",
        "email": "derikshinopeto@hotmail.com.br"
    },
    {
        "id": "26",
        "nome": "kenji hirohiko",
        "email": "kenjikenji@yahoo.com.br"
    },
    {
        "id": "27",
        "nome": "elisa cesar",
        "email": "lisalisa@yahoo.com.br"
    },
    {
        "id": "28",
        "nome": "jonathan joestar",
        "email": "linhagemjoestar@yahoo.com.br"
    },
    {
        "id": "29",
        "nome": "diego brando",
        "email": "itwasmedio@yahoo.com.br"
    },
    {
        "id": "30",
        "nome": "giovanni giorgio",
        "email": "giorgio@yahoo.com.br"
    }
];

app.listen(port, function() {
console.log('O servidor está sendo executado na porta ' + port + '!');
});