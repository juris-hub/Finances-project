import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Transaction } from 'src/app/core/transaction.model';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss'],
})
export class TransactionsTableComponent implements OnInit {
  transactions$: Observable<Transaction[]>;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    from(this.transactionService.getTransactions()).subscribe(console.log);
    this.transactions$ = from(this.transactionService.getTransactions());
  }
}
