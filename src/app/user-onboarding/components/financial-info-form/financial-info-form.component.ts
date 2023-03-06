import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-financial-info-form',
  templateUrl: './financial-info-form.component.html',
  styleUrls: ['./financial-info-form.component.scss'],
})
export class FinancialInfoFormComponent {
  financialInfoForm = this.fb.group({
    netWorth: [null, Validators.required],
    monthlyIncome: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  onSubmit() {
    const financialInfo = {
      netWorth: this.financialInfoForm.controls['netWorth'].value,
      monthlyIncome: this.financialInfoForm.controls['monthlyIncome'].value,
    };

    this.userService.addFinancialInfromation(financialInfo);

    this.userService.addUser();
    this.router.navigate(['/']);
  }
}
