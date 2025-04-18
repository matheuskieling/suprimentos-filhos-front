import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {IProduct} from "../../model/product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    baseUrl = environment.apiUrl;
    constructor(private http: HttpClient) { }

    getProductsForUser(userId: string):Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`${this.baseUrl}/product/${userId}`)
    }
}
