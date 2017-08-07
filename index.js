const express = require('express')
const app = express()



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/astroid', function(req, res){
  res.sendFile(__dirname + '/astroid/index.html');
});

app.use(express.static('astroid'))