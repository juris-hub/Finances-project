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

@NgModule({
  declarations: [
    AuthenticationComponent,
    RegisterComponent,
    RegisterFormComponent,
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
