import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../services/products';


@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {

  private route = inject(ActivatedRoute);
  productServive = inject(Products)
  detail = this.productServive.productDetail

  ngOnInit() {
    let currentName = this.route.snapshot.paramMap.get('name');
    if(currentName) this.productServive.setProductDetailkByName(currentName)
  }


    deleteDetail() {
      // this.detail.name = "",
      // this.detail.description = "",
      // this.detail.price = 0,
      // this.detail.specs = "",
      // this.detail.price = 0
    }

}
