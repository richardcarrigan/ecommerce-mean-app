import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) {
  }

  getProducts() {
    return this.http.get('products')
    .map(res => res.json());
  }

  getProductById(id:String) {
    return this.http.get('products/' + id)
    .map(res => res.json());
  }

}
