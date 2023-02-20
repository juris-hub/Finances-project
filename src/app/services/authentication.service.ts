import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { BehaviorSubject, from, map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isLoggedIn$ = new Subject<boolean>();

  constructor(
    private auth: Auth,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {}

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  register(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      map(async (user) => {
        if (user) {
          localStorage.setItem('token', await user.user.getIdToken());
          this.isLoggedIn$.next(true);
          this.router.navigate(['../']);
        }
        return user;
      })
    );
  }

  logout() {
    return from(this.auth.signOut());
  }
}
