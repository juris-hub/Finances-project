import { FinancialInformation } from './financialInformation.model';
import { PersonalInformation } from './personalInformation.model';
import { Transactions } from './transactions.model';

export interface User {
  uid: string;
  profileInformation: PersonalInformation;
  financialInformation: FinancialInformation;
  // transactionData?: Transactions[];

  // constructor(
  //   userId: number,
  //   profileInformation: ProfileInformation,
  //   financialInformation: FinancialInformation,
  //   transactions?: Transactions[]
  // ) {
  //   this.userId = userId;
  //   this.profileInformation = profileInformation;
  //   this.financialInformation = financialInformation;
  //   this.transactionData = transactions;
  // }
}
