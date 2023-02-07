import { Injectable } from '@angular/core';
import { FinancialInformation } from '../core/financialInformation.model';
import { ProfileInformation } from '../core/profileInformation.model';
import { User } from '../core/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user!: User;
  financialInformation!: FinancialInformation;
  profileInformation!: ProfileInformation;

  constructor() {}

  getProfileInformation() {
    return this.profileInformation;
  }

  getFinancialInformation() {
    return this.financialInformation;
  }
}
