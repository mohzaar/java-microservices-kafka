import { Component, OnInit } from '@angular/core';
import { ShippingService } from '../service/shipping.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  isLoading = false;
  panelOpenState = false;
  data: any;
  constructor(private shippingService: ShippingService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.shippingService.getShippingOrders().then((value: any) => {
      console.log(value);
      this.data = value;
      this.isLoading = false;
    })
  }

}
