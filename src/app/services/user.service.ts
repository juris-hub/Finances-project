import { Injectable } from '@angular/core';
import { FinancialInformation } from '../core/financialInformation.model';
import { PersonalInformation } from '../core/personalInformation.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../core/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user!: User;
  financialInformation!: FinancialInformation;
  profileInformation!: PersonalInformation;

  constructor() {}

  getProfileInformation() {
    return this.profileInformation;
  }

  getFinancialInformation() {
    return this.financialInformation;
  }
}
