import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/core/dashboard.service';
import { Transactions } from 'src/app/core/transactions.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  transactions: Transactions[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.transactions = this.dashboardService.getTransactions();
  }
}
