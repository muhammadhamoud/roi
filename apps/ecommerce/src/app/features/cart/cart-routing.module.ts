import { EmptyComponent } from './pages/empty/empty.component';
import { CodesComponent } from './pages/codes/codes.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { EmptyCartGuard } from './../../core/guards/empty-cart.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: '', canActivate: [EmptyCartGuard], children: [
    { path: 'cart', component: SummaryComponent },
    { path: 'codes', component: CodesComponent }
  ]
  },
  { path: 'empty', component: EmptyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
