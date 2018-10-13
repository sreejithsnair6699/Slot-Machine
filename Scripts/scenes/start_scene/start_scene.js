var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        // public properties
        // constructor
        function StartScene() {
            var _this = _super.call(this) || this;
            _this._frame = 0;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        StartScene.prototype.Start = function () {
            this._background = new objects.BitmapObject("background");
            this._gameTitle = new objects.BitmapObject("gameTitle", 0, 120, false);
            this._buttonPlayNow = new objects.Button("buttonPlayNow", 300, 550, true);
            this.Main();
        };
        StartScene.prototype.Update = function () {
            this._frame++;
            if (this._frame < 30) {
                this._gameTitle.alpha = 0.9;
            }
            if (this._frame > 30) {
                this._gameTitle.alpha = 1.0;
            }
            if (this._frame == 60) {
                this._frame = 0;
            }
        };
        StartScene.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        StartScene.prototype.Reset = function () {
        };
        StartScene.prototype.Main = function () {
            this.addChild(this._background);
            this.addChild(this._gameTitle);
            this.addChild(this._buttonPlayNow);
            this._buttonPlayNow.on("click", function () {
                managers.Game.currentState = config.Scene.PLAY;
            });
        };
        return StartScene;
    }(scenes.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start_scene.js.map