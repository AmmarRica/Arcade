const express = require('express');
const app = express();
var path = require('path');



app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 5000!')
})

app.get('/', function(req, res){
  console.log(__dirname + '/index.html');
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static('asteroid'));

app.get('/asteroid', function(req, res){
  console.log(__dirname + '/asteroid/');
  res.sendFile('/asteroid/', { root: __dirname });
});

//what ss
//var path = require('path');

