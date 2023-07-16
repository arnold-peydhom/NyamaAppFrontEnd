import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpenseType } from '../models/expenseType';
import { Unit } from '../models/unit';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root'
})
export class EditExpenseService {

  private getExpenseTypeUrl = 'https://localhost:7277/api/Referential/ExpenseType';
  private getUnitUrl = 'https://localhost:7277/api/Referential/Unit';
  private getExpenseByIdUrl = 'https://localhost:7277/api/Expense/id';

  constructor(private httpClient:HttpClient) { }

  getExpenseType():Observable<ExpenseType[]>{
    return this.httpClient.get<ExpenseType[]>(`${this.getExpenseTypeUrl}`);
  }

  getUnit():Observable<Unit[]>{
    return this.httpClient.get<Unit[]>(`${this.getUnitUrl}`);
  }

  getExpenseById(idExpense:number):Observable<Expense>{
    return this.httpClient.get<Expense>(`${this.getExpenseByIdUrl}?id=${idExpense}`);
  }

}
