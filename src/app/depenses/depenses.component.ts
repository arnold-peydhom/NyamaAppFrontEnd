import { ExpenseService } from './../services/expense.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { Expense } from '../models/expense';
import { ExpenseType } from '../models/expenseType';
import { Unit } from '../models/unit';

@Component({
  selector: 'app-depenses',
  templateUrl: './depenses.component.html',
  styleUrls: ['./depenses.component.scss']
})
export class DepensesComponent implements OnInit {

  expenseForm!:FormGroup;
  expenseList!:ExpenseType[];
  unitList!:Unit[];

  constructor(private fb:FormBuilder,private expenseService : ExpenseService){}

  ngOnInit(): void {
    this.initForm();
    this.getExpenseType();
    this.getUnit();
  }

  initForm():void{
    this.expenseForm = this.fb.group({
      expenseTypeId:['',Validators.required],
      quantity:['',Validators.required],
      amount:['',Validators.required],
      dateOfExpense:['',Validators.required],
      unitId:['',Validators.required],
    })
  }

  getExpenseType():void{
    this.expenseService.getExpenseType().subscribe((expensesType)=>{
      this.expenseList = expensesType;
      console.log(expensesType);
    })
  }

  addExpense():void{
    const expenseToAdd = this.expenseForm.value as Expense;
    this.expenseService.addExpense(expenseToAdd).subscribe(()=>console.log("add success"));
    this.initForm();
  }

  getUnit():void{
    this.expenseService.getUnit().subscribe((units)=>{
      this.unitList = units;
      console.log(units);
    })
  }

}
