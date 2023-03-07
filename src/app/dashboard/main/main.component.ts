import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Transaction } from 'src/app/core/transaction.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {}
}
