import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CheckoutDialogComponent } from '../checkout-dialog/checkout-dialog.component';
import { Item } from '../interface/item';
import { CartService } from '../service/cart.service';

export interface DataDialog {
  itemList: Item[];
  totalPrice: number;
}

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {
  items: Item[] = [];

  constructor(private cartService: CartService,
    private toastr: ToastrService,
    private route: Router,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.initDatas();
  }

  async initDatas() {
    this.items = this.cartService.cart.itemList;
  }

  removeItem(item: Item) {
    this.items = this.cartService.removeItemFromCard(item);
  }

  getPrice(){
    let price = 0;
    this.items.forEach((d) => price += d.price);
    return price;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CheckoutDialogComponent, {
      data: {
        itemList: this.items, totalPrice: this.getPrice()
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.toastr.success("Congratulations !", "You order was completed with success.")
        this.route.navigate(["shipping"]);
      }
      else if(result === "Error") {
        this.toastr.error("An error occured with your order.")
      }
    });
  }

}
