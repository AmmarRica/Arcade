var gameProperties = {
    screenWidth: 800,
    screenHeight: 600,

    delayToStartLevel: 3,
    padding: 30,
};

var states = {
    main: "main",
    game: "game",
};

var game = new Phaser.Game(gameProperties.screenWidth, gameProperties.screenHeight, Phaser.AUTO, 'gameDiv');
game.state.add(states.main, mainState);
game.state.add(states.game, gameState);
game.state.start(states.main);