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
        const myRamdomNumber = Math.random() * (num + 0) - 0;
        return myRamdomNumber;
    }
    const comparacao = new Promise((resolve, reject) => {
        try {
            resolve(funcaoY(100));
        } catch (e) {
            console.log("promise rejeitada por causa do erro: " + e);
            reject(e);
        }
    })
    
    setTimeout(() =>{
        comparacao
        .then((resposta) =>  res.send({resposta}))
        .catch((erro) => console.log("temos um problema: " + erro))

    comparacao
        .then(resposta => { console.log(resposta) }, erro => { console.log("esse erro " + erro) })
    }, numero);

    /* const comparacao = new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                console.log("testando promise");
                resolve(funcaoY(10));
            } catch (e) {
                console.log("promise rejeitada por causa do erro: " + e);
                reject(e);
            }
        }, numero);
    })

    comparacao
        .then((resposta) =>  res.send({resposta}))
        .catch((erro) => console.log("temos um problema: " + erro))

    comparacao
        .then(resposta => { console.log(resposta) }, erro => { console.log("esse erro " + erro) })
 */
});


app.listen(port, function() {
    console.log('O servidor está sendo executado na porta ' + port + '!');
});
