import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-user-onboarding',
  templateUrl: './user-onboarding.component.html',
  styleUrls: ['./user-onboarding.component.scss'],
})
export class UserOnboardingComponent implements OnInit {
  items: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Personal',
        routerLink: 'personal',
      },
      { label: 'Financial', routerLink: 'financial' },
    ];
  }
}
