import { ListExpenseService } from './../services/list-expense.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpenseType } from '../models/expenseType';
import { FilterExpense } from '../models/filterExpense';
import { Expense } from '../models/expense';

@Component({
  selector: 'app-list-depenses',
  templateUrl: './list-depenses.component.html',
  styleUrls: ['./list-depenses.component.scss']
})
export class ListDepensesComponent implements OnInit{

  listExpenseForm!:FormGroup;
  listExpenseType!:ExpenseType[];
  listExpenses!:Expense[];
  constructor(private fb:FormBuilder,private listExpense:ListExpenseService){}

  ngOnInit(): void {
    this.initForm();
    this.getAllExpenseType();
    this.filterExpense();
  }
  initForm():void{
    this.listExpenseForm = this.fb.group({
      expenseTypeId:['',Validators.required],
      minAmount:['',Validators.required],
      maxAmount:['',Validators.required],
      minDateOfExpense:['',Validators.required],
      maxDateOfExpense:['',Validators.required]
    })
  }

  getAllExpenseType():void{
      this.listExpense.getAllExpenseType().subscribe((x)=>{
      this.listExpenseType = x;
    })
  }

  getNameByIdExpenseType(idExpenseType:number):string{
    const nameOfExpenseType = this.listExpenseType.find(x=>x.expenseTypeId === idExpenseType);
    return nameOfExpenseType? nameOfExpenseType.name:"";
  }

  filterExpense():void{
    const searchExpense = <FilterExpense>this.listExpenseForm.value;
    this.listExpense.filterExpense(searchExpense)
    .subscribe(x => {
      this.listExpenses = x
    });
  }

  deleteExpense(id:number):void{
    this.listExpense.deleteExpense(id).subscribe();
    this.initForm();
  }

}
