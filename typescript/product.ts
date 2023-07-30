export class Product {
    //property
    private _id : number;
    private _nameProduct : string;
    private _price : number;
    private _describe : string;
    private _status : boolean;
    private _imgProduct : string;

    //id
    public get id() : number {
        return this._id;
    }
    
    public set id(v : number) {
        this._id = v;
    }
    //nameProduct
    public get nameProduct() : string {
        return this._nameProduct;
    }
    
    public set nameProduct(v : string) {
        this._nameProduct = v;
    }
    //price
    public get price() : number {
        return this._price;
    }
    
    public set price(v : number) {
        this._price = v;
    }
    //describe
    public get describe() : string {
        return this._describe;
    }
    
    public set describe(v : string) {
        this._describe = v;
    }
    //status
    public get status() : boolean {
        return this._status;
    }
    
    public set status(v : boolean) {
        this._status = v;
    }
    //imgProduct
    public get imgProduct() : string {
        return this._imgProduct;
    }
    
    public set imgProduct(v : string) {
        this._imgProduct = v;
    }

    constructor(id:number,nameProduct:string,price:number,describe:string,status:boolean,imgProduct:string){
        this._id = id;
        this._nameProduct = nameProduct;
        this._price = price;
        this._describe = describe;
        this._status = status;
        this._imgProduct = imgProduct;
    }
    
}