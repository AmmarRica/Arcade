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


app.get('/asteroid', function(req, res){
  console.log(__dirname + '/asteroid/' + 'index.html');
  res.sendFile(__dirname + '/asteroid/' + 'index.html');

  path.join(__dirname, 'asteroid', 'to', 'file')
  //res.sendFile(path.join(__dirname, 'asteroid', 'index.html'));
});

//what ss
//var path = require('path');

app.use(express.static('asteroid'));