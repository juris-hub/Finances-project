import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AuthenticationComponent,
    RegisterComponent,
    RegisterFormComponent,
    SignInFormComponent,
    SignInComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ButtonModule,
    DividerModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
  ],
})
export class AuthenticationModule {}
