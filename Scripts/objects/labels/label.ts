module objects{
    export class Label extends createjs.Text{
        // private instance variables
        private _width:number;
        private _height:number;
        private _halfWidth:number;
        private _halfHeight:number;

        // public properties
        get Width():number{
            return this._width;
        }

        set Width(newValue:number){
            this._width = newValue;
            this.HalfWidth = this._width * 0.5;
        }

        get Height():number{
            return this._height;
        }

        set Height(newValue:number){
            this._height = newValue;
            this.HalfHeight = this._height * 0.5;
        }

        get HalfWidth():number{
            return this._halfWidth;
        }

        set HalfWidth(newValue:number){
            this._halfWidth = newValue;
        }

        get HalfHeight():number{
            return this._halfHeight;
        }

        set HalfHeight(newValue:number){
            this._halfHeight = newValue;
        }

        // constructor
        /**
         * Creates an instance of Label.
         * @param {string} lableString
         * @param {string} fontSize
         * @param {string} fontFamily
         * @param {string} fontColor
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @param {boolean} [isCentered=false]
         */
        constructor(lableString:string, fontSize:string, fontFamily:string, fontColor:string, x:number = 0, y:number = 0, isCentered:boolean = false){
            super(lableString, fontSize + " " + fontFamily, fontColor);

            this.Width = this.getMeasuredWidth();
            this.Height = this.getMeasuredHeight();

            if(isCentered){
                this.regX = this.HalfWidth;
                this.regY = this.HalfHeight;
            }

            this.x = x;
            this.y = y;
        }


        // private methods

        // public methods


    }
}