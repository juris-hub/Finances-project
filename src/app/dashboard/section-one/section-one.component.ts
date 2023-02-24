import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss'],
})
export class SectionOneComponent implements OnInit {
  userData!: {
    name: string;
    lastName: string;
    netWorth: number;
    monthlyIncome: number;
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {}
}
