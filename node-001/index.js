const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;
var static = require('node-static');
var http = require('http');

app.use(express.static('public'));

var file = new(static.Server)(__dirname);

http.createServer(function (req, res) {
  file.serve(req, res);
}).listen(port);


app.get('/produtos/:id', function(req, res){
        let id = req.params.id;        
        if(id == 1){
                const id1 = produto[0].nome;
                res.send(id1);
        }
        else if (id == 3){
                const id3 = produto[1].nome + " e " + produto[3].nome;
                res.send(id3);
        }
        else if (id == 6){
                const id6 = produto[2].nome;
                res.send(id6);
        }

        else if(id != Number && id != undefined){
                res.send("Não existem produtos com o id fornecido");
        }
        //res.send(produto[id].nome);
})

const produto = [
    {
     "id": 1,
     "nome": "Produto A"
    },
    {
     "id": 3,
     "nome": "Produto B"
    },
    {
     "id": 6,
     "nome": "Produto C"
    },
    {
     "id": 3,
     "nome": "Produto D"
}];

app.listen(port, function() {
console.log('App de Exemplo escutando na porta ' + port + '!');
});
