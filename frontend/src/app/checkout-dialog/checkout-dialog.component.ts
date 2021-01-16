import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
import { ToastrService } from 'ngx-toastr';
import { DataDialog } from '../cart-view/cart-view.component';
import { Item } from '../interface/item';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-checkout-dialog',
  templateUrl: './checkout-dialog.component.html',
  styleUrls: ['./checkout-dialog.component.scss']
})
export class CheckoutDialogComponent implements OnInit {
  customerForm: FormGroup;
  addressForm: FormGroup;
  paymentForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CheckoutDialogComponent>,
    private fb: FormBuilder,
    private cartService: CartService,
    @Inject(MAT_DIALOG_DATA) public data: DataDialog) { }

  ngOnInit(): void {
    console.log(this.data);
    this.initForms();
  }

  initForms() {
    this.customerForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });

    this.addressForm = this.fb.group({
      street: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zip: ['', [Validators.required]],
    });

    this.paymentForm = this.fb.group({
      name: ['', [Validators.required]],
      expiration: ['', [Validators.required]],
      cvv: ['', [Validators.required]],
      creditcardnumber: ['', [Validators.required]],
    });
  }


  submitForm() {
    const data = {
      itemList: this.data.itemList,
      customer: this.customerForm.getRawValue(),
      address: this.addressForm.getRawValue(),
      totalPrice: this.data.totalPrice,
      deliveryDate: Date.now()
    }

    this.cartService.order(data).then((value) => {
      if(value){
        this.cartService.clearCart();
        this.dialogRef.close(true);
      }
      else {
        this.dialogRef.close("Error");
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

}
