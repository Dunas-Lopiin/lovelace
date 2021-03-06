const aniversario = require('./aniversario.js');
const Ramal = require('./ramais.js');
const Setor = require('./setor.js');
const express = require('express');
const app = express();
const todosFuncionarios = require('./funcionarios.js');
let FUNCIONARIOS = require('./database.json');
const { json } = require('express/lib/response');
const fs = require('fs');
app.use(express.json());


function rotaSetor(req, res){
    let paramSetor = req.query.setor;
    console.log(paramSetor);
    paramSetor = paramSetor.toLowerCase();
    if(paramSetor === "business development" || paramSetor === "legal" || paramSetor === "accounting" || paramSetor === "research and development" || paramSetor === "human resources" || paramSetor === "marketing" || paramSetor === "sales" || paramSetor === "services" || paramSetor === "engineering" || paramSetor === "support" || paramSetor === "training" || paramSetor === "management")
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
    let paramAniversario = req.query.birthDay;
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
    const ramaisOrganizados = Ramal.organizarRamais(FUNCIONARIOS);
    res.send(ramaisOrganizados);
}

function adicionarUsuario(req, res){
    let novoFuncionario = req.body;
    let invoices = JSON.parse(fs.readFileSync('components/database.json', 'utf8'));
    invoices.push(novoFuncionario);

    fs.writeFile('components/database.json', JSON.stringify(invoices), (err) => {
    if(err) console.log(err);
    res.send({error: false, msg: 'the invoice has been saved'});
  })
}

module.exports.ramal = rotaRamal;
module.exports.aniversario = rotaAniversario;
module.exports.setor = rotaSetor;
module.exports.adicionar = adicionarUsuario;