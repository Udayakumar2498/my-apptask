import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  myForm: FormGroup;
  id: number;
  productService: any;
  data: any;
  addForm: any;
  constructor(private product: ProductService , private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.myForm = new FormGroup({
      title: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      isAvailable: new FormControl('', Validators.required)
    });

    this.route.params.subscribe(params => {
      this.id = +params.id;
      if (this.id) {
        console.log(params);
        this.product.filterProducts(this.id).subscribe(response => {
          this.data = response;
          this.myForm.patchValue({
            title: this.data.title,
            description: this.data.description,
            imageUrl: this.data.imageUrl,
            price: this.data.price,
            isAvailable: this.data.isAvailable
          });
          console.log(this.data.title);
        });
      }
    });
  }
  onSubmit(form: FormGroup) {

      if (this.id) {
        this.product.filter(form.value, this.id).subscribe(data => {
        alert ("product added successfully");
        this.router.navigate([""])
      });
      }
      else{
        this.product.addProduct(this.myForm.value).subscribe(response => {
          alert("product added successfully");
          this.router.navigate([""]); });
      }
      }
      del(id) {
        this.product.dele(this.id).subscribe(Response=>{console.log(Response);
          alert( ' product deleted successfully ' );
          this.router.navigate([""]);
        });
      }
}