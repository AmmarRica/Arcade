var gameProperties = {
    screenWidth: 800,
    screenHeight: 600,

    delayToStartLevel: 3,
    padding: 24,
};

var states = {
    main: "main",
    game: "game",
    buttonTest: "buttonTest",
    scoreScreen: "scoreScreen",
};

var game = new Phaser.Game(gameProperties.screenWidth, gameProperties.screenHeight, Phaser.AUTO, 'gameDiv');

//make sure you add the file to the index.html to load the JS needed
game.state.add(states.main, mainState);
game.state.add(states.game, gameState);
game.state.add(states.buttonTest, buttonTest);
game.state.add(states.scoreScreen, scoreScreenState);


game.state.start(states.main);