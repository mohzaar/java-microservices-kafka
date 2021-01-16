import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CartViewComponent } from './cart-view/cart-view.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CheckoutDialogComponent } from './checkout-dialog/checkout-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ItemListComponent,
    ItemCardComponent,
    CartViewComponent,
    CheckoutDialogComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
