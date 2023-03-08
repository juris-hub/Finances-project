import { Injectable } from '@angular/core';
import { User } from '../core/user.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  user!: User;

  constructor() {}

  getUserData() {}
}
