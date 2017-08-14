var mainState = function(game){
    this.tf_start;
};

mainState.prototype = {
    gofull: function() {
        if (game.scale.isFullScreen)
        {
            game.scale.stopFullScreen();
        }
        else
        {
            game.scale.startFullScreen(false);
        }
    },

    create: function () {

        var startInstructions = 'Asterocats\n\nClick for full screen -\n\nUP arrow key for thrust.\n\nLEFT and RIGHT arrow keys to turn.\n\nSPACE key to fire. \n\n By: AmmarRica and friends';
        this.tf_start = game.add.text(game.world.centerX, game.world.centerY, startInstructions, fontAssets.counterFontStyle);
        this.tf_start.align = 'center';
        this.tf_start.anchor.set(0.5, 0.5);
        
        var space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        //game.input.onDown.addOnce(this.startGame, this);

        key1 = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
        startKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        startKey.onDown.addOnce(this.startGame,this)

        game.input.onDown.addOnce(this.gofull, this);
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    },
    
    startGame: function () {
         game.state.start(states.game);
    },


};