import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CheckoutDialogComponent } from '../checkout-dialog/checkout-dialog.component';
import { Item } from '../interface/item';
import { CartService } from '../service/cart.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {
  items: Item[] = [];

  constructor(private cartService: CartService,
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
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
