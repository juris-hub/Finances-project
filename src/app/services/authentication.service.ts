import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(
      () => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Something went wrong');
        this.router.navigate(['/register']);
      }
    );
  }

  register(email: string, password: string) {
    return this.fireAuth.createUserWithEmailAndPassword(email, password).then(
      () => {
        //send verificationMail
        //set userData
        this.router.navigate(['']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
