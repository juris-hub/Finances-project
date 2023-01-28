import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { format } from 'date-fns';
import { DashboardService } from 'src/app/core/dashboard.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css'],
})
export class AddTransactionComponent implements OnInit {
  categories = ['Food', 'Fun', 'Transportation', 'Ultilites'];

  transactionForm!: FormGroup;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.transactionForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      timestamp: new FormControl(null, Validators.required),
      amount: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    if (this.transactionForm.valid) {
      this.dashboardService.transactions.push(
        this.transactionForm.getRawValue()
      );
      console.log(this.transactionForm.value);
    }
  }
}
