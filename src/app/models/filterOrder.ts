export interface FilterOrder {
    shopId: number | null;
    isPayed: boolean | null;
    maxQuantity: number | null;
    minQuantity: number | null;
    minDateOfOrder: string | null;
    maxDateOfOrder: string | null;
    minDateOfPayement: string | null;
    maxDateOfPayement: string | null;
}