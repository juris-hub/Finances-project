import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-financial-information-form',
  templateUrl: './financial-information-form.component.html',
  styleUrls: ['./financial-information-form.component.scss'],
})
export class FinancialInformationFormComponent implements OnInit {
  financialInfoForm!: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.financialInfoForm = new FormGroup({
      income: new FormControl(),
      netWorth: new FormControl(),
    });
  }

  onNext() {
    console.log(this.financialInfoForm);
    this.router.navigate(['register/complete']);
  }

  onBack() {
    this.router.navigate(['../personal'], { relativeTo: this.route });
  }
}
