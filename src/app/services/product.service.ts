import { Injectable } from '@angular/core';
import { Productdetail } from '../model/product';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

actionUrl: string = environment.baseUrl;




constructor(private http: HttpClient) { }
  /*
    private myProduct: Array<Productdetail> = [
    {
      name: 'OPPO f5',
      image: 'https://images-na.ssl-images-amazon.com/images/I/418oQm0-kFL.jpg',
      description: '4gb ram,64gb ROM',
      imageAlt: 'mobile',
      Price: 20000,
      isAvailable: true
  },
    {
      name: 'ONE PLUS 7',
      image: 'https://images-na.ssl-images-amazon.com/images/I/61x5tBufniL._SL1001_.jpg',
      description: 'a good mobile',
      imageAlt: '',
      Price: 39999 ,
      isAvailable: false
  },
      {
      name: 'iPHONE 11',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81HSzsIkJdL._SX679_.jpg',
      description: 'a good mobile',
      imageAlt: 'mobile',
      Price: 110000,
      isAvailable: true
  },
      {
      name: 'SAMSUNG S8',
      image: 'https://images-na.ssl-images-amazon.com/images/I/71vr2Ck4z2L._SL1500_.jpg',
      description: 'a good mobile',
      imageAlt: 'mobile',
      Price: 48999,
      isAvailable: true
  }
    ];
  */

  filterProducts(id) {
    return this.http.get(this.actionUrl + '/product/' + id);
  }
  addProduct(product: Productdetail) {
    return this.http.post(this.actionUrl + '/product', product);
  }
  getnewproduct() {
    return this.http.get(this.actionUrl + '/product');
  }

  filter(formData,id){
    return this.http.put(this.actionUrl + '/product/' + id, formData);
  }
  dele(id) {
    return this.http.delete(this.actionUrl + '/product/' + id);
  }



  /*addProduct(forms: Productdetail)
  {
     this.getnewproduct().push(forms);
  } */




}
