import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { doc, setDoc } from 'firebase/firestore';
import { Transaction } from '../core/transaction.model';
import { User } from '../core/user.model';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  user!: User;

  constructor(private db: Firestore, private auth: Auth) {}

  addTransaction(transaction: Transaction) {
    setDoc(doc(this.db, 'Transactions', this.auth?.currentUser?.uid), {
      transaction: transaction,
    });
  }

  getUserData() {}
}
