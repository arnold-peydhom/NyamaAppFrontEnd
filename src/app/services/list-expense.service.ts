import { FilterExpense } from './../models/filterExpense';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../models/expense';
import { ExpenseType } from '../models/expenseType';

@Injectable({
  providedIn: 'root'
})
export class ListExpenseService {
  private filterExpenseUrl = 'https://localhost:7277/api/Expense/filter';
  private getAllExpenseTypeUrl = 'https://localhost:7277/api/Expense/allExpenseType';
  private deleteExpenseUrl = 'https://localhost:7277/api/Expense';

  constructor(private httpClient : HttpClient){}

  filterExpense(filterExpense:FilterExpense):Observable<Expense[]>{
    return this.httpClient.get<Expense[]>(`${this.filterExpenseUrl}${this.stringifyObject(filterExpense)}`);
  }

  private stringifyObject(filterExpense:FilterExpense):string{
    var returnParam = `${filterExpense.expenseTypeId? 'expenseTypeId='+filterExpense.expenseTypeId+'&':''}`+
                      `${filterExpense.minAmount? 'minAmount='+filterExpense.minAmount+'&':''}`+
                      `${filterExpense.maxAmount? 'maxAmount='+filterExpense.maxAmount+'&':''}`+
                      `${filterExpense.minDateOfExpense? 'minDateOfExpense='+filterExpense.minDateOfExpense+'&':''}`+
                      `${filterExpense.maxDateOfExpense? 'maxDateOfExpense='+filterExpense.maxDateOfExpense+'&':''}`;

        return '?'+returnParam;
  }

  getAllExpenseType():Observable<ExpenseType[]>{
    return this.httpClient.get<ExpenseType[]>(`${this.getAllExpenseTypeUrl}`);
  } 

  deleteExpense(id:number):Observable<boolean>{
    return this.httpClient.delete<boolean>(`${this.deleteExpenseUrl}/${id}`);
  }
}
