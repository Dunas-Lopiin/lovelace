const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/produto/all', function(req, res){
    res.send(produto);
});

app.route('/produto/:id')
    .get(function(req, res){
        const id = req.params.id; 
        const filtro = produto.filter(filtrarId); 
        function filtrarId(lista){
            return lista.id == id;
        }
        res.send(filtro);
    })
    .post(function(req, res){
        const novoProduto = req.body; 
        produto.push(novoProduto);
        res.send(produto);
    })
    .put(function(req, res){
        function modificarId(lista){
            return lista.id === idModificar;
        }

        const mudarProduto = req.body;
        const idModificar = req.params.id;
        const filtroModificar = produto.findIndex(modificarId);
        if(filtroModificar === -1){
            console.log(false);
            res.send(false);
        }
        else{
            produto[filtroModificar].nome = mudarProduto.nome;
            console.log(true);
            res.send(true);
        }

    })
    .delete(function(req, res){
        function excluirId(lista){
            return lista.id === idExcluir;
        }
    
        const idExcluir = req.params.id;
        const filtroExcluir = produto.findIndex(excluirId);
        if(filtroExcluir === -1){
            console.log(false);
            res.send(false);
        }
        else{
            produto.splice(filtroExcluir, 1);
            console.log(true);
            res.send(true);
        }
    })

let produto = [];

app.listen(port, function() {
console.log('O servidor está sendo executado na porta ' + port + '!');
});