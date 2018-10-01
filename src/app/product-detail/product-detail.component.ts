import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product:Product;

  constructor(
    private route: ActivatedRoute,
    private dataService:DataService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.dataService.getProductById(id).subscribe((product) => {
      this.product = product;
    })
  }

}
