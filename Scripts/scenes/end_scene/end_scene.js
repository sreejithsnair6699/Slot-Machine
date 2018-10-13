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
    var EndScene = /** @class */ (function (_super) {
        __extends(EndScene, _super);
        // public properties
        // constructor
        function EndScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        EndScene.prototype._scoreFinder = function () {
            var netAmount = 0;
            if (managers.Game.balanceAmount > 4000) {
                netAmount = managers.Game.balanceAmount - 4000;
                this._message = "    CONGRATULATION !!!    \n\n You have won $" + netAmount.toString() + ".";
            }
            else if (managers.Game.balanceAmount < 4000) {
                netAmount = 4000 - managers.Game.balanceAmount;
                this._message = " BETTER LUCK NEXT TIME !!! \n\n You have lost $" + netAmount.toString() + ".";
            }
            else {
                this._message = "       PLAY AGAIN !!!      \n\n  You have a good chance of \n\n           WINNING.";
            }
        };
        // public methods
        EndScene.prototype.Start = function () {
            this._scoreFinder();
            this._background = new objects.BitmapObject("background");
            this._scoreBackground = new objects.BitmapObject("darkener", 300, 375, true);
            this._scoreText = new objects.Label(this._message, "30px", "Comic Sans MS", "#76FF03", 80, 300, false);
            this._buttonReplay = new objects.Button("buttonReplay", 300, 550, true);
            this.Main();
        };
        EndScene.prototype.Update = function () {
            this._scoreBackground.scaleY = 8.0;
            this._scoreBackground.scaleX = 0.8;
            this._buttonReplay.scaleX = 0.7;
            this._buttonReplay.scaleY = 0.7;
        };
        EndScene.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        EndScene.prototype.Reset = function () {
        };
        EndScene.prototype.Main = function () {
            this.addChild(this._background);
            this.addChild(this._scoreBackground);
            this.addChild(this._buttonReplay);
            this.addChild(this._scoreText);
            this._buttonReplay.on("click", function () {
                managers.Game.currentState = config.Scene.START;
            });
        };
        return EndScene;
    }(scenes.Scene));
    scenes.EndScene = EndScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=end_scene.js.map