import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialInfoComponent } from './pages/financial-info/financial-info.component';
import { PersonalInfoComponent } from './pages/personal-info/personal-info.component';
import { UserOnboardingComponent } from './user-onboarding.component';

const routes: Routes = [
  { path: '', component: UserOnboardingComponent },
  { path: 'personal', component: PersonalInfoComponent },
  { path: 'financial', component: FinancialInfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserOnboardingRoutingModule {}
