import { Injectable } from '@angular/core';
import { ProfileInformation } from '../core/profileInformation.model';
import { User } from '../core/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user!: User;

  profileInformation!: ProfileInformation;

  constructor() {}

  getProfileInformation() {
    return this.profileInformation;
  }
}
