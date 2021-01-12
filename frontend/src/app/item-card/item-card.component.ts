import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../interface/item';
import { CartService } from '../service/cart.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() item: Item | undefined;
  constructor(private cartService: CartService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addToCart(this.item!);
    this.snackBar.open(this.item!.name + "has been added to you cart.","Dismiss", {
      duration: 2000,
    });
  }
  
}
