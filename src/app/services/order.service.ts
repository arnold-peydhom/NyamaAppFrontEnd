import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shop } from '../models/shop';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private getShopUrl = 'https://localhost:7277/api/Shop/Allshop';
  private addOrderUrl = 'https://localhost:7277/api/Order';

  constructor(private HttpClient:HttpClient){}

  getShop():Observable<Shop[]>{
    return this.HttpClient.get<Shop[]>(`${this.getShopUrl}`);
  }

  addOrder(order:Order):Observable<Order>{
    return this.HttpClient.post<Order>(this.addOrderUrl,order);
  }
}
