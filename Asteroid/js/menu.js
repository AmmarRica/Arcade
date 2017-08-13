var mainState = function(game){
    this.tf_start;
};

mainState.prototype = {
    create: function () {

        var startInstructions = 'Click to Start -\n\nUP arrow key for thrust.\n\nLEFT and RIGHT arrow keys to turn.\n\nSPACE key to fire.';
        this.tf_start = game.add.text(game.world.centerX, game.world.centerY, startInstructions, fontAssets.counterFontStyle);
        this.tf_start.align = 'center';
        this.tf_start.anchor.set(0.5, 0.5);
        
        var space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        game.input.onDown.addOnce(this.startGame, this);

        key1 = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
        startKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        startKey.onDown.addOnce(this.startGame,this)
    },
    
    startGame: function () {
         game.state.start(states.game);
    },
};