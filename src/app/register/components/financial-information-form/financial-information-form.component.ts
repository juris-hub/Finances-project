import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-financial-information-form',
  templateUrl: './financial-information-form.component.html',
  styleUrls: ['./financial-information-form.component.scss'],
})
export class FinancialInformationFormComponent implements OnInit {
  financialInfoForm!: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.financialInfoForm = new FormGroup({
      income: new FormControl(null, [Validators.required, Validators.min(1)]),
      netWorth: new FormControl(null, [Validators.required, Validators.min(1)]),
    });
  }

  onNext() {
    console.log(this.financialInfoForm);
    this.userService.financialInformation = this.financialInfoForm.value;
    this.router.navigate(['']);
  }

  onBack() {
    this.router.navigate(['../personal'], { relativeTo: this.route });
  }
}
