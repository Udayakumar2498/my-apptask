import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  @Input()
  product: any;
  router: any;
  productService: any;


  @Output()
  // tslint:disable-next-line: new-parens
  isDeleted = new EventEmitter;

  constructor(private _productService: ProductService) { }

  delete(id) {
    this._productService.dele(id).subscribe((data: any) => {
      console.log(data);
      this.isDeleted.emit("");
      alert('Product deleted successfully');
    });

  }

  id(id: any) {
    throw new Error('Method not implemented.');
  }
  ngOnInit() {
  }

}
