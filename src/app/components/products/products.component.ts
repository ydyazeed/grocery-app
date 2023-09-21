import { Component } from '@angular/core';
import { IProduct, ProductResponse } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  catId: any;
  products: IProduct[] = [];

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute){

    this.catId = this.activatedRoute.snapshot.paramMap.get('catId');
    
    this.dataService.getProductsByCatId(this.catId).subscribe((response: ProductResponse) => {
        this.products = response.data;
    })
  }



}
