import { Injectable } from '@angular/core';
import { Transactions } from '../core/transactions.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  transactions: Transactions[] = [
    new Transactions('Ćevapi', new Date('12.01.2023'), 3, 'rana', 1),
    new Transactions('Kod kiće', new Date('12.01.2023'), 0.6, 'izlazak', 2),
  ];

  constructor() {}

  getTransactions() {
    return this.transactions.slice();
  }
}
