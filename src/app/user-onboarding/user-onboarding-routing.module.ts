import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserOnboardingComponent } from './user-onboarding.component';

const routes: Routes = [{ path: '', component: UserOnboardingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserOnboardingRoutingModule { }
