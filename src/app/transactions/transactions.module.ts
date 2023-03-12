import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import { AddTransactionComponent } from './pages/add-transaction/add-transaction.component';
import { AddTransactionFormComponent } from './components/add-transaction-form/add-transaction-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { TransactionsTableComponent } from './components/transactions-table/transactions-table.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    TransactionsComponent,
    AddTransactionComponent,
    AddTransactionFormComponent,
    TransactionsTableComponent,
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    CalendarModule,
    DropdownModule,
    TableModule
  ],
})
export class TransactionsModule {}
