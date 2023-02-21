import { Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { from, map } from 'rxjs';
import { User } from '../core/user.model';
import { Firestore, FirestoreModule } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  currentUser$ = authState(this.auth);

  constructor(
    private auth: Auth,
    private jwtHelper: JwtHelperService,
    private router: Router,
    private db: Firestore
  ) {}

  // will have to be adjusted for firebase token instead of manually adding token to local storage

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  register(email: string, password: string) {
    return from(
      createUserWithEmailAndPassword(this.auth, email, password)
    ).pipe(
      map(async (user) => {
        if (user) {
          localStorage.setItem('token', await user.user.getIdToken());
          const docRef = await addDoc(collection(this.db, 'users'), {
            uid: await user.user.getIdToken(),
            email: email,
          });
          console.log(docRef);
          this.router.navigate(['../']);
        }
        return user;
      })
    );
  }

  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      map(async (user) => {
        if (user) {
          localStorage.setItem('token', await user.user.getIdToken());
          this.router.navigate(['../']);
        }
        return user;
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    return from(this.auth.signOut());
  }

  onCreateUserData(userData: User) {}
}
