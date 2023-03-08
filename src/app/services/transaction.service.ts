import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import { Transaction } from '../core/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private db: Firestore, private auth: Auth) {}

  addTransaction(transaction: Transaction) {
    setDoc(doc(this.db, 'Transactions', this.auth?.currentUser?.uid), {
      transaction: transaction,
    });
  }
}
