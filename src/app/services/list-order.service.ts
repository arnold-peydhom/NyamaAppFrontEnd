import { FilterOrder } from './../models/filterOrder';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shop } from '../models/shop';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class ListOrderService {
  private getShopUrl = 'https://localhost:7277/api/Shop/Allshop';
  private filterOrderUrl = 'https://localhost:7277/api/Orde/filter';////

  constructor(private httpClient:HttpClient) { }

  getShop():Observable<Shop[]>{
    return this.httpClient.get<Shop[]>(`${this.getShopUrl}`);
  }

  filterOrder(filterOrder:FilterOrder):Observable<Order[]>{
    return this.httpClient.get<Order[]>(`${this.filterOrderUrl}${this.stringifyObject(filterOrder)}`);
  }
  private stringifyObject(filterOrder: FilterOrder): string{
    var returnParam =   `${filterOrder.shopId? 'shopId='+filterOrder.shopId+'&':''}`+
                        `${filterOrder.isPayed? 'isPayed='+filterOrder.isPayed+'&':''}`+
                        `${filterOrder.maxQuantity? 'maxQuantity='+filterOrder.maxQuantity+'&':''}`+
                        `${filterOrder.minQuantity? 'minQuantity='+filterOrder.minQuantity+'&':''}`+
                        `${filterOrder.minDateOfOrder? 'minDateOfOrder='+filterOrder.minDateOfOrder+'&':''}`+
                        `${filterOrder.maxDateOfOrder? 'maxDateOfOrder='+filterOrder.maxDateOfOrder+'&':''}`+
                        `${filterOrder.minDateOfPayement? 'minDateOfPayement='+filterOrder.minDateOfPayement+'&':''}`+
                        `${filterOrder.maxDateOfPayement? 'maxDateOfPayement='+filterOrder.maxDateOfPayement+'&':''}`;
      return '?'+returnParam;
  }
}
