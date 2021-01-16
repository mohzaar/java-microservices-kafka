import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../interface/cart';
import { Item } from '../interface/item';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  items: Item[] = [];
  @Input() cart: Cart = {} as Cart;

  constructor(private cartService: CartService) {
   }

  ngOnInit(): void {
    this.items = this.cart.itemList;
    console.log(this.items);
  }

}
