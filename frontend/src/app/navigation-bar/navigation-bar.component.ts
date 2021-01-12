import { Component, OnInit } from '@angular/core';
import { Item } from '../interface/item';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  items: Item[] = [];
  constructor(private cartService: CartService) {
    this.items = cartService.getItems();
   }

  ngOnInit(): void {
  }

}
