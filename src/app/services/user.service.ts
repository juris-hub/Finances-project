import { Injectable, OnInit } from '@angular/core';
import { FinancialInformation } from '../core/financialInformation.model';
import { PersonalInformation } from '../core/personalInformation.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../core/user.model';
import { AuthenticationService } from './authentication.service';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import { collection, getDoc, runTransaction } from 'firebase/firestore';
import { Auth, authState } from '@angular/fire/auth';
import { UntilDestroy } from '@ngneat/until-destroy';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class UserService {
  uid: string;
  user!: User;
  financialInformation: FinancialInformation = null;
  profileInformation: PersonalInformation = null;

  constructor(
    private db: Firestore,
    private auth: Auth,
    private angularFireAuth: AngularFireAuth
  ) {}

  addProfileInformation(personalInfo: PersonalInformation) {
    this.profileInformation = personalInfo;
  }

  addFinancialInfromation(financialInfo: FinancialInformation) {
    this.financialInformation = financialInfo;
  }

  addUser() {
    setDoc(doc(this.db, 'Users', this.auth.currentUser.uid), {
      profileInformation: this.profileInformation,
      financialInformation: this.financialInformation,
    });
  }
  //shouldn't use JWT token as UID
  async getProfileInformation() {
    const docRef = doc(this.db, 'Users', this.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
      return null;
    }
  }

  getFinancialInformation() {
    return this.financialInformation;
  }
}
