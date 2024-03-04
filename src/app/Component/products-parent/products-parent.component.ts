import { Component } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-products-parent',
  templateUrl: './products-parent.component.html',
  styleUrls: ['./products-parent.component.css']
})
export class ProductsParentComponent {
  addProductActivate : boolean = true;
  viewProductActivate : boolean = false;

  acivate(e:Event){
    let element = e.target as HTMLElement
    if (element.id=="add_prod"){
    this.addProductActivate = true;
    this.viewProductActivate = false}

    if (element.id=="view_prod"){
    this.addProductActivate = false;
    this.viewProductActivate = true;
  }
  }
  product :IProduct[] = []
    GetProduct(prod : IProduct){
      this.product.push(prod);
  }
}
