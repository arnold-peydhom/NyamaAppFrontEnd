import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shop } from '../models/shop';
import { District } from '../models/district';
import { Order } from '../models/order';
import { FilterShop } from '../models/filterShop';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class ListShopService {

  private getDistrictUrl = 'https://localhost:7277/api/Referential/District';
  private getOrderUrl = 'https://localhost:7277/api/Order/Allorder';
  private filterShopUrl = 'https://localhost:7277/api/Shop/filter';
  private getCityUrl = 'https://localhost:7277/api/Referential/City';
  private getDistrictByIdUrl = 'https://localhost:7277/api/Referential/DistrictByCityId';
  private deleteShopUrl = 'https://localhost:7277/api/Shop';

  constructor(private httpClient:HttpClient) { }

  getAllDistrict():Observable<District[]>{
    return this.httpClient.get<District[]>(`${this.getDistrictUrl}`);
  }

  getCity():Observable<City[]>{
    return this.httpClient.get<City[]>(`${this.getCityUrl}`);
  }

  getDistrictByIdCity(cityId:number):Observable<District[]>{
    return this.httpClient.get<District[]>(`${this.getDistrictByIdUrl}?id=${cityId}`);
  }

  deleteShop(id:number):Observable<boolean>{
    return this.httpClient.delete<boolean>(`${this.deleteShopUrl}/${id}`)
  }

  getAllOrder():Observable<Order[]>{
    return this.httpClient.get<Order[]>(`${this.getOrderUrl}`);
  }

  getShopFilter(filterShop:FilterShop): Observable<Shop[]>{
    return this.httpClient.get<Shop[]>(`${this.filterShopUrl}${this.stringifyObject(filterShop)}`);
  }

  private stringifyObject(filterShop: FilterShop): string{
    var returnParam =   `${filterShop.districtId? 'districtId='+filterShop.districtId+'&':''}`+
                        `${filterShop.isProspection? 'isProspection='+filterShop.isProspection+'&':''}`+
                        `${filterShop.maxJoiningDate? 'maxJoiningDate='+filterShop.maxJoiningDate+'&':''}`+
                        `${filterShop.minJoiningDate? 'minJoiningDate='+filterShop.minJoiningDate+'&':''}`+
                        `${filterShop.maxOrder? 'maxOrder='+filterShop.maxOrder+'&':''}`+
                        `${filterShop.minOrder? 'minOrder='+filterShop.minOrder+'&':''}`+
                        `${filterShop.minQuantityOfBag? 'minQuantityOfBag='+filterShop.minQuantityOfBag+'&':''}`+
                        `${filterShop.maxQuantityOfBag? 'maxQuantityOfBag='+filterShop.maxQuantityOfBag+'&':''}`+
                        `${filterShop.nameShop? 'nameShop='+filterShop.nameShop+'&':''}`;
      return '?'+returnParam;
  }
}
