var gameProperties = {
    screenWidth: 800,
    screenHeight: 600,

    delayToStartLevel: 3,
    padding: 30,
};

var states = {
    main: "main",
    game: "game",
    buttonTest: "buttonTest"
};

var game = new Phaser.Game(gameProperties.screenWidth, gameProperties.screenHeight, Phaser.AUTO, 'gameDiv');
game.state.add(states.main, mainState);
game.state.add(states.game, gameState);
game.state.add(states.buttonTest, buttonTest);
game.state.start(states.main);