import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent {
  items!: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Personal',
        routerLink: 'personal',
      },
      {
        label: 'Financial',
        routerLink: 'financial',
      },
      // {
      //   label: 'Complete',
      //   routerLink: 'complete',
      // },
    ];
  }
}
