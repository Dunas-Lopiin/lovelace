const express = require('express');
const app = express();
const fs = require('fs');
const port = 8080;
const factCalculadora = require('./backend/calcBack.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/calculadora', function(req, res){
    let valor1 = req.query.operador1;
    let valor2 = req.query.operador2;
    let operador = req.query.operando;
    if(operador === "mais"){
        operador = "+";
    }
    let calcular = factCalculadora.calculadora();
    console.log(valor1 + "/" + valor2 + "/" + operador);
    calcular.setOperand1(valor1);
    calcular.setOperand2(valor2);
    calcular.setOperation(operador);;
    let resultado = calcular.getResult();
    resultado = "[" + resultado + "]";
    calcular.clearCalculator();
    console.log(resultado);
    res.send(resultado);
});

app.listen(port, function() {
    console.log('O servidor está sendo executado na porta ' + port + '!');
    });