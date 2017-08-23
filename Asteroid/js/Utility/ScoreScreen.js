//Made by Wilk
//AMR I need to get this to work with my code.

// Example initial leaderboard.
var Leaderboard = [{
    name: "AMR",
    score: 20
  }, {
    name: "AEW",
    score: 10
  }];
  
// Maximum number of high scores.
var MAX_LEADERBOARD_LENGTH = 10;


// Prints the current leaderboard to console
var printLeaderboard = function() {
    var output = "Leaderboard:\n";
    for (var row in Leaderboard) {
        output += (Leaderboard[row].name + ": " + Leaderboard[row].score + "\n");
    }
        console.log(output);
};

// Adds a score from input boxes.
//AMR EDIT: I will put in the values in a different way.
var AddScoreDemo = function(){
//var name = document.getElementById("newscore_name").value;
//var score = parseInt(document.getElementById("newscore_score").value);
//AddScore(name, score);
};


// Adds a score from parameters.
var AddScore = function(name, score) {
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
    printLeaderboard();
};