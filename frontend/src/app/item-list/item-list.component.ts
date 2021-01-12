import { Component, OnInit } from '@angular/core';
import { Item, products } from '../interface/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  numbers: number[];
  items: Item[] = products;

  constructor() { 
    this.numbers = Array(25).fill(0).map((x,i)=>i);
  }

  ngOnInit(): void {
  }

}
