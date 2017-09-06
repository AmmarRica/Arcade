const express = require('express');
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());

var MAX_LEADERBOARD_LENGTH = 10;
var PLACEHOLDER_NAME = 'AMR';

//This is like the DB for all the players
var Leaderboard = [
    {    name: "RL",    score: 13010  },
    {    name: "AEW",    score: 8160  },
    {    name: "AEW",    score: 2570  },                     
    {    name: "JAK",    score: 1570  },
    {    name: "BK ",    score: 1500  }
];


app.get('/', function (req, res) {
    res.json({'status': 200, 'msg': 'success','Leaderboard': Leaderboard });
})

app.get('/test', function(){
    // render the /tests view
    console.log('inside test');
    res.send('Hello World!');
})

app.post('/', function(request, response) {
 
    //Leaderboard = request.body.Leaderboard;

    SubmitScore(request.body.name, request.body.score)

    response.json({'status': 200, 'msg': 'success',"Leaderboard":Leaderboard });
})


// Adds a score from parameters.
var SubmitScore = function(name, score) {    
    for (var row = 0; row < MAX_LEADERBOARD_LENGTH; row++) {
    var record = Leaderboard[row];
    if (record && record.score < score) {
            for (var update = Leaderboard.length; update > row; update--) {
            if (update < MAX_LEADERBOARD_LENGTH) {
                    Leaderboard[update] = {
                    name: Leaderboard[update - 1].name,
                    score: Leaderboard[update - 1].score
                    };
                }
            }
            Leaderboard[row] = {
            name: name,
            score: score
            };
            break;
        } else if (!record) {
                Leaderboard[row] = {
                name: name,
                score: score
            };
            break;
        }
    }
};










module.exports = app;