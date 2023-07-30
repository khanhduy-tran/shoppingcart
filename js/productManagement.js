import { Product } from './product.js';
export class ProductManagement {
    constructor() {
        this.product = [];
        //fake data
        var sp1 = new Product(1, 'Gaming Headset with Mic', 400000, 'Gaming Headset with Mic', true, './images/headphonegaming.jpg');
        this.addProduct(sp1);
        var sp2 = new Product(2, 'Apple Watch Series 1 Sport', 2500000, 'Apple Watch Series 1 Sport, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet convallis turpis. Vestibulum vitae est eu diam sodales lacinia. Suspendisse sodales laoreet porta. In tellus elit, mattis eu metus quis, ultricies ultricies urna. Ut consequat venenatis enim ac iaculis. Etiam venenatis, lacus et imperdiet ullamcorper, dolor turpis placerat enim, quis tristique eros quam eu turpis. Sed molestie eu sem sed convallis. Sed luctus ante ut placerat fringilla. Cras feugiat aliquet ante, et consectetur ante malesuada a. Sed non erat urna. Duis gravida accumsan tellus eu sagittis.', false, './images/applewatch.jpg');
        this.addProduct(sp2);
        var sp3 = new Product(3, 'Mens Denim Jeans Shorts', 450000, 'Mens Denim Jeans Shorts, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet convallis turpis. Vestibulum vitae est eu diam sodales lacinia. Suspendisse sodales laoreet porta. In tellus elit, mattis eu metus quis, ultricies ultricies urna. Ut consequat venenatis enim ac iaculis. Etiam venenatis, lacus et imperdiet ullamcorper, dolor turpis placerat enim, quis tristique eros quam eu turpis. Sed molestie eu sem sed convallis. Sed luctus ante ut placerat fringilla. Cras feugiat aliquet ante, et consectetur ante malesuada a. Sed non erat urna. Duis gravida accumsan tellus eu sagittis.', true, './images/shortjeans.webp');
        this.addProduct(sp3);
        var sp4 = new Product(4, 'Mens T-shirt Cotton Base Layer Slim fit', 250000, 'Mens T-shirt Cotton Base Layer Slim fit, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet convallis turpis. Vestibulum vitae est eu diam sodales lacinia. Suspendisse sodales laoreet porta. In tellus elit, mattis eu metus quis, ultricies ultricies urna. Ut consequat venenatis enim ac iaculis. Etiam venenatis, lacus et imperdiet ullamcorper, dolor turpis placerat enim, quis tristique eros quam eu turpis. Sed molestie eu sem sed convallis. Sed luctus ante ut placerat fringilla. Cras feugiat aliquet ante, et consectetur ante malesuada a. Sed non erat urna. Duis gravida accumsan tellus eu sagittis.', false, './images/aothun.jpg');
        this.addProduct(sp4);
        var sp5 = new Product(5, 'Áo phao da Sư Tử', 250000, 'Áo phao da Sử Tử, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet convallis turpis. Vestibulum vitae est eu diam sodales lacinia. Suspendisse sodales laoreet porta. In tellus elit, mattis eu metus quis, ultricies ultricies urna. Ut consequat venenatis enim ac iaculis. Etiam venenatis, lacus et imperdiet ullamcorper, dolor turpis placerat enim, quis tristique eros quam eu turpis. Sed molestie eu sem sed convallis. Sed luctus ante ut placerat fringilla. Cras feugiat aliquet ante, et consectetur ante malesuada a. Sed non erat urna. Duis gravida accumsan tellus eu sagittis.', true, './images/aophao.png');
        this.addProduct(sp5);
        var sp6 = new Product(6, 'Áo vest da Hà Mã', 250000, 'Áo vest da Hà Mã, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet convallis turpis. Vestibulum vitae est eu diam sodales lacinia. Suspendisse sodales laoreet porta. In tellus elit, mattis eu metus quis, ultricies ultricies urna. Ut consequat venenatis enim ac iaculis. Etiam venenatis, lacus et imperdiet ullamcorper, dolor turpis placerat enim, quis tristique eros quam eu turpis. Sed molestie eu sem sed convallis. Sed luctus ante ut placerat fringilla. Cras feugiat aliquet ante, et consectetur ante malesuada a. Sed non erat urna. Duis gravida accumsan tellus eu sagittis.', true, './images/aovest.png');
        this.addProduct(sp6);
    }
    getAllProduct() {
        return this.product;
    }
    getProductById(idPr) {
        //get product based id
        for (let i = 0; i < this.product.length; i++) {
            if (this.product[i].id == idPr) {
                return this.product[i];
            }
        }
        return 0;
    }
    addProduct(sp) {
        // dùng để đẩy dữ liệu hứng từ API vào trong mảng sản phẩm
        this.product.push(sp);
    }
    showProduct() {
        var listProduct = '';
        if (this.product.length != 0) {
            for (let i = 0; i < this.product.length; i++) {
                listProduct += `
                <div class="col-lg-3 col-md-6 col-sm-6" style="
                padding-top: 20px;">
        <div class="card px-4 border shadow-0 mb-4 mb-lg-0 id-${this.product[i].id}">
          <div class="mask px-2" style="height: 50px;">
            <div class="d-flex justify-content-between">
              <h6><span class="badge bg-danger pt-1 mt-3 ms-2">New</span></h6>
              <a href="#"><i class="fas fa-heart text-primary fa-lg float-end pt-3 m-2"></i></a>
            </div>
          </div>
          <a href="#" class="">
            <img src="${this.product[i].imgProduct}" class="card-img-top rounded-2" />
          </a>
          <div class="card-body d-flex flex-column pt-3 border-top">
            <a href="#" class="nav-link">${this.product[i].nameProduct}</a>
            <div class="price-wrap mb-2">
              <strong class="">${this.product[i].price}đ</strong>
              <del class="">$24.99</del>
            </div>
            `;
                if (this.product[i].status == false) {
                    listProduct += `
                <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
              <button class="btn btn-outline-secondary disabled w-100">Out of stock</button>
            </div>
                `;
                }
                else {
                    listProduct += `<div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
              <button  class="btn btn-outline-primary w-100 buyNow" data-idProduct="${this.product[i].id}">Add to cart</button>
            </div>`;
                }
                listProduct += `
          </div>
        </div>
      </div>
                `;
            }
            return listProduct;
        }
        else {
            return 'Sản phẩm đang được cập nhật!';
        }
    }
}
