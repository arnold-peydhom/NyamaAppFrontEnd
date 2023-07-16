import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpenseType } from '../models/expenseType';
import { Unit } from '../models/unit';
import { EditExpenseService } from './../services/edit-expense.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.scss']
})
export class EditExpenseComponent implements OnInit{

  editExpenseForm!:FormGroup;
  expenseList!:ExpenseType[];
  unitList!:Unit[];
  
  constructor(private editExpenseService:EditExpenseService,private fb:FormBuilder){}
  ngOnInit(): void {
    this.getExpenseType();
    this.getUnit();
    this.initForm();
  }

  initForm():void{
    this.editExpenseForm = this.fb.group({
      expenseTypeId:['',Validators.required],
      quantity:['',Validators.required],
      amount:['',Validators.required],
      dateOfExpense:['',Validators.required],
      unitId:['',Validators.required],
    })
  }

  getExpenseType():void{
    this.editExpenseService.getExpenseType().subscribe((expensesType)=>{
      this.expenseList = expensesType;
    })
  }

  getUnit():void{
    this.editExpenseService.getUnit().subscribe((units)=>{
      this.unitList = units;
    })
  }
  
}
