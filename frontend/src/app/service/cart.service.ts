import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment.prod';
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
    return environment.API_URL + '/order';
  }

  get cart() {
    return this.cartInterface;
  }

  get itemList() {
    return this.cart.itemList;
  }

  getCart() {
    return this.http.get(this.API_URL +"/cart").toPromise();
  }

  isAlreadyPresent(item: Item) {
    return this.cartInterface.itemList.filter(d => d === item).length > 0;
  }

  addToCart(product: Item) {
    this.cartInterface.itemList.push(product);
    return this.updateCart(this.cart);
  }

  getItems() {
    return this.cartInterface.itemList;
  }

  removeItemFromCard(item: Item): Item[] {
    const index = this.cart.itemList.indexOf(item);
    this.cart.itemList.splice(index, 1);
    this.updateCart(this.cart).then((value) => {
      this.cartInterface = value as Cart;
    });
    return this.cart.itemList;
  }

  clearCart() {
    this.cartInterface.itemList = [];
    this.updateCart(this.cartInterface).then((value: any) => {
      this.cartInterface = value;
    });
  }

  updateCart(cart: Cart) {
    return this.http.put(this.API_URL +"/cart", cart).toPromise();
  }

  order(order:any){
    return this.http.post(this.API_URL, order).toPromise();
  }

}