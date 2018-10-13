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
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // public properties
        // constructor
        function PlayScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        PlayScene.prototype.Start = function () {
            this._background = new objects.BitmapObject("background");
            this._darkener = new objects.BitmapObject("darkener");
            this._slotMachine = new objects.BitmapObject("slotMachine", 300, 350, true);
            this._textboxBetAmount = new objects.BitmapObject("textboxBetAmount", 180, 675, true);
            this._buttonReduce = new objects.Button("buttonReduce", 60, 685, true);
            this._buttonAdd = new objects.Button("buttonAdd", 300, 685, true);
            this._buttonBet = new objects.Button("buttonBet", 400, 675, true);
            this._buttonSpin = new objects.Button("buttonSpin", 525, 675, true);
            this._winText = new objects.Label("Wins: ", "30px", "Comic Sans MS", "#FFFF00", 10, 10, false);
            this._winValue = new objects.Label("0", "30px", "Comic Sans MS", "#FFFF00", 100, 10, false);
            this._balanceText = new objects.Label("Balance: ", "30px", "Comic Sans MS", "#76FF03", 380, 10, false);
            this._balanceValue = new objects.Label("0", "30px", "Comic Sans MS", "#76FF03", 510, 10, false);
            this.Main();
        };
        PlayScene.prototype.Update = function () {
        };
        PlayScene.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        PlayScene.prototype.Reset = function () {
        };
        PlayScene.prototype.Main = function () {
            this.addChild(this._background);
            this.addChild(this._darkener);
            this.addChild(this._slotMachine);
            this.addChild(this._textboxBetAmount);
            this.addChild(this._buttonAdd);
            this.addChild(this._buttonReduce);
            this.addChild(this._buttonBet);
            this.addChild(this._buttonSpin);
            this.addChild(this._winText);
            this.addChild(this._balanceText);
            this.addChild(this._winValue);
            this.addChild(this._balanceValue);
        };
        return PlayScene;
    }(scenes.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play_scene.js.map