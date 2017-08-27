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

        var startInstructions = 'Asterocats\n\nF for for full screen -\n\nUP arrow key for thrust.\n\nLEFT and RIGHT arrow keys to turn.\n\nSPACE key to fire.\n\nF1 for button test \n\n By: AmmarRica and friends';
        this.tf_start = game.add.text(game.world.centerX, game.world.centerY, startInstructions, fontAssets.counterFontStyle);
        this.tf_start.align = 'center';
        this.tf_start.anchor.set(0.5, 0.5);

        ////control
        game.input.gamepad.start();
        this.pad1 = game.input.gamepad.pad1;

        //start the game
        startKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        startKey.onDown.addOnce(this.startGame,this)
        

        //reserve buttons to go to different screens.
        key1 = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
        key1.onDown.addOnce(this.buttonTest,this)
        key2 = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
        key2.onDown.addOnce(this.buttonTest,this)
        key3 = game.input.keyboard.addKey(Phaser.Keyboard.THREE);
        key3.onDown.addOnce(this.buttonTest,this)
        key4 = game.input.keyboard.addKey(Phaser.Keyboard.FOUR);
        key4.onDown.addOnce(this.buttonTest,this)
        key5 = game.input.keyboard.addKey(Phaser.Keyboard.FIVE);
        key5.onDown.addOnce(this.buttonTest,this)
        key6 = game.input.keyboard.addKey(Phaser.Keyboard.SIX);
        key6.onDown.addOnce(this.buttonTest,this)
        key7 = game.input.keyboard.addKey(Phaser.Keyboard.SEVEN);
        key7.onDown.addOnce(this.buttonTest,this)


        //full screen
        //game.input.onDown.addOnce(this.buttonTest, this);
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
        
        fullScreenKey = game.input.keyboard.addKey(Phaser.Keyboard.F);
        fullScreenKey.onDown.addOnce(this.gofull,this)
    },
    
    startGame: function () {
         game.state.start(states.game);
    },

    update: function(){
        
        if (game.input.gamepad.supported && game.input.gamepad.active && this.pad1.connected){    
            //start by pressing fire button       
            if (this.pad1.isDown(Phaser.Gamepad.BUTTON_8)
                ||this.pad1.isDown(Phaser.Gamepad.BUTTON_0)) 
            {this.startGame();}

            //Go to full screen (can only be done with keyboard sadly)
            if (this.pad1.isDown(Phaser.Gamepad.BUTTON_9)) this.gofull();
        }
    },

    buttonTest: function () {
        game.state.start(states.buttonTest);
   },


};