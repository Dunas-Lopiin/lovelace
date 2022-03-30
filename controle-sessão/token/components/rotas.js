const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
let userToken;

app.use(express.json());

let USUARIOS = require('./user.json');
app.use(bodyParser.json());

async function sendToken(req, res){
    let frontToken = req.params.token;
    console.log(frontToken);
    console.log(userToken);
    if(userToken === frontToken){
        res.send({userToken});
    }
    else{
        res.send({});
    }
}

async function validateUser(req, res){
    let thisUser = req.body;
    let checkUser = JSON.stringify(USUARIOS).includes(JSON.stringify(thisUser));
    if(checkUser){
        console.log('usuario verificado');
        userToken = uuidv4();
        res.send({'res': 'ok', 'token' : userToken});
    }
    else{
        let posta = "a";
        console.log('usuario invalido');
        res.send({posta});
    }
}

function addUser(req, res){
    console.log('Adicionando usuario!');
    let novoUsuario = req.body;
    userToken = uuidv4();
    let invoices = JSON.parse(fs.readFileSync('components/user.json', 'utf8'));
    invoices.push(novoUsuario);
    console.log(invoices);
    fs.writeFile('components/user.json', JSON.stringify(invoices), (err) => {
        if(err === null){
            res.send({userToken});
        }
        if(err) console.log(err);
    })
}

module.exports.validate = validateUser;
module.exports.add = addUser;
module.exports.token = sendToken;