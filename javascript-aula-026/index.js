const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;
const aniversario = require('./public/scripts/aniversario');
const ramal = require('./public/scripts/ramais.js');
const setor = require('./public/scripts/setor.js');
const funcionariosjs = require('./public/scripts/funcionarios.js');
const FUNCIONARIOS = funcionariosjs.lista();

app.use(express.static('public'));

app.get('/usuarios/setor/:setor', function(req, res){
    let paramSetor = req.params.setor;
    paramSetor = paramSetor.toLowerCase();
    if(paramSetor === "limpeza" || paramSetor === "design" || paramSetor === "vendas" || paramSetor === "construcao" || paramSetor === "construção")
    {
        const funcionariosSetor = setor.filtrarSetor(FUNCIONARIOS, paramSetor)
        console.log("Alguns funcionários foram encontrados pela sua pesquisa!");
        console.log(funcionariosSetor);
        res.send(funcionariosSetor);
    }
    else{
        console.log("Pesquisa não encontrada!");
        res.send("Pesquisa não encontrada!");
    }
});

app.get('/usuarios/aniversario/:aniversario', function(req, res){
    let paramAniversario = req.params.aniversario;
    if(paramAniversario < 10){
        paramAniversario = "0" + paramAniversario;
        console.log(paramAniversario);
    }
    if(paramAniversario > 0 && paramAniversario <= 12){
        const aniversariantes = aniversario.filtrarAniversario(FUNCIONARIOS, paramAniversario);
        console.log(aniversariantes);
        res.send(aniversariantes);
    }
    else{
        console.log("Pesquisa não encontrada!");
        res.send("Pesquisa não encontrada!");
    }
});

app.get('/usuarios/ramal/', function(req, res){
    const ramaisOrganizados = ramal.organizarRamais(FUNCIONARIOS);
    console.log(ramaisOrganizados);
    res.send(ramaisOrganizados);
});

app.listen(port, function() {
    console.log('O servidor está sendo executado na porta ' + port + '!');
});