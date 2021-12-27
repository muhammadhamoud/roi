
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { BestProductComponent } from './best-product/best-product.component';
import { CartProductsComponent } from './cart-products/cart-products.component';
import { CartCalculatorComponent } from './cart-calculator/cart-calculator.component';
import { FavouriteProductComponent } from './favourite-product/favourite-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ProductComponent } from './product/product.component';
import { PagesComponent } from './pages.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../../environments/environment';


@NgModule({
  declarations: [
    AddProductComponent,
    BestProductComponent,
    CartProductsComponent,
    CartCalculatorComponent,
    FavouriteProductComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductComponent,
    PagesComponent,
    NavbarComponent,
    
  ],
  imports: [
    CommonModule,
     PagesRoutingModule,
     AngularFireModule.initializeApp(environment.firebase),
     AngularFirestoreModule,

  ],
  exports: [
    AddProductComponent,
    BestProductComponent,
    CartProductsComponent,
    CartCalculatorComponent,
    FavouriteProductComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductComponent,
    PagesRoutingModule,
    PagesComponent,
    NavbarComponent,
    
  ]
})
export class PagesModule { }
