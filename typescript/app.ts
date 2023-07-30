import { Product } from "./product";
import { ProductManagement } from "./productManagement";
import { CartManagement } from "./cartManagement";
import { ProductCart } from "./productCart";

var allProduct = new ProductManagement();
var cart = new CartManagement();

// đẩy sp ra html
var divProduct = document.getElementById('divProduct');
divProduct.innerHTML = allProduct.showProduct();
var divCart = document.getElementById('cart');
var divQuantityItemCart = document.getElementById('totalQuantity');
var temporaryPrice = document.getElementById('temporaryPrice');
var totalPrice = document.getElementById('totalPrice');
var buyNows = document.querySelectorAll('.buyNow');
for (let i : number = 0; i < buyNows.length; i++) {
    buyNows[i].addEventListener('click', (function() {
        var idProduct : number = this.getAttribute('data-idProduct');
        if(allProduct.getProductById(idProduct) == 0){
            console.log('Lỗi dữ liệu');
        }else{
        var getProduct : Product = allProduct.getProductById(idProduct);
        //chưa có sản phẩm thì thêm vào mảng với sl = 1
        if(cart.checkProductCart(getProduct) == -1){
            var productCart : ProductCart = new ProductCart(getProduct,1);
            cart.addProductCart(productCart);   
            printData();
        }else{ //có rồi thì update sl
            cart.increasingNumberProduct(getProduct);
        }
        divCart.innerHTML = (cart.showCart());
        message(`<div class="alert alert-success" role="alert">
        <div class="fa fa-check-square-o"></div><strong>${getProduct.nameProduct}</strong> Đã được thêm vào giỏ hàng!</div>`);
        var inputQuantity = document.querySelectorAll('.inputQuantity');
            
            for (let i : number = 0; i < inputQuantity.length; i++){
                
                inputQuantity[i].addEventListener('change',function(){
                    var idProduct : number = this.getAttribute('data-idProduct');
                    var findProduct : Product = allProduct.getProductById(idProduct);
                    const inputValue = (inputQuantity[i] as HTMLInputElement).value;
                    cart.updateProductCart(findProduct,parseInt(this.value));
                    printData();
                    message(`<div class="alert alert-info" role="alert">
        <div class="fa fa-check-square-o"></div>Sản phẩm <strong>${getProduct.nameProduct}</strong> Đã được cập nhật!</div>`);
                })
            } 
              // Thêm sự kiện click cho tất cả các phần tử removeProduct
              addRemoveProductClickListeners();
        }
        //đưa sản phẩm lấy được vào mảng quản lý giỏ hàng
        
    }
))}
function printData() : void {
    divQuantityItemCart.innerHTML = String(`(${cart.calcQuantity()} item)`);
    temporaryPrice.innerHTML = String(cart.calcPrice()+" đ");
    totalPrice.innerHTML = String(cart.calcPrice()+" đ");
}
function message(message : string) : void {
    var cardNotification = document.querySelector('.message');
    cardNotification.innerHTML = message; 
}
function addRemoveProductClickListeners() {
    const removeProductElements = document.querySelectorAll('.removeProduct');
    if (removeProductElements.length > 0) {
      removeProductElements.forEach((removeProductElement) => {
        removeProductElement.addEventListener('click', removeProductClickHandler);
      });
    }
  }
  
  function removeProductClickHandler() {
    const idProduct = this.getAttribute('data-removeProduct');
    const findProduct = allProduct.getProductById(idProduct);
    cart.removeProductCart(findProduct);
    divCart.innerHTML = cart.showCart();
    printData();
    message(
      '<div class="alert alert-info" role="alert">' +
      '<div class="fa fa-check-square-o"></div><strong>Sản phẩm đã bị xóa khỏi giỏ hàng!</strong></div>'
    );
    
    // Xóa phần tử removeProduct hiện tại khỏi DOM
    this.parentNode.parentNode.remove();
    
    // Thêm lại sự kiện click cho tất cả các phần tử removeProduct còn lại
    addRemoveProductClickListeners();
  }


