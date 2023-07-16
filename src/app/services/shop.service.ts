import { District } from './../models/district';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../models/city';
import { Shop } from '../models/shop';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private getCityUrl = 'https://localhost:7277/api/Referential/City';
  private getDistrictByIdUrl = 'https://localhost:7277/api/Referential/DistrictByCityId';
  private addShopUrl = 'https://localhost:7277/api/Shop';


  constructor(private httpClient : HttpClient) { }

  getCity():Observable<City[]>{
    return this.httpClient.get<City[]>(`${this.getCityUrl}`);
  }

  getDistrictByIdCity(cityId:number):Observable<District[]>{
    return this.httpClient.get<District[]>(`${this.getDistrictByIdUrl}?id=${cityId}`);
  }

  addShop(shop:Shop):Observable<Shop>{
    return this.httpClient.post<Shop>(this.addShopUrl,shop);
  }

}
