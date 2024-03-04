import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  myForm :FormGroup = new FormGroup(
    {
      name:new FormControl('',[
        Validators.required,
        Validators.minLength(5),
      ]),
      category:new FormControl('',[
        Validators.required,
        Validators.minLength(4),
      ]),
      price:new FormControl(0,[
        Validators.required,
        Validators.min(100),
      ]),
      quantity:new FormControl('',[
        Validators.required,
        Validators.min(5),
        //Validators.max(25)    
      ]),
      discount:new FormControl('',[
        Validators.required,
        Validators.min(5),
        Validators.max(25)    
      ]),
    }
  );
  get nameControle(){
    return this.myForm.get('name')
  }
  get categoryControle(){
    return this.myForm.get('category')  
  }
  get priceControle(){
    return this.myForm.get('price')  
  }
  get quantityControle(){
    return this.myForm.get('quantity')  
  }
  get discountControle(){
    return this.myForm.get('discount')  
  }

  /// send data to parent 

  product :IProduct = {
    Name : "",
    Category:"",
    Price:0,
    Quantity : 0 ,
    Discount : 0,
    InSale : false,
  } 
  @Output() myEvent : EventEmitter<IProduct> = new EventEmitter()
  getData(e :Event){

    e.preventDefault()
    this.myEvent.emit(this.product);
  
  }
}
