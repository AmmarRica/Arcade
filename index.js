const express = require('express');
const app = express();

var http = require('http').Server(app); //for non-express work.
var io = require('socket.io')(http);



app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static('asteroids'));
app.use(express.static('node_modules'));


//call asteroid folder
app.get('/asteroids', function(req, res){
  res.sendFile(__dirname+ '/asteroids/');
});


io.on('connection', function(socket){
  console.log('a user connected');
});


http.listen(process.env.PORT || 3000, function () {
  console.log('listening on port 3000!');
});

//var testRoutes = require('leaderBoard');

var leaderBoardRoute = require('./leaderboard.js');

// Import my test routes into the path '/test'
app.use('/leaderboard', leaderBoardRoute);