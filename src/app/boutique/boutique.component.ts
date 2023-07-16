import { Shop } from './../models/shop';
import { ShopService } from './../services/shop.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { City } from '../models/city';
import { District } from '../models/district';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.scss'],
})
export class BoutiqueComponent implements OnInit {
  shopForm!: FormGroup;
  cityList!: City[];
  districtList!: District[];
  shop!: Shop;

  constructor(private fb: FormBuilder, private shopService: ShopService) {}

  ngOnInit(): void {
    this.initForm();
    this.getDistrictByCity();
    this.getCity();
  }

  initForm(): void {
    this.shopForm = this.fb.group({
      name: ['', Validators.required],
      isProspection: [false],
      city: ['', Validators.required],
      firstPhone: ['', Validators.required],
      iswhatsappFirstPhone: [false],
      imageId: [],
      gpsLongitude: ['', Validators.required],
      gpsLatitude: ['', Validators.required],
      districtId: [''],
      secondPhone: [''],
      iswhatsappSecondPhone: [false],
      creatingDate: ['', Validators.required],
      joiningDate: ['', Validators.required],
    });
  }

  addShop(): void {
    const shopToAdd = this.shopForm.value as Shop;
    this.shopService
      .addShop(shopToAdd)
      .subscribe(() => console.log('add succes'));
  }

  getCity() {
    this.shopService.getCity().subscribe((cities) => {
      this.cityList = cities;
    });
  }

  getDistrictByCity(): void {
    this.shopForm.get('city')?.valueChanges.subscribe(cityId => {
      if (cityId) {
        this.shopService
          .getDistrictByIdCity(cityId)
          .subscribe(districts => this.districtList = districts);
      } else {
        this.districtList = [];
      }
    });
  }
}
