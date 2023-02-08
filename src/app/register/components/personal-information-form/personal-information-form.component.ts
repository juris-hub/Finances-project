import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-personal-information-form',
  templateUrl: './personal-information-form.component.html',
  styleUrls: ['./personal-information-form.component.scss'],
})
export class PersonalInformationFormComponent implements OnInit {
  personalInfoForm!: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.personalInfoForm = new FormGroup({
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
    });
  }

  onBack() {
    this.router.navigate(['../sign-up'], { relativeTo: this.route });
  }

  onNext() {
    console.log(this.personalInfoForm);

    this.userService.profileInformation = this.personalInfoForm.value;
    console.log(this.userService.profileInformation);
    this.router.navigate(['register/financial']);
  }
}
