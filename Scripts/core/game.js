(function () {
    //game variables
    var canvas;
    var stage;
    var assetManager;
    var currentScene;
    var currentState;
    var assetManifest = [
        { id: "background", src: "/Assets/images/background.png" },
        { id: "gameTitle", src: "/Assets/images/game_title.png" },
        { id: "buttonPlayNow", src: "/Assets/images/button_play_now.png" },
        { id: "slotMachine", src: "/Assets/images/slot_machine.png" },
        { id: "buttonBet", src: "/Assets/images/button_bet.png" },
        { id: "buttonSpin", src: "/Assets/images/button_spin.png" },
        { id: "buttonAdd", src: "/Assets/images/button_add.png" },
        { id: "buttonReduce", src: "/Assets/images/button_reduce.png" },
        { id: "textboxBetAmount", src: "/Assets/images/textbox_bet_amount.png" },
        { id: "darkener", src: "/Assets/images/darkener.png" }
    ];
    var frame = 0;
    var bouncer = 0;
    function Init() {
        assetManager = new createjs.LoadQueue();
        managers.Game.assetManager = assetManager; // creates reference to global asset managaer
        assetManager.installPlugin(createjs.Sound); // enable sound preloading
        assetManager.loadManifest(assetManifest); // preloads all assets in manifest
        assetManager.on("complete", Start); // call Start when assets are finished loading
    }
    function Start() {
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.stage = stage;
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // 60 fps
        createjs.Ticker.on("tick", Update);
        currentState = config.Scene.START;
        managers.Game.currentState = currentState;
        Main();
    }
    function Update() {
        currentScene.Update();
        if (currentState != managers.Game.currentState) {
            currentState = managers.Game.currentState;
            Main();
        }
        stage.update();
    }
    function Main() {
        if (currentScene) {
            currentScene.Destroy();
        }
        switch (currentState) {
            case config.Scene.START:
                currentScene = new scenes.StartScene();
                break;
            case config.Scene.PLAY:
                currentScene = new scenes.PlayScene();
                break;
        }
        stage.addChild(currentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map