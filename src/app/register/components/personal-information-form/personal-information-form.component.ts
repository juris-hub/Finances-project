import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-personal-information-form',
  templateUrl: './personal-information-form.component.html',
  styleUrls: ['./personal-information-form.component.scss'],
})
export class PersonalInformationFormComponent implements OnInit {
  personalInfoForm!: FormGroup;

  constructor(private userService: UserService, private router: Router) {}

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

    this.userService.profileInformation = this.personalInfoForm.value;
    console.log(this.userService.profileInformation);
    this.router.navigate(['register/financial']);
  }
}
