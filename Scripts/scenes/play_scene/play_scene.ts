module scenes{
    export class PlayScene extends scenes.Scene{

        // private instance variable
        private _background:objects.BitmapObject;
        private _slotMachine:objects.BitmapObject;
        private _textboxBetAmount:objects.BitmapObject;
        private _darkener:objects.BitmapObject;

        private _buttonBet:objects.Button;
        private _buttonSpin:objects.Button;
        private _buttonAdd:objects.Button;
        private _buttonReduce:objects.Button;

        private _winText:objects.Label;
        private _winValue:objects.Label;
        private _balanceText:objects.Label;
        private _balanceValue:objects.Label;

        // public properties

        // constructor
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start(): void {
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
        }    

        public Update(): void {
        }

        public Destroy(): void {
            this.removeAllChildren();            
        }

        public Reset(): void {
            
        }
        
        public Main(): void {
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
        }


    }
}