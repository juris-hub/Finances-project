export interface Transaction {
  transactionName: string;
  transactionDate: Date;
  transactionCost: number | null;
  transactionCategory: string;
  id: number;
}
