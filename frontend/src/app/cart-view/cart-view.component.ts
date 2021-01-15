import { Component, OnInit } from '@angular/core';
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

  constructor(private cartService: CartService) {
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
}
