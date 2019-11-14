import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  myProduct: any;

    constructor(private service: ProductService) {
      this.service.getnewproduct().subscribe(response =>
         {console.log(response);
          this.myProduct = response;
        }
         );
    }

    deleted(event) {
      this.service.getnewproduct().subscribe(Response => {
        this.myProduct = Response;
        console.log(this.myProduct);
      });
    }
  ngOnInit() {
  }
 }
 