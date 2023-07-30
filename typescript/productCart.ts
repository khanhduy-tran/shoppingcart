import { Product } from "./product";

export class ProductCart {
    private product : Product;
    private quantity : number;

    constructor(product : Product, quantity : number = 1){
        this.product = product;
        this.quantity = quantity;
    }
    handlingPrice() : number {
        return 1;
    }
    showProductCart() : string {
        return '';
    }
    getProduct() : Product {
        return this.product;
    }
    changeQuantity(quantity:number) : void{
        this.quantity = quantity;
    }
    increaseQuantity() : void {
        this.quantity + 1;
    }
    decreaseQuantity() : void {
        this.quantity - 1;
    }
    getQuantity() : number {
        return this.quantity;
    }
}