import { Shop } from './../models/shop';
import { Order } from './../models/order';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { District } from '../models/district';
import { ListShopService } from './../services/list-shop.service';
import { Component, OnInit } from '@angular/core';
import { FilterShop } from '../models/filterShop';
import { City } from '../models/city';

@Component({
  selector: 'app-list-boutique',
  templateUrl: './list-boutique.component.html',
  styleUrls: ['./list-boutique.component.scss']
})
export class ListBoutiqueComponent implements OnInit {

  listShop!:Shop[];
  listDistrict!:District[];
  listOrder!:Order[];
  listShopForm!:FormGroup;
  cityList!:City[];

  constructor(private listShopService : ListShopService, private fb:FormBuilder){}

  ngOnInit(): void {
     this.getAllDistrict();
     this.getCity();
     this.initForm();
     this.getShopFilter();
  }

  initForm():void{
    this.listShopForm = this.fb.group({
      nameShop:['',Validators.required],
      city:['',Validators.required],
      districtId:['',Validators.required],
      isProspection:['',Validators.required],
      minJoiningDate:['',Validators.required],
      maxJoiningDate:['',Validators.required],
      minOrder:['',Validators.required],
      maxOrder:['',Validators.required],
      minQuantityOfBag:['',Validators.required],
      maxQuantityOfBag:['',Validators.required],
    })
  }

  getAllDistrict():void{
    this.listShopService.getAllDistrict().subscribe((district)=>{
      this.listDistrict = district;
    })
  }

  getDistrictByName(districtId:number):string{
    const district = this.listDistrict.find(x => x.districtId === districtId);
    return district? district.name:"";
  }

  getCity():void{
    this.listShopService.getCity().subscribe((x) => {
      this.cityList = x;
    });
  }

  getDistrictByCity(): void {
    this.listShopForm.get('city')?.valueChanges.subscribe(cityId => {
      if (cityId) {
        this.listShopService
          .getDistrictByIdCity(cityId)
          .subscribe(districts => this.listDistrict = districts);
      } else {
        this.listDistrict = [];
      }
    });
  }

  getShopFilter():void{
    const searchShop = <FilterShop>this.listShopForm.value;
    this.listShopService.getShopFilter(searchShop)
    .subscribe(x => {this.listShop = x});
  }

  deleteShop(id:number):void{
    this.listShopService.deleteShop(id).subscribe();
    this.initForm();
  }

}
