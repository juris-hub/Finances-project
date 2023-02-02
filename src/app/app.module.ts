import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SectionOneComponent } from './dashboard/section-one/section-one.component';
import { SectionTwoComponent } from './dashboard/section-two/section-two.component';
import { SectionThreeComponent } from './dashboard/section-three/section-three.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './dashboard/main/main.component';
import { TableModule } from 'primeng/table';
import { AddTransactionComponent } from './transactions/add-transaction/add-transaction.component';
import { EditTransactionComponent } from './transactions/edit-transaction/edit-transaction.component';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { RegisterFormComponent } from './register/components/register-form/register-form.component';
import { StepsModule } from 'primeng/steps';
import { PersonalInformationFormComponent } from './register/components/personal-information-form/personal-information-form.component';
import { PersonalInformationComponent } from './register/pages/personal-information/personal-information.component';
import { FinancialInformationComponent } from './register/pages/financial-information/financial-information.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    NavigationBarComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    MainComponent,
    AddTransactionComponent,
    EditTransactionComponent,
    RegisterComponent,
    RegisterFormComponent,
    PersonalInformationFormComponent,
    PersonalInformationComponent,
    FinancialInformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    ReactiveFormsModule,
    StepsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
