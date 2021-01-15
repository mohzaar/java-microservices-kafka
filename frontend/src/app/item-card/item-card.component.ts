import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../interface/item';
import { CartService } from '../service/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { Cart } from '../interface/cart';


@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() cart: Cart = {} as Cart;
  @Input() item: Item = {} as Item;
  constructor(private cartService: CartService, private snackBar: MatSnackBar, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cartService.getCart().then((value) => {
      this.cart = value as Cart;
    });
  }

  addToCart() {
    if (this.cart.itemList.filter(d => d.id == this.item.id).length > 0) {
      this.toastr.warning("This item has already been added");
      return;
    }
    this.cartService.addToCart(this.item).then((value) => {
      this.cart = value as Cart;
      this.snackBar.open(this.item.name + "has been added to you cart.", "Dismiss", {
        duration: 2000,
      });
    });
  }
}
