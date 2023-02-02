export class ProfileInformation {
  name: string;
  lastName: string;
  email: string;
  password: string;

  constructor(name: string, email: string, password: string, lastName: string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.lastName = lastName;
  }
}
