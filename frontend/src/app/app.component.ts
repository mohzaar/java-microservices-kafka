import { Component, OnInit, Output } from '@angular/core';
import { Cart } from './interface/cart';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 @Output() cart: Cart = {} as Cart;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.initDatas();
  }

  async initDatas(){
    Object.assign(this.cart, await this.cartService.getCart());
  }
}
