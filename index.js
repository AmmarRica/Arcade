const express = require('express');
const app = express();



app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 5000!')
})

app.get('/', function(req, res){
<<<<<<< HEAD
  console.log(__dirname + '/index.html');
  res.sendFile(__dirname + '/index.html');
=======
  res.sendFile( '/index.html');
>>>>>>> f8234988603d983fa8b1adfb98fb9c0780dd028b
});


app.get('/asteroid', function(req, res){
<<<<<<< HEAD
  console.log(__dirname + '/asteroid/index.html');
  res.sendFile(__dirname + '/asteroid/index.html');
=======
  res.sendFile( '/asteroid/index.html');
>>>>>>> f8234988603d983fa8b1adfb98fb9c0780dd028b
  //res.sendFile(path.join(__dirname, 'asteroid', 'index.html'));
});
  

app.use(express.static('asteroid'));
<<<<<<< HEAD

=======


app.get('/about', function (req, res) {
  res.send('about')
})





>>>>>>> f8234988603d983fa8b1adfb98fb9c0780dd028b
