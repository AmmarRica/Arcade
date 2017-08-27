const express = require('express')
const app = express()



app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


//one for each folder

app.get('/asteroid', function(req, res){
  res.sendFile(__dirname + '/asteroid/index.html');
  app.use(express.static('asteroid'));
});



app.get('/asteroid-multiplayer', function(req, res){
  res.sendFile(__dirname + '/asteroid-multiplayer/index.html');
  app.use(express.static('asteroid-multiplayer'));
});
