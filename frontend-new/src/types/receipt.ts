export interface Receipt {
  id?: number;
  vendor: string;
  amountPaid: number;
  date: string;
  category: string;
  notes: string;
  imageUrl?: string;
}
