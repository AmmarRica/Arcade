//// Be able to have the player select if they want to join or not.






var lockerRoomState = function(){

}


lockerRoomState.prototype = {
    preload: function () {
        if(!DEBUG_MODE)
            {
                game.load.image(graphicAssets.bullet.name, graphicAssets.bullet.URL);
                game.load.image(graphicAssets.ship.name, graphicAssets.ship.URL);
                
                game.load.audio(soundAssets.destroyed.name, soundAssets.destroyed.URL);
                game.load.audio(soundAssets.fire.name, soundAssets.fire.URL);
            }else{

                game.load.image(DebugGraphicAssets.bullet.name, DebugGraphicAssets.bullet.URL);
                game.load.image(DebugGraphicAssets.ship.name, DebugGraphicAssets.ship.URL);
    
                game.load.audio(soundAssets.destroyed.name, soundAssets.destroyed.URL);
                game.load.audio(soundAssets.fire.name, soundAssets.fire.URL);
            }
    },

    init: function () {
        this.shipLives = shipProperties.startingLives;
        this.shipIsInvulnerable = false;
    },

    create: function () {
        
    },

    update: function () {},

}