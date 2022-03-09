const express = require('express');
const app = express();
//const fs = require('fs');
const port = 8080;

app.use(express.static('src'));

app.listen(port, function() {
    console.log('O servidor está sendo executado na porta ' + port + '!');
});