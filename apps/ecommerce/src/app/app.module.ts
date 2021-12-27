import { SharedModule } from './shared/shared.module';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { environment } from './../environments/environment';
import { OptionsInterceptor } from './core/interceptors/options.interceptor';

// import { UiModule } from '@roinsight/ui';
// import { AuthModule } from './features/auth/auth.module';
// import { CoreModule } from './core/core.module';
// import { CheckoutModule } from './features/checkout/checkout.module';
// import { CartModule } from './features/cart/cart.module';
// import { ProductsModule } from './features/products/products.module';

import { UiModule } from '@roinsight/ui';

const routes: Routes = [];

// @NgModule({
//   declarations: [AppComponent],
//   imports: [BrowserModule, BrowserAnimationsModule,
//    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
//    SharedModule,
//    AuthModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    // AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // AuthModule,
    // ProductsModule,
    // CartModule,
    // CheckoutModule,
    // CoreModule,
    SharedModule,
    UiModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: OptionsInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (http: HttpClient) => () => http.post<object>(
        `${environment.apiUrl}/oauth/token`,
        { 'grantType': 'client_credentials' },
        { withCredentials: false })
        .toPromise(),
      multi: true,
      deps: [HttpClient]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }