import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../interface/item';

@Injectable({
    providedIn: 'root'
})
export class ItemService {
    items: Array<Item> = [];

    get API_URL(): string {
        return "http://localhost:81/order/items"
    }

    constructor(private http: HttpClient) { }

    getItems(){
        return this.http.get(this.API_URL).toPromise();
    }
}