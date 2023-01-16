import { Injectable } from '@angular/core';
import { Transaction } from './transaction.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  transactions: Transaction[] = [
    new Transaction('Ćevapi', new Date('12.01.2023'), 3, 'rana', 1),
    new Transaction('Kod kiće', new Date('12.01.2023'), 0.6, 'izlazak', 2),
  ];

  constructor() {}

  getTransactions() {
    return this.transactions.slice();
  }
}
