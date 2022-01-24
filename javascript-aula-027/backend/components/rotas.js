const aniversario = require('./aniversario.js');
const Ramal = require('./ramais.js');
const Setor = require('./setor.js');
const express = require('express');
const app = express();
const todosFuncionarios = require('./funcionarios.js');
let FUNCIONARIOS = require('./funcionarios.json');
const { json } = require('express/lib/response');
const fs = require('fs');
app.use(express.json());

function rotaSetor(req, res){
    FUNCIONARIOS = require('./funcionarios.json');
    let paramSetor = req.query.setor;
    console.log(paramSetor);
    paramSetor = paramSetor.toLowerCase();
    if(paramSetor === "limpeza" || paramSetor === "design" || paramSetor === "vendas" || paramSetor === "construcao" || paramSetor === "construção")
    {
        const funcionariosSetor = Setor.filtrarSetor(FUNCIONARIOS, paramSetor)
        console.log("Alguns funcionários foram encontrados pela sua pesquisa!");
        console.log(funcionariosSetor);
        res.send(funcionariosSetor);
    }
    else{
        console.log("Pesquisa não encontrada!");
        res.send("Pesquisa não encontrada!");
    }
}

function rotaAniversario(req, res){
    FUNCIONARIOS = require('./funcionarios.json');
    let paramAniversario = req.query.aniversario;
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
}

function rotaRamal(req, res){
    FUNCIONARIOS = require('./funcionarios.json');
    const ramaisOrganizados = Ramal.organizarRamais(FUNCIONARIOS);
    res.send(ramaisOrganizados);
}

function adicionarUsuario(req, res){
    FUNCIONARIOS = require('./funcionarios.json');
    let novoFuncionario = req.body;
    let invoices = JSON.parse(fs.readFileSync('components/funcionarios.json', 'utf8'));
    invoices.push(novoFuncionario);

    fs.writeFile('components/funcionarios.json', JSON.stringify(invoices), (err) => {
    if(err) console.log(err);
    res.send({error: false, msg: 'the invoice has been saved'});
  })
    /* fs.appendFile('teste.json', novoFuncionario ,(err)=>{
        if(err) throw err;
        res.send(novoFuncionario);
    }) */
    //res.send(novoFuncionario);
}

module.exports.ramal = rotaRamal;
module.exports.aniversario = rotaAniversario;
module.exports.setor = rotaSetor;
module.exports.adicionar = adicionarUsuario;