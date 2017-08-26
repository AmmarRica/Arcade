//Made by Wilk
//AMR:
/*TODO:
*   -Add a way to accept Name Entery.
*   -Add the placement at the start.
*/

// Example initial leaderboard.
var Leaderboard = [{
    name: "AMR",
    score: 2480
  }, {
    name: "AEW",
    score: 5000
  }];
  
// Maximum number of high scores.
var MAX_LEADERBOARD_LENGTH = 10;


// Prints the current leaderboard to console
var getLeaderboardScreenText = function() {
    var output = "" //Leaderboard:\n";
    for (var row in Leaderboard) {
        output += (Leaderboard[row].name + ": " + Leaderboard[row].score + "\n");
    }
    return output;
    console.log(output);
};


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
    //printLeaderboard();
};