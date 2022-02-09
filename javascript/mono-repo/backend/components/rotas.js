const aniversario = require('./funcionarios/aniversario');
const Ramal = require('./funcionarios/ramais.js');
const Setor = require('./funcionarios/setor.js');
const Calculadora = require('./calculadora/calcBack.js');
const express = require('express');
const app = express();
let FUNCIONARIOS = require('./funcionarios/database.json');
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

function rotaCalculadora(req, res){
    let valor1 = req.query.operador1;
    let valor2 = req.query.operador2;
    let operador = req.query.operando;
    if(operador === "mais"){
        operador = "+";
    }
    let calcular = Calculadora.calculadora();
    console.log(valor1 + "/" + valor2 + "/" + operador);
    calcular.setOperand1(valor1);
    calcular.setOperand2(valor2);
    calcular.setOperation(operador);;
    let resultado = calcular.getResult();
    resultado = "[" + resultado + "]";
    calcular.clearCalculator();
    console.log(resultado);
    res.send(resultado);
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
    let invoices = JSON.parse(fs.readFileSync('components/funcionarios/database.json', 'utf8'));
    invoices.push(novoFuncionario);

    fs.writeFile('components/funcionarios/database.json', JSON.stringify(invoices), (err) => {
    if(err) console.log(err);
    res.send({error: false, msg: 'the invoice has been saved'});
  })
}

module.exports.ramal = rotaRamal;
module.exports.aniversario = rotaAniversario;
module.exports.setor = rotaSetor;
module.exports.adicionar = adicionarUsuario;
module.exports.calculadora = rotaCalculadora;