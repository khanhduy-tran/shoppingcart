export class Product {
    //id
    get id() {
        return this._id;
    }
    set id(v) {
        this._id = v;
    }
    //nameProduct
    get nameProduct() {
        return this._nameProduct;
    }
    set nameProduct(v) {
        this._nameProduct = v;
    }
    //price
    get price() {
        return this._price;
    }
    set price(v) {
        this._price = v;
    }
    //describe
    get describe() {
        return this._describe;
    }
    set describe(v) {
        this._describe = v;
    }
    //status
    get status() {
        return this._status;
    }
    set status(v) {
        this._status = v;
    }
    //imgProduct
    get imgProduct() {
        return this._imgProduct;
    }
    set imgProduct(v) {
        this._imgProduct = v;
    }
    constructor(id, nameProduct, price, describe, status, imgProduct) {
        this._id = id;
        this._nameProduct = nameProduct;
        this._price = price;
        this._describe = describe;
        this._status = status;
        this._imgProduct = imgProduct;
    }
}
