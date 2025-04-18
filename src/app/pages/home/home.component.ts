import {Component} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {AuthService} from "../../auth/auth.service";
import {IProduct} from "../../../model/product.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    $products = this.productService.getProductsForUser(this.authService.getUserId() ?? '');
    medList: IProduct[] = [];
    foodList: IProduct [] = [];

    constructor(private productService: ProductService, private authService: AuthService) {}

    ngOnInit(): void {
        this.$products.subscribe((products: IProduct[]) => {

            this.foodList = products.filter((product: IProduct) => product.category === "COMIDA" );
            this.medList = products.filter((product: IProduct) => product.category === "REMEDIO" );
        });
    }
}
