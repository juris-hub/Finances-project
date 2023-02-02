import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTransactionComponent } from './transactions/add-transaction/add-transaction.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditTransactionComponent } from './transactions/edit-transaction/edit-transaction.component';
import { RegisterComponent } from './register/register.component';
import { PersonalInformationComponent } from './register/pages/personal-information/personal-information.component';
import { FinancialInformationComponent } from './register/pages/financial-information/financial-information.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    children: [
      { path: 'personal', component: PersonalInformationComponent },
      { path: 'financial', component: FinancialInformationComponent },
    ],
  },
  {
    path: 'new-transaction',
    component: AddTransactionComponent,
  },
  // { path: ':id', component: RecipeEditComponent },
  { path: ':id/edit', component: EditTransactionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
