export interface FilterExpense{
    expenseTypeId:number | null;
    minAmount:number | null;
    maxAmount:number | null;
    minDateOfExpense:string | null;
    maxDateOfExpense:string | null;
}