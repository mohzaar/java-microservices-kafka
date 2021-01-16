
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  constructor(private http: HttpClient, private toastr: ToastrService) {
  }

  get API_URL(): string {
    return environment.API_URL + "/shipping"
  }

  getShippingOrders() {
    return this.http.get(this.API_URL).toPromise();
  }

}