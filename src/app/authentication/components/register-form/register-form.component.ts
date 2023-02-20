import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$'
        ),
      ]),
      confirmPassword: new FormControl('', [
        this.matchPassword,
        Validators.required,
        Validators.pattern(
          '^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$'
        ),
      ]),
    });
  }

  matchPassword(control: FormControl): { [s: string]: boolean } {
    const password = control.root.get('password');
    return password && control.value !== password.value
      ? {
          matchPassword: true,
        }
      : null;
  }

  onSubmit() {
    if (!this.registerForm.valid) {
      return;
    }

    this.authenticationService.register(
      this.registerForm.controls['email'].value,
      this.registerForm.controls['confirmPassword'].value
    );

    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onSignIn() {
    this.router.navigate(['../sign-in'], { relativeTo: this.route });
  }
}
