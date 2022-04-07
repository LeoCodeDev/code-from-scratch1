const express = require('express');
const app = express();

app.get('/', espanol);
app.get('/english', english);

function espanol(req, res){
    res.send("Hola mundo")
}

function english(req, res){
    res.send("Hello World")
}
app.listen(8989);