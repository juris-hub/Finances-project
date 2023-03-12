import { Component } from '@angular/core';
import { Transaction } from 'src/app/core/transaction.model';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent {

  transactions : Transaction[] = [];



}
