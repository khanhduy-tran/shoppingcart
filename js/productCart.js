export class ProductCart {
    constructor(product, quantity = 1) {
        this.product = product;
        this.quantity = quantity;
    }
    handlingPrice() {
        return 1;
    }
    showProductCart() {
        return '';
    }
    getProduct() {
        return this.product;
    }
    changeQuantity(quantity) {
        this.quantity = quantity;
    }
    increaseQuantity() {
        this.quantity + 1;
    }
    decreaseQuantity() {
        this.quantity - 1;
    }
    getQuantity() {
        return this.quantity;
    }
}
