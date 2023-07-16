import { FilterOrder } from './../models/filterOrder';
import { ListOrderService } from './../services/list-order.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Shop } from '../models/shop';
import { Order } from '../models/order';


@Component({
  selector: 'app-list-commande',
  templateUrl: './list-commande.component.html',
  styleUrls: ['./list-commande.component.scss']
})
export class ListCommandeComponent implements OnInit {

  listOrderForms!:FormGroup;
  listShop!:Shop[];
  listOrders!:Order[];

  constructor(private listOrder : ListOrderService, private fb:FormBuilder){}
  ngOnInit(): void {
    this.initForm();
    this.getShop();
    this.filterOrder();
  }

  initForm():void{
    this.listOrderForms = this.fb.group({
      shopId:['',Validators.required],
      isPayed:['',Validators.required],
      maxQuantity:['',Validators.required],
      minQuantity:['',Validators.required],
      minDateOfOrder:['',Validators.required],
      maxDateOfOrder:['',Validators.required],
      minDateOfPayement:['',Validators.required],
      maxDateOfPayement:['',Validators.required],
    })
  };

  getShop():void{
    this.listOrder.getShop().subscribe((values)=>{
      this.listShop = values;
    })
  }

  getNameOfShop(idShop:number):string{
    const nameOfShop = this.listShop.find(x => x.shopId === idShop);
    return nameOfShop? nameOfShop.name:"";
  }

  filterOrder():void{
    const searchOrder = <FilterOrder>this.listOrderForms.value;
    this.listOrder.filterOrder(searchOrder)
    .subscribe(x => {this.listOrders = x});
  } 
}
