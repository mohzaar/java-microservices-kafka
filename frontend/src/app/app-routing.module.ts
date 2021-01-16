import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartViewComponent } from './cart-view/cart-view.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [
  { path: '', component: ItemListComponent },
  { path: 'cart', component: CartViewComponent },
  { path: 'shipping', component: ShippingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
