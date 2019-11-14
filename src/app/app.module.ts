import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FooterComponent } from './footer/footer.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'addproduct', component: AddproductComponent},
  { path: 'productdetail/:id', component: ProductdetailsComponent},
  { path: 'addproduct/:id', component: AddproductComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    AddproductComponent,
    FooterComponent,
    AddproductComponent,
    ProductdetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot (
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
