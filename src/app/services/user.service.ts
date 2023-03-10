import { Injectable } from '@angular/core';
import { FinancialInformation } from '../core/financialInformation.model';
import { PersonalInformation } from '../core/personalInformation.model';
import { User } from '../core/user.model';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import { getDoc } from 'firebase/firestore';
import { Auth } from '@angular/fire/auth';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class UserService {
  uid: string;
  user!: User;
  financialInformation: FinancialInformation = null;
  profileInformation: PersonalInformation = null;

  constructor(private db: Firestore, private auth: Auth) {}

  addProfileInformation(personalInfo: PersonalInformation) {
    this.profileInformation = personalInfo;
  }

  addFinancialInfromation(financialInfo: FinancialInformation) {
    this.financialInformation = financialInfo;
  }

  addUser() {
    setDoc(doc(this.db, 'Users', this.auth?.currentUser?.uid), {
      profileInformation: this.profileInformation,
      financialInformation: this.financialInformation,
    });
  }

  async getUserInfo() {
    const docRef = doc(this.db, 'Users', localStorage.getItem('user'));
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
      return null;
    }
  }
}
