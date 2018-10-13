module scenes{
    export class EndScene extends scenes.Scene{

        // private instance variable
        private _background:objects.BitmapObject;
        private _scoreBackground:objects.BitmapObject;
        private _buttonReplay:objects.Button;
        private _scoreText:objects.Label;
        private _message:string;

        // public properties

        // constructor
        constructor() {
            super();

            this.Start();
        }

        // private methods
        private _scoreFinder():void{
            let netAmount:number = 0;
            if(managers.Game.balanceAmount > 4000){
                netAmount = managers.Game.balanceAmount - 4000;
                this._message = "    CONGRATULATION !!!    \n\n You have won $" + netAmount.toString() + ".";
            }
            else if(managers.Game.balanceAmount < 4000){
                netAmount = 4000 - managers.Game.balanceAmount;
                this._message = " BETTER LUCK NEXT TIME !!! \n\n You have lost $" + netAmount.toString() + ".";
            }
            else{
                this._message = "       PLAY AGAIN !!!      \n\n  You have a good chance of \n\n           WINNING.";
            }

        }

        // public methods
        public Start(): void {

            this._scoreFinder();

            this._background = new objects.BitmapObject("background");
            this._scoreBackground = new objects.BitmapObject("darkener", 300, 375, true);
            this._scoreText = new objects.Label(this._message, "30px", "Comic Sans MS", "#76FF03", 80, 300, false);
            this._buttonReplay = new objects.Button("buttonReplay", 300, 550, true);

            this.Main();
        }    

        public Update(): void {
            this._scoreBackground.scaleY = 8.0;
            this._scoreBackground.scaleX = 0.8;
            this._buttonReplay.scaleX = 0.7;
            this._buttonReplay.scaleY = 0.7;
        }

        public Destroy(): void {
            this.removeAllChildren();
        }

        public Reset(): void {
            
        }
        
        public Main(): void {
            this.addChild(this._background);
    
            this.addChild(this._scoreBackground);
    
            this.addChild(this._buttonReplay);

            this.addChild(this._scoreText);

            this._buttonReplay.on("click", ()=>{
                managers.Game.currentState = config.Scene.START;
            });
        }


    }
}