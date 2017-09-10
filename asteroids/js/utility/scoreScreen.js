//Made by Wilk
//AMR:
/*TODO:
*   -Add a way to accept Name Entery.
*   -Add the placement at the start.
*/


var myApp = angular.module('myApp', []);

// Example initial leaderboard.
var Leaderboard = [   ];
var PLACEHOLDER_NAME = 'AMR';

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
var SubmitScore = function(_name,_score) {
    accessScope('#outer', function (scope) {
        scope.sendNewScoreToBackend(_name,_score);
    });

};


function submitNewScore(_name,_score)
{
    accessScope('#outer', function (scope) {
        scope.sendNewScoreToBackend(_name,_score);
    });
}


function accessScope(node, func) {
	var scope = angular.element(document.querySelector(node)).scope();
    scope.$apply(func);
}

myApp.controller('myController', function($scope, $timeout,$http) {

    $scope.sendNewScoreToBackend = function(_name,_score) {
        $http.post('/leaderboard', {'name': _name, 'score': _score })
        .success(
            function(success){
                console.log(success)
                //update client leaderboard
                Leaderboard = success.Leaderboard;
            })
        .error(
            function(error){
                console.log(error)
            });
    }
});


/*
core idea?
why do this Game?
what are the dev challenges?
well suited to games?
what's the player fantasy?
what are the verbs (what is the player doing)?

Has anyone done this before?
Whats the one thing? (something that never been done before)

Do you have something to say? (more about life to explore)

*/