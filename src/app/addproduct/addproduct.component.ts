import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  myForm: FormGroup;
  constructor(private product: ProductService) { }
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      Price: new FormControl('', Validators.required),
      isAvailable : new FormControl('', Validators.required)
    });
  }
  onSubmit(form: FormGroup) {
    console.log('Valid?', this.myForm.value);
    console.log('Valid?', this.myForm.valid);
   
   if (this.myForm.valid)
   {
      this.product.addProduct(this.myForm.value);
} else{
  alert( 'not valid' );
}
  }
}
