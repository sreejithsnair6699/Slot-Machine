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
            // variables
            _this._balanceAmount = 1500;
            _this._wins = 0;
            _this._betPointerIndex = 0;
            _this._frameCount = 0;
            _this._isSpining = false;
            _this._countOfSlots = [0, 0, 0, 0, 0, 0, 0, 0];
            _this._multiplier = 0;
            _this._index = 7;
            // readonly variables
            _this._betPointers = [10, 25, 50, 100];
            _this.Start();
            return _this;
        }
        // private methods
        // Setting up all the components of the play scene in appropriate positions
        PlayScene.prototype._SetComponents = function () {
            this._background = new objects.BitmapObject("background");
            this._darkener = new objects.BitmapObject("darkener");
            this._slotMachine = new objects.BitmapObject("slotMachine", 300, 350, true);
            this._textboxBetAmount = new objects.BitmapObject("textboxBetAmount", 180, 675, true);
            this._buttonReduce = new objects.Button("buttonReduce", 60, 685, true);
            this._buttonAdd = new objects.Button("buttonAdd", 300, 685, true);
            this._buttonBet = new objects.Button("buttonBet", 525, 675, true);
            this._buttonSpin = new objects.Button("buttonSpin", 400, 675, true);
            this._winText = new objects.Label("Wins: ", "30px", "Comic Sans MS", "#FFFF00", 10, 10, false);
            this._winValue = new objects.Label("0", "30px", "Comic Sans MS", "#FFFF00", 100, 10, false);
            this._balanceNote = new objects.Label("Insufficient Balance ... !", "30px", "Comic Sans MS", "#FFFF00", 140, 530, false);
            this._balanceText = new objects.Label("Balance: ", "30px", "Comic Sans MS", "#76FF03", 380, 10, false);
            this._balanceValue = new objects.Label("0", "30px", "Comic Sans MS", "#76FF03", 510, 10, false);
            this._betValue = new objects.Label(this._betPointers[this._betPointerIndex].toString(), "40px", "Comic Sans MS", "#004D40", 150, 675, true);
            this._balanceNote.alpha = 0.0;
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
            this.addChild(this._betValue);
            this.addChild(this._balanceNote);
        };
        // Load Image Array
        PlayScene.prototype._LoadSlots = function () {
            this._slotArray = ["seven", "bell", "cherry", "crown", "diamond", "grapes", "bar", "strawberry"];
        };
        // Setting up Spin function
        PlayScene.prototype._Spin = function () {
            if (this._balanceAmount < this._betPointers[this._betPointerIndex]) {
                this._balanceNote.alpha = 1.0;
                return;
            }
            this._balanceAmount -= this._betPointers[this._betPointerIndex];
            this._SetBalanceValue();
            this._slotSound = createjs.Sound.play("slotSound");
            this._slotSound.volume = 0.1;
            this._SpinEffect();
            this._FindMultiplier();
            this._multiplier = 0;
            this._SetBalanceValue();
            this._SetWinValue();
        };
        PlayScene.prototype._Spinner = function () {
            if (this._spinner1 != null || this._spinner2 != null || this._spinner3 != null) {
                this.removeChild(this._spinner1);
                this.removeChild(this._spinner2);
                this.removeChild(this._spinner3);
            }
            // generate random slots
            this._Reels();
            this._spiner1index = this._index;
            this._Reels();
            this._spiner2index = this._index;
            this._Reels();
            this._spiner3index = this._index;
            // assign the generated slots in corresponding position
            this._spinner1 = new objects.BitmapObject(this._slotArray[this._spiner1index], 155, 325, true);
            this._spinner2 = new objects.BitmapObject(this._slotArray[this._spiner2index], 295, 325, true);
            this._spinner3 = new objects.BitmapObject(this._slotArray[this._spiner3index], 437, 325, true);
            // necessary scaling adjustments
            this._spinner1.scaleX = 0.7;
            this._spinner1.scaleY = 0.7;
            this._spinner2.scaleX = 0.7;
            this._spinner2.scaleY = 0.7;
            this._spinner3.scaleX = 0.7;
            this._spinner3.scaleY = 0.7;
            // adding the slot items to the container
            this.addChild(this._spinner1);
            this.addChild(this._spinner2);
            this.addChild(this._spinner3);
        };
        PlayScene.prototype._Reels = function () {
            var temp = Math.floor((Math.random() * 65) + 1);
            if (temp >= 1 && temp < 27) {
                this._index = 0;
            }
            else if (temp >= 27 && temp < 37) {
                this._index = 5;
            }
            else if (temp >= 38 && temp < 46) {
                this._index = 2;
            }
            else if (temp >= 47 && temp < 54) {
                this._index = 3;
            }
            else if (temp >= 55 && temp < 59) {
                this._index = 4;
            }
            else if (temp >= 60 && temp < 62) {
                this._index = 6;
            }
            else if (temp >= 63 && temp <= 64) {
                this._index = 1;
            }
            else if (temp == 65) {
                this._index = 7;
            }
        };
        // Spinning Effect
        PlayScene.prototype._SpinEffect = function () {
            this._isSpining = true;
        };
        // To find the winning combination and its corresponding multiplier
        PlayScene.prototype._FindMultiplier = function () {
            this._CountofSimilarSlots();
            if (this._countOfSlots[0] == 3) {
                this._multiplier = 50;
                this._wins++;
            }
            else if (this._countOfSlots[1] == 3) {
                this._multiplier = 25;
                this._wins++;
            }
            else if (this._countOfSlots[2] == 3) {
                this._multiplier = 20;
                this._wins++;
            }
            else if (this._countOfSlots[3] == 3) {
                this._multiplier = 16;
                this._wins++;
            }
            else if (this._countOfSlots[4] == 3) {
                this._multiplier = 12;
                this._wins++;
            }
            else if (this._countOfSlots[5] == 3) {
                this._multiplier = 10;
                this._wins++;
            }
            else if (this._countOfSlots[6] == 3) {
                this._multiplier = 9;
                this._wins++;
            }
            else if (this._countOfSlots[0] == 2) {
                this._multiplier = 15;
                this._wins++;
            }
            else if (this._countOfSlots[1] == 2) {
                this._multiplier = 8;
                this._wins++;
            }
            else if (this._countOfSlots[2] == 2) {
                this._multiplier = 6;
                this._wins++;
            }
            else if (this._countOfSlots[3] == 2) {
                this._multiplier = 5;
                this._wins++;
            }
            else if (this._countOfSlots[4] == 2) {
                this._multiplier = 3;
                this._wins++;
            }
            else if (this._countOfSlots[5] == 2) {
                this._multiplier = 2;
                this._wins++;
            }
            else if (this._countOfSlots[6] == 2) {
                this._multiplier = 1;
                this._wins++;
            }
            else {
                this._multiplier = 0;
            }
            this._balanceAmount += (this._betPointers[this._betPointerIndex] * this._multiplier);
            this._countOfSlots = [0, 0, 0, 0, 0, 0, 0, 0];
        };
        // To find the number of occurance of same slot component in a spin. 
        PlayScene.prototype._CountofSimilarSlots = function () {
            this._countOfSlots[this._spiner1index]++;
            this._countOfSlots[this._spiner2index]++;
            this._countOfSlots[this._spiner3index]++;
        };
        // Setting up the bet ammount incrementer and decrementer
        PlayScene.prototype._InitializeBetValue = function () {
            var _this = this;
            this._buttonReduce.on("click", function () { _this._Decrementer(); });
            this._buttonAdd.on("click", function () { _this._Incrementer(); });
        };
        // Setting up balance amount
        PlayScene.prototype._SetBalanceValue = function () {
            this._balanceValue.text = this._balanceAmount.toString();
        };
        PlayScene.prototype._SetWinValue = function () {
            this._winValue.text = this._wins.toString();
        };
        // Setting up the Bet value
        PlayScene.prototype._SetBetValue = function () {
            this._betValue.text = this._betPointers[this._betPointerIndex].toString();
        };
        // Decrement the betPointers
        PlayScene.prototype._Decrementer = function () {
            if (this._betPointerIndex > 0) {
                --this._betPointerIndex;
                this._SetBetValue();
            }
        };
        // Increment the betPointers
        PlayScene.prototype._Incrementer = function () {
            if (this._betPointerIndex < this._betPointers.length - 1) {
                ++this._betPointerIndex;
                this._SetBetValue();
            }
        };
        // public methods
        PlayScene.prototype.Start = function () {
            this._SetComponents();
            this._SetBalanceValue();
            this._LoadSlots();
            this._Spinner();
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            if (this._isSpining) {
                this._frameCount++;
                if (this._frameCount < 330 && this._frameCount % 4 == 0) {
                    this._Spinner();
                }
                if (this._frameCount >= 330) {
                    this._isSpining = false;
                    this._frameCount = 0;
                }
            }
        };
        PlayScene.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        PlayScene.prototype.Reset = function () {
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            this._InitializeBetValue();
            this._buttonBet.on("click", function () {
                managers.Game.currentState = config.Scene.END;
            });
            this._buttonSpin.on("click", function () {
                _this._Spin();
            });
        };
        return PlayScene;
    }(scenes.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play_scene.js.map