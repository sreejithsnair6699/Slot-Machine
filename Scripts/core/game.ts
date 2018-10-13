(function(){
    //game variables
    let canvas:HTMLCanvasElement;
    let stage:createjs.Stage;
    let assetManager:createjs.LoadQueue;

    let startScene:scenes.StartScene;

    let assetManifest = [
        {id: "background", src:"/Assets/images/background.png"},
        {id: "gameTitle", src:"/Assets/images/game_title.png"},
        {id: "buttonPlayNow", src:"/Assets/images/button_play_now.png"}
    ];
    let frame:number = 0;
    let bouncer:number = 0;

    function Init():void{
        assetManager = new createjs.LoadQueue();
        managers.Game.assetManager = assetManager; // creates reference to global asset managaer

        assetManager.installPlugin(createjs.Sound); // enable sound preloading
        assetManager.loadManifest(assetManifest); // preloads all assets in manifest

        assetManager.on("complete", Start); // call Start when assets are finished loading
    }

    function Start():void{
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.stage = stage;
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // 60 fps
        createjs.Ticker.on("tick", Update);
        Main();
    }

    function Update():void{
        startScene.Update();
        stage.update();
    }

    function Main():void{
        // start scene
        startScene = new scenes.StartScene();
        stage.addChild(startScene);

    }

    window.addEventListener("load", Init);

})();