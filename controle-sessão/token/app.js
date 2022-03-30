const express = require('express');
const app = express();
const port = 8080;
const fs = require('fs');
const bodyParser = require('body-parser');
const rota = require('./components/rotas.js');

app.use('/', express.static('public'));
app.use(bodyParser.json());
let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/usuarios/login', urlencodedParser, rota.validate);

app.post('/usuarios/adicionar', urlencodedParser, rota.add);

app.get('/usuarios/token/:token', rota.token);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
