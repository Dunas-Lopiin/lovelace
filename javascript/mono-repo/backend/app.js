const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;
const rota = require('./components/rotas.js');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/usuarios/setor', rota.setor);

app.get('/usuarios/aniversario', rota.aniversario);

app.get('/usuarios/ramal/', rota.ramal);

app.get('/calculadora', rota.calculadora);

app.post('/usuarios/adicionar/', rota.adicionar);

app.route('/games')
    .get(rota.show)
    .post(rota.game)

app.listen(port, function() {
    console.log('O servidor está sendo executado na porta ' + port + '!');
});