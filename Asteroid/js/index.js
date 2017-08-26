


var states = {
    main: "main",
    game: "game",
    buttonTest: "buttonTest",
    scoreScreen: "scoreScreen",
    lockerRoom: "lockerRoom",
};

var game = new Phaser.Game(gameProperties.screenWidth, gameProperties.screenHeight, Phaser.AUTO, 'gameDiv');

//make sure you add the file to the index.html to load the JS needed
game.state.add(states.main, mainState);
game.state.add(states.game, gameState);
game.state.add(states.buttonTest, buttonTest);
game.state.add(states.scoreScreen, scoreScreenState);
game.state.add(states.lockerRoom, lockerRoomState);


game.state.start(states.main);