import { Component, OnInit } from '@angular/core';
import { Cart } from '../interface/cart';
import { Item } from '../interface/item';
import { CartService } from '../service/cart.service';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  cart: Cart = {} as Cart;
  items: Item[] = [];

  constructor(private itemService: ItemService, private cartService: CartService) { 
  }

  ngOnInit(): void {
    this.initDatas();
    console.log(this.cart);
  }

  async initDatas(){
    Object.assign(this.items, await this.itemService.getItems());
    Object.assign(this.cart, await this.cartService.getCart());
  }
}
