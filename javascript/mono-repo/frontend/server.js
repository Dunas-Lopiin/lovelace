const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const fs = require('fs');

app.get('/allow-cors', function(req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    res.sendFile(console.log("muito bom!"));
  });

app.use(cors())
app.use(express.static('src'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));