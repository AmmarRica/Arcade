const express = require('express')
const app = express()



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


app.get('/asteroid', function(req, res){
  res.sendFile(__dirname + '/asteroid/index.html');
});

app.use(express.static('asteroid'))