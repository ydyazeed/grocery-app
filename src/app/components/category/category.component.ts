import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html'
})
export class CategoryComponent {

  categories: any;

  constructor(private dataService: DataService, private router: Router){
    this.dataService.getCategories().subscribe((response: any )=> {
      this.categories = response.data
    })
  }

  onClickHandler(category: any){
      this.router.navigate(['/products', category.catId])
  } 

}
