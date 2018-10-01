import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

}
