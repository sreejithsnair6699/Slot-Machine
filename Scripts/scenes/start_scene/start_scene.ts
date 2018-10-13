module scenes{
    export class StartScene extends scenes.Scene{

        // private instance variable
        private _background:objects.BitmapObject;
        private _gameTitle:objects.BitmapObject;
        private _buttonPlayNow:objects.Button;

        private _frame:number = 0;

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
            this._gameTitle = new objects.BitmapObject("gameTitle", 0, 120, false);
            this._buttonPlayNow = new objects.Button("buttonPlayNow", 300, 550, true);

            this.Main();
        }    

        public Update(): void {
            this._frame++;
            if(this._frame <30){
                this._gameTitle.alpha = 0.9;
            }
            if(this._frame>30){
                this._gameTitle.alpha = 1.0;
            }
            if(this._frame == 60){
                this._frame = 0;
            }
        }

        public Destroy(): void {
            this.removeAllChildren();
        }

        public Reset(): void {
            
        }
        
        public Main(): void {
            this.addChild(this._background);
    
            this.addChild(this._gameTitle);
    
            this.addChild(this._buttonPlayNow);

            this._buttonPlayNow.on("click", ()=>{
                managers.Game.currentState = config.Scene.PLAY;
            });
        }


    }
}