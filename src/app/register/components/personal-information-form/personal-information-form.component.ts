import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-information-form',
  templateUrl: './personal-information-form.component.html',
  styleUrls: ['./personal-information-form.component.scss'],
})
export class PersonalInformationFormComponent implements OnInit {
  personalInfoForm!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.personalInfoForm = new FormGroup({
      name: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  onNext() {
    console.log(this.personalInfoForm);
    this.router.navigate(['register/financial']);
  }
}
