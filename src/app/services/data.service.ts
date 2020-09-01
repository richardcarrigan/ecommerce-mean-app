import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../product';

@Injectable()
export class DataService {

  constructor(public http: HttpClient) {
  }

  getProducts() {
    return this.http.get<Product[]>('/products');
  }

  getProductById(id: String) {
    return this.http.get<Product>('/products/' + id);
  }

}
