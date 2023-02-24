import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserOnboardingRoutingModule } from './user-onboarding-routing.module';
import { UserOnboardingComponent } from './user-onboarding.component';
import { StepsModule } from 'primeng/steps';
import { PersonalInfoComponent } from './pages/personal-info/personal-info.component';
import { FinancialInfoComponent } from './pages/financial-info/financial-info.component';
import { FinancialInfoFormComponent } from './components/financial-info-form/financial-info-form.component';
import { PersonalInfoFormComponent } from './components/personal-info-form/personal-info-form.component';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserOnboardingComponent,
    PersonalInfoComponent,
    FinancialInfoComponent,
    FinancialInfoFormComponent,
    PersonalInfoFormComponent,
  ],
  imports: [
    CommonModule,
    CalendarModule,
    UserOnboardingRoutingModule,
    StepsModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
})
export class UserOnboardingModule {}
