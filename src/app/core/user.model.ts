import { FinancialInformation } from './financialInformation.model';
import { ProfileInformation } from './profileInformation.model';
import { Transactions } from './transactions.model';

export class User {
  userId: number;
  profileInformation: ProfileInformation;
  financialInformation: FinancialInformation;
  transactionData: Transactions[];

  constructor(
    userId: number,
    profileInformation: ProfileInformation,
    financialInformation: FinancialInformation,
    transactions: Transactions[]
  ) {
    this.userId = userId;
    this.profileInformation = profileInformation;
    this.financialInformation = financialInformation;
    this.transactionData = transactions;
  }
}
