import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cart } from '../interface/cart';
import { Item } from '../interface/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartInterface: Cart = {} as Cart;

  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.getCart().then((value: any) => {
      this.cartInterface = value;
    });
  }

  get API_URL(): string {
    return "http://localhost:81/order/cart"
  }

  get cart() {
    return this.cartInterface;
  }

  get itemList() {
    return this.cart.itemList;
  }

  getCart() {
    return this.http.get(this.API_URL).toPromise();
  }

  isAlreadyPresent(item: Item) {
    return this.cartInterface.itemList.filter(d => d === item).length > 0;
  }

  addToCart(product: Item) {
    this.cartInterface.itemList.push(product);
    return this.updateCart(this.cart).toPromise();
  }

  getItems() {
    return this.cartInterface.itemList;
  }

  removeItemFromCard(item: Item): Item[] {
    const index = this.cart.itemList.indexOf(item);
    this.cart.itemList.splice(index, 1);
    this.updateCart(this.cart).subscribe((value) => {
      this.cartInterface = value as Cart;
    });
    return this.cart.itemList;
  }

  clearCart() {
    this.cart.itemList = [];
    return this.cart.itemList;
  }


  updateCart(cart: Cart) {
    return this.http.put(this.API_URL, cart);
  }

}