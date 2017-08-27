const express = require('express');
const app = express();

app.get('/', function(req, res){
 
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static('asteroid'));

app.get('/asteroid', function(req, res){
  res.sendFile('/asteroid/', { root: __dirname });
});

