import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  items!: MenuItem[];
  subscription$ = Subscription;

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
