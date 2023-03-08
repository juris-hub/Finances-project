import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-add-transaction-form',
  templateUrl: './add-transaction-form.component.html',
  styleUrls: ['./add-transaction-form.component.scss'],
})
export class AddTransactionFormComponent {
  categories = ['Food', 'Fun', 'Transportation', 'Ultilites'];
  editMode = false;

  transactionForm = this.fb.group({
    transactionName: ['', [Validators.required]],
    transactionDate: [new Date(), [Validators.required]],
    transactionCost: [null, [Validators.required]],
    transactionCategory: [this.categories[0], [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.transactionForm.valid) {
    }
  }
}
