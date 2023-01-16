// import { Category } from './category.model';

export class Transaction {
  name: string;
  timestamp: Date;
  amount: number;
  category: string;
  id: number;

  constructor(
    name: string,
    timestamp: Date,
    amount: number,
    category: string,
    id: number
  ) {
    this.name = name;
    this.timestamp = timestamp;
    this.amount = amount;
    this.category = category;
    this.id = id;
  }
}
