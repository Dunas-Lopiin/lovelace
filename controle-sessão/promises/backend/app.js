const express = require('express');
const res = require('express/lib/response');
const app = express();
const cors = require('cors');
const port = 3000;
const bodyParser = require('body-parser');

app.use(cors());

app.get('/promise/:numero', (req, res) => {
    let numero = parseInt(req.params.numero);
    console.log(numero);
    function funcaoY(num){
        const myRamdomNumber = parseInt(Math.random() * (num + 0) - 0);
        return myRamdomNumber;
    }

    setTimeout(() => {
        let randomNumber = funcaoY(100);
        console.log(randomNumber);
        res.send({randomNumber});
    }, numero);
});


app.listen(port, function() {
    console.log('O servidor está sendo executado na porta ' + port + '!');
});
