import { Injectable } from '@angular/core';
import { FinancialInformation } from '../core/financialInformation.model';
import { PersonalInformation } from '../core/personalInformation.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../core/user.model';
import { AuthenticationService } from './authentication.service';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import { runTransaction } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user!: User;
  financialInformation: FinancialInformation = null;
  profileInformation: PersonalInformation = null;

  constructor(private db: Firestore) {}

  addProfileInformation(personalInfo: PersonalInformation) {
    this.profileInformation = personalInfo;
  }

  addFinancialInfromation(financialInfo: FinancialInformation) {
    this.financialInformation = financialInfo;
  }

  addUser() {
    let userUID = localStorage.getItem('token');
    setDoc(doc(this.db, 'Users', userUID), {
      users: {
        profileInformation: this.profileInformation,
        financialInformation: this.financialInformation,
      },
    });
  }
  //shouldn't use JWT token as UID
  async getProfileInformation() {
    let userUID = localStorage.getItem('token');
    try {
      return await runTransaction(this.db, async (transaction) => {
        const sfDoc = await transaction.get(doc(this.db, 'Users', userUID));
        if (!sfDoc.exists()) {
          throw 'Document does not exist!';
        }
      });
    } catch (e) {
      console.log('Transaction failed : ', e);
    }
  }

  getFinancialInformation() {
    return this.financialInformation;
  }
}
