import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExpenseType } from '../models/expenseType';
import { Expense } from '../models/expense';
import { Unit } from '../models/unit';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private addExpenseUrl = 'https://localhost:7277/api/Expense';
  private getExpenseTypeUrl = 'https://localhost:7277/api/Referential/ExpenseType';
  private getUnitUrl = 'https://localhost:7277/api/Referential/Unit';

  constructor(private HttpClient:HttpClient) { }

  addExpense(expense:Expense):Observable<Expense>{
    return this.HttpClient.post<Expense>(this.addExpenseUrl,expense);
  }

  getExpenseType():Observable<ExpenseType[]>{
    return this.HttpClient.get<ExpenseType[]>(`${this.getExpenseTypeUrl}`);
  }

  getUnit():Observable<Unit[]>{
    return this.HttpClient.get<Unit[]>(`${this.getUnitUrl}`);
  }

}
