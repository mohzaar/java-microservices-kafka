import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Item } from '../interface/item';

@Injectable({
    providedIn: 'root'
})
export class ItemService {
    items: Array<Item> = [];

    get API_URL(): string {
        return environment.API_URL + "/order/items";
    }

    constructor(private http: HttpClient) { }

    getItems(){
        return this.http.get(this.API_URL).toPromise();
    }
}