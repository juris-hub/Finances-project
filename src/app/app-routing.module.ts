import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTransactionComponent } from './transactions/add-transaction/add-transaction.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditTransactionComponent } from './transactions/edit-transaction/edit-transaction.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },

  {
    path: 'authentication',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
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
