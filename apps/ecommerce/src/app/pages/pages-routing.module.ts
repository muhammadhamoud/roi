import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartProductsComponent } from './cart-products/cart-products.component';
import { FavouriteProductComponent } from './favourite-product/favourite-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { PagesComponent } from './pages.component';


const routes: Routes = [
  {
    path: "products",
      children: [
        {
          path: "",
          component: PagesComponent,
        },
        {
          path: "Product",
          component: ProductComponent,
        },
        {
          path: "all-products",
          component: ProductListComponent,
        },
        {
          path: "favourite-products",
          component: FavouriteProductComponent,
        },
        {
          path: "cart-items",
          component: CartProductsComponent,
        },
        {
          path: "checkouts",
          loadChildren: () =>
            import("./check-out/check-out.module").then((m) => m.CheckOutModule),
        },
        {
          path: "product/:id",
          component: ProductDetailComponent,
        },
      ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
