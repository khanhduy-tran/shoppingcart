export class CartManagement {
    addProductCart(pr) {
        this.allProductCart.push(pr);
    }
    ;
    checkProductCart(pr) {
        for (let i = 0; i < this.allProductCart.length; i++) {
            if (this.allProductCart[i].getProduct().id == pr.id) {
                return i;
            }
        }
        return -1;
    }
    ;
    increasingNumberProduct(pr) {
        //biết được vị trí của sản phẩm nằm ở đâu trong mảng.
        var locationProduct = this.checkProductCart(pr);
        var nowQuantity = this.allProductCart[locationProduct].getQuantity();
        this.allProductCart[locationProduct].changeQuantity(nowQuantity + 1);
    }
    viewCart() {
        return this.allProductCart;
    }
    updateProductCart(pr, quantity) {
        for (let i = 0; i < this.allProductCart.length; i++) {
            var idProduct = this.allProductCart[i].getProduct().id;
            if (idProduct == pr.id) {
                this.allProductCart[i].changeQuantity(quantity);
                console.log(this.allProductCart[i]);
            }
        }
    }
    ;
    removeProductCart(pr) {
        for (let i = 0; i < this.allProductCart.length; i++) {
            var idProduct = this.allProductCart[i].getProduct().id;
            if (idProduct == pr.id) {
                this.allProductCart.splice(i, 1);
                console.log(this.allProductCart);
            }
        }
    }
    ;
    checkStatusProduct() { }
    ;
    calcQuantity() {
        var totalQuantity = 0;
        //duyệt tất cả sản phẩm và cộng dồn số lượng
        for (let i = 0; i < this.allProductCart.length; i++) {
            totalQuantity += this.allProductCart[i].getQuantity();
        }
        return totalQuantity;
    }
    ;
    calcPrice() {
        var total = 0;
        for (let i = 0; i < this.allProductCart.length; i++) {
            var price = this.allProductCart[i].getProduct().price;
            var quantity = this.allProductCart[i].getQuantity();
            price = price * quantity;
            total += price;
        }
        return total;
    }
    showCart() {
        var cartHtml = "";
        for (let i = 0; i < this.allProductCart.length; i++) {
            //cartHtml += this.allProductCart[i].getProduct().nameProduct;
            cartHtml += `
            <div class="row">
            <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
              <!-- Image -->
              <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                <img src="${this.allProductCart[i].getProduct().imgProduct}"
                  class="w-100" alt="Blue Jeans Jacket" />
                <a href="#!">
                  <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
                </a>
              </div>
              <!-- Image -->
            </div>

            <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
              <!-- Data -->
              <p><strong>${this.allProductCart[i].getProduct().nameProduct}</strong></p>
              <p>Color: blue</p>
              <p>Size: M</p>
              <button type="button" class="removeProduct btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                title="Remove item" data-removeProduct ="${this.allProductCart[i].getProduct().id}">
                <i class="fas fa-trash"></i>
              </button>
              <button type="button" class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                title="Move to the wish list">
                <i class="fas fa-heart"></i>
              </button>
              <!-- Data -->
            </div>

            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <!-- Quantity -->
              <div class="d-flex mb-4" style="max-width: 300px">
                <button class="btn btn-primary px-3 me-2 "
                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                  <i class="fas fa-minus"></i>
                </button>

                <div class="form-outline">
                  <input id="form1" data-idProduct="${this.allProductCart[i].getProduct().id}" min="1" name="quantity" value="${this.allProductCart[i].getQuantity()}" type="number" class="form-control inputQuantity" />
                </div>

                <button class="btn btn-primary px-3 ms-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
              <!-- Quantity -->

              <!-- Price -->
              <p class="text-start text-md-center">
                <strong>${this.allProductCart[i].getProduct().price} đ</strong>
              </p>
              <!-- Price -->
            </div>
          </div>
          <!-- Single item -->

          <hr class="my-4" />
            `;
        }
        return cartHtml;
    }
    constructor() {
        this.allProductCart = [];
    }
}
