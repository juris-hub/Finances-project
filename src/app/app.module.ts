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
import { StepsModule } from 'primeng/steps';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { environment } from '../environments/environment';
import { AuthenticationModule } from './authentication/authentication.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { MenuModule } from 'primeng/menu';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { UserOnboardingModule } from './user-onboarding/user-onboarding.module';

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
    PasswordModule,
    MenuModule,
    DividerModule,
    AuthenticationModule,
    UserOnboardingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
