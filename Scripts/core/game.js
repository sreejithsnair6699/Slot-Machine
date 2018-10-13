(function () {
    //game variables
    var canvas;
    var stage;
    var background;
    var gameTitle;
    var buttonPlayNow;
    function Start() {
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // 60 fps
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        stage.update();
    }
    function Main() {
        background = new createjs.Bitmap("/Assets/images/background.png");
        gameTitle = new createjs.Bitmap("/Assets/images/game_title.png");
        buttonPlayNow = new createjs.Bitmap("/Assets/images/button_play_now.png");
        gameTitle.y = 120;
        buttonPlayNow.x = 120;
        buttonPlayNow.y = 500;
        stage.addChild(background);
        stage.addChild(gameTitle);
        stage.addChild(buttonPlayNow);
        buttonPlayNow.on("click", function () {
        });
        buttonPlayNow.on("mouseover", function () {
            buttonPlayNow.alpha = 0.8;
        });
        buttonPlayNow.on("mouseout", function () {
            buttonPlayNow.alpha = 1.0;
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=game.js.map