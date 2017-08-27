const express = require('express');
const app = express();

app.get('/', function(req, res){
 
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static('asteroid'));

//call asteroid folder
app.get('/asteroid', function(req, res){
  res.sendFile(__dirname+ '/asteroid/');
});


app.use(express.static('asteroids'));
//call asteroid folder
app.get('/asteroids', function(req, res){
  res.sendFile(__dirname+ '/asteroids/');
});
