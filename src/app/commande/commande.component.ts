import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { Shop } from '../models/shop';
import { Order } from '../models/order';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {

  orderForm!:FormGroup;
  shopList!:Shop[];

  constructor(private fb:FormBuilder,private orderService : OrderService) { }

  ngOnInit(): void {
    this.initOrderForm();
    this.getShop();
    this.initOrderForm();
  }
  initOrderForm():void{
    this.orderForm = this.fb.group({
      creatingDate:['',Validators.required],
      isPayLater:[false],
      quantityOfBags:['',Validators.required],
      payementDate:['',Validators.required],
      ShopId:['',Validators.required],
    });
  }

  getShop():void{
      this.orderService.getShop().subscribe((value)=>{
      this.shopList = value;
      console.log(value);
    })
  }

  addOrder():void{
    const orderToAdd = this.orderForm.value as Order;
    this.orderService.addOrder(orderToAdd).subscribe(()=>{console.log("add succes")});
    this.initOrderForm();
  }
}
