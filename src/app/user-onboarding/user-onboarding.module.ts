import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserOnboardingRoutingModule } from './user-onboarding-routing.module';
import { UserOnboardingComponent } from './user-onboarding.component';


@NgModule({
  declarations: [
    UserOnboardingComponent
  ],
  imports: [
    CommonModule,
    UserOnboardingRoutingModule
  ]
})
export class UserOnboardingModule { }
