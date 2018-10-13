module scenes{
    export class PlayScene extends scenes.Scene{

        // private instance variable

        // bitmaps
        private _background:objects.BitmapObject;
        private _slotMachine:objects.BitmapObject;
        private _textboxBetAmount:objects.BitmapObject;
        private _darkener:objects.BitmapObject;
        private _spinner1:objects.BitmapObject;
        private _spinner2:objects.BitmapObject;
        private _spinner3:objects.BitmapObject;

        // buttons
        private _buttonBet:objects.Button;
        private _buttonSpin:objects.Button;
        private _buttonAdd:objects.Button;
        private _buttonReduce:objects.Button;

        // labels
        private _winText:objects.Label;
        private _winValue:objects.Label;
        private _balanceText:objects.Label;
        private _balanceValue:objects.Label;
        private _betValue:objects.Label;

        // variables
        private _balanceAmount:number = 4000;
        private _wins:number = 0;
        private _betPointerIndex:number = 0;
        private _slotArray:string[];
        private _spiner1index:number;
        private _spiner2index:number;
        private _spiner3index:number;
        private _frameCount:number = 0;
        private _isSpining:boolean = false;
        private _countOfSlots:number[] = [0,0,0,0,0,0,0,0];
        private _multiplier:number = 0;

        // readonly variables
        private readonly _betPointers:number[] = [10, 25, 50, 100];



        // public properties



        // constructor
        constructor() {
            super();

            this.Start();
        }


        // private methods

        // Setting up all the components of the play scene in appropriate positions
        private _SetComponents():void{
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
            this._balanceText = new objects.Label("Balance: ", "30px", "Comic Sans MS", "#76FF03", 380, 10, false);
            this._balanceValue = new objects.Label("0", "30px", "Comic Sans MS", "#76FF03", 510, 10, false);
            this._betValue = new objects.Label(this._betPointers[this._betPointerIndex].toString(), "40px", "Comic Sans MS", "#004D40", 150, 675, true);

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

        }

        // Load Image Array
        private _LoadSlots():void {
            this._slotArray = ["seven", "bell", "cherry", "crown", "diamond", "grapes", "bar", "strawberry"];
        }
        
        // Setting up Spin function
        private _Spin():void{

            this._balanceAmount -= this._betPointers[this._betPointerIndex];
            this._SetBalanceValue();
            this._SpinEffect();
            this._FindMultiplier();
            this._balanceAmount = this._balanceAmount + (this._betPointers[this._betPointerIndex] * this._multiplier);            
            this._SetBalanceValue();

        }

        private _Spinner():void{
            if(this._spinner1 != null || this._spinner2 != null || this._spinner3 != null){       
                this.removeChild(this._spinner1);
                this.removeChild(this._spinner2);
                this.removeChild(this._spinner3);
            }

            // generate random slots
            this._spiner1index =Math.floor( Math.random() * 8 );
            this._spiner2index =Math.floor( Math.random() * 8 );
            this._spiner3index =Math.floor( Math.random() * 8 );

            console.log(this._spiner1index);
            console.log(this._spiner2index);
            console.log(this._spiner3index);

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
        }

        // Spinning Effect
        private _SpinEffect():void{
            this._isSpining = true;
            this.Update();
        }

        // To find the winning combination and its corresponding multiplier
        private _FindMultiplier():void{
            this._CountofSimilarSlots();
            if(this._countOfSlots[0] == 3){
                this._multiplier = 50;
                this._wins++;
            }
            else if(this._countOfSlots[1] == 3){
                this._multiplier = 25;
                this._wins++;
            }
            else if(this._countOfSlots[2] == 3){
                this._multiplier = 20;
                this._wins++;
            }
            else if(this._countOfSlots[3] == 3){
                this._multiplier = 16;
                this._wins++;
            }
            else if(this._countOfSlots[4] == 3){
                this._multiplier = 12;
                this._wins++;
            }
            else if(this._countOfSlots[5] == 3){
                this._multiplier = 10;
                this._wins++;
            }
            else if(this._countOfSlots[6] == 3){
                this._multiplier = 9;
                this._wins++;
            }
            else if(this._countOfSlots[7] == 3){
                this._multiplier = 8;
                this._wins++;
            }
            else if(this._countOfSlots[0] == 2){
                this._multiplier = 15;
                this._wins++;
            }
            else if(this._countOfSlots[1] == 2){
                this._multiplier = 8;
                this._wins++;
            }
            else if(this._countOfSlots[2] == 2){
                this._multiplier = 6;
                this._wins++;
            }
            else if(this._countOfSlots[3] == 2){
                this._multiplier = 5;
                this._wins++;
            }
            else if(this._countOfSlots[4] == 2){
                this._multiplier = 4;
                this._wins++;
            }
            else if(this._countOfSlots[5] == 2){
                this._multiplier = 3;
                this._wins++;
            }
            else if(this._countOfSlots[6] == 2){
                this._multiplier = 2;
                this._wins++;
            }
            else if(this._countOfSlots[7] == 2){
                this._multiplier = 1;
                this._wins++;
            }
            else{
                this._multiplier = 0;
            }
            this._countOfSlots = [0,0,0,0,0,0,0,0];
        }

        // To find the number of occurance of same slot component in a spin. 
        private _CountofSimilarSlots():void{
            this._countOfSlots[this._spiner1index]++;
            this._countOfSlots[this._spiner2index]++;
            this._countOfSlots[this._spiner3index]++;
        }


        // Setting up the bet ammount incrementer and decrementer
        private _InitializeBetValue():void{
            this._buttonReduce.on("click", () => { this._Decrementer(); });
            this._buttonAdd.on("click", () => { this._Incrementer(); });
        }

        // Setting up balance amount
        private _SetBalanceValue():void{
            this._balanceValue.text = this._balanceAmount.toString();
            managers.Game.balanceAmount = this._balanceAmount;
        }

        // Setting up the Bet value
        private _SetBetValue():void{
            this._betValue.text = this._betPointers[this._betPointerIndex].toString();
        }

        // Decrement the betPointers
        private _Decrementer():void{
            
            if (this._betPointerIndex > 0){
                --this._betPointerIndex;
                this._SetBetValue();
            }
        }

        // Increment the betPointers
        private _Incrementer():void{

            if (this._betPointerIndex < this._betPointers.length-1){
                ++this._betPointerIndex;
                this._SetBetValue();
            }

        }




        // public methods
        public Start(): void {
            this._SetComponents();
            this._SetBalanceValue();
            this._LoadSlots();
            this._Spinner();

            this.Main();
        }    

        public Update(): void {
            if(this._isSpining){
                this._frameCount ++;
                if(this._frameCount <300 && this._frameCount%4 == 0){
                    this._Spinner();
                    console.log(this._frameCount);
                }
                if(this._frameCount >= 300){
                    this._isSpining = false;
                    this._frameCount = 0;
                }
            }
        }

        public Destroy(): void {
            this.removeAllChildren();            
        }

        public Reset(): void {
            
        }
        
        public Main(): void {
            this._InitializeBetValue();

            this._buttonBet.on("click", ()=>{
                managers.Game.currentState = config.Scene.END;
            });

            this._buttonSpin.on("click", ()=>{
                this._Spin();
            });
        }

        

    }
}