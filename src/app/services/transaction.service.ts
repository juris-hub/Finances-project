import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  addDoc,
  doc,
  Firestore,
  getDocs,
  setDoc,
} from '@angular/fire/firestore';
import { collection, orderBy, query } from 'firebase/firestore';
import { Transaction } from '../core/transaction.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactionsCollection: AngularFirestoreCollection<Transaction>;
  transactions$: Observable<Transaction[]>;

  constructor(
    private db: Firestore,
    private auth: Auth,
    private afs: AngularFirestore
  ) {
    this.transactionsCollection =
      this.afs.collection<Transaction>('Transactions');
    this.transactions$ = this.transactionsCollection.valueChanges();
  }
  addTransaction(transaction: Transaction) {
    const id = this.afs.createId();

    return this.afs
      .collection('Transactions')
      .doc(localStorage.getItem('user'))
      .collection('userTransactions')
      .doc(id)
      .set(transaction);
  }

  async getTransactions() {
    const transactions = new Array<Transaction>();

    await this.afs
      .collection('Transactions')
      .doc(localStorage.getItem('user'))
      .collection('userTransactions')
      .get()
      .subscribe((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          transactions.push(doc.data() as Transaction);
        });
      });

    return transactions;
  }
}
