import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { from, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private auth: Auth, private jwtHelper: JwtHelperService) {}

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return this.jwtHelper.isTokenExpired(token);
  }

  register(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      map(async (user) => {
        if (user) {
          localStorage.setItem('token', await user.user.getIdToken());
        }
        return user;
      })
    );
  }

  logout() {
    return from(this.auth.signOut());
  }
}
