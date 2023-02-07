import { Injectable } from '@angular/core';
import { Transactions } from '../core/transactions.model';
import { User } from '../core/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  transactions: Transactions[] = [
    new Transactions('Ćevapi', new Date('12.01.2023'), 3, 'rana', 1),
    new Transactions('Kod kiće', new Date('12.01.2023'), 0.6, 'izlazak', 2),
  ];

  user!: User;

  constructor(private userService: UserService) {}

  getTransactions() {
    return this.transactions.slice();
  }

  getUserData() {
    this.user = {
      profileInformation: this.userService.getProfileInformation(),
      financialInformation: this.userService.getFinancialInformation(),
      userId: 1,
      transactionData: this.transactions,
    };
  }
}
