// try to build a universal utility for 

var startInputButton;
var resetButton;

var supportedText;
var activeText;
var gamepadCountText;

var pad1;
var pad1Text;
var pad2;
var pad2Text;
var pad3;
var pad3Text;
var pad4;
var pad4Text;

var activityPad1Text;
var activityPad2Text;
var activityPad3Text;
var activityPad4Text;
var activityGlobalText;

var pad1StateText;
var pad2StateText;
var pad3StateText;
var pad4StateText;

//we will try to map the keyboard to controller 1
var initKeyboard = function (_gameState) {
    _gameState.key_left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    _gameState.key_right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    _gameState.key_thrust = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    _gameState.key_fire = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}

var initGamepad = function(_gameState){

    _gameState.pad1 = game.input.gamepad.pad1;
    _gameState.pad2 = game.input.gamepad.pad2;
    _gameState.pad3 = game.input.gamepad.pad3;
    _gameState.pad4 = game.input.gamepad.pad4;

    game.input.gamepad.start();
    
    if(DEBUG_MODE){

        var style = { font: "12px Arial", fill: "#ffffff", align: "left" };
        activityPad1Text = game.add.text(10, 180, 'Last activity pad 1: ', style);
        _gameState.addPadCallbacks(_gameState.pad1, activityPad1Text, 1);

        activityPad2Text = game.add.text(10, 200, 'Last activity pad 2: ', style);
        _gameState.addPadCallbacks(_gameState.pad2, activityPad2Text, 2);

        activityPad3Text = game.add.text(10, 220, 'Last activity pad 3: ', style);
        _gameState.addPadCallbacks(_gameState.pad3, activityPad3Text, 3);

        activityPad4Text = game.add.text(10, 240, 'Last activity pad 4: ', style);
        _gameState.addPadCallbacks(_gameState.pad4, activityPad4Text, 4);

        activityGlobalText = game.add.text(10, 270, 'Last activity all pads: ', style);
        
        // Here we're setting callbacks that will trigger from ALL gamepads connected
        game.input.gamepad.addCallbacks(_gameState, {
            onConnect: function(padIndex){
                activityGlobalText.setText('Last activity all pads: Connected with pad index '+padIndex);
            },
            onDisconnect: function(padIndex){
                activityGlobalText.setText('Last activity all pads: Disconnected with pad index '+padIndex);
            },
            onDown: function(buttonCode, value, padIndex){
                activityGlobalText.setText('Last activity all pads: Pad index '+padIndex+' buttonCode: '+buttonCode+' | value: '+value);
            },
            onUp: function(buttonCode, value, padIndex){
                activityGlobalText.setText('Last activity all pads: Pad index '+padIndex+' buttonCode: '+buttonCode+' | value: '+value);
            },
            onAxis: function(pad, axis, value) {
                activityGlobalText.setText('Last activity all pads: Pad index '+pad.index+': axis '+axis+': '+value);
            },
            onFloat: function(buttonCode, value, padIndex) {
                activityGlobalText.setText('Last activity all pads: Pad index '+padIndex+' buttonCode: '+buttonCode+' | value (float): '+value);
            }
        });
    }
}


//unfinished
var GamepadInputDown = function(_gameState, _inputType , _padNum )
{
    //check if the gamepad button is pressed down

    //handle controller buttons alone
}
