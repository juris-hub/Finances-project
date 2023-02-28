import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonalInformation } from 'src/app/core/personalInformation.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-personal-info-form',
  templateUrl: './personal-info-form.component.html',
  styleUrls: ['./personal-info-form.component.scss'],
})
export class PersonalInfoFormComponent implements OnInit {
  personalInfoForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: ['', Validators.required],
    birthday: [new Date(), Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const personalInfo = {
      firstName: this.personalInfoForm.controls['firstName'].value,
      lastName: this.personalInfoForm.controls['lastName'].value,
      address: this.personalInfoForm.controls['address'].value,
      birthday: this.personalInfoForm.controls['birthday'].value,
    };

    this.userService.addProfileInformation(personalInfo);
    this.router.navigate(['../financial'], { relativeTo: this.route });
  }
}
