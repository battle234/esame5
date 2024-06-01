// Importazione delle dipendenze necessarie
import { UserData, FormStatus } from './userData';
import { RequiredFieldError, EmailFormatError, PasswordMismatchError, PostalCodeFormatError } from './formErrors';

// Definizione della classe RegistrationForm
export class RegistrationForm {
  private userData: UserData;
  private status: FormStatus;

  constructor() {
    this.userData = {
      name: '',
      postalCode: '',
      address: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
    this.status = 'IDLE';
  }

  updateData(field: keyof UserData, value: string): void {
    if (value === "") {
      console.error(`${field} is required and cannot be empty.`);
      return; // Interrompe l'esecuzione se il campo è vuoto
    }
    this.userData[field] = value;
    this.printData();
  }

  submit(): void {
    try {
      this.validateData();
      this.printStatus();
    } catch (error) {
      console.error(error.message);
    }
  }

  validateData(): void {
    if (!this.userData.name) {
      throw new RequiredFieldError('Name');
    }
    if (!this.userData.postalCode) {
      throw new RequiredFieldError('Postal Code');
    } else if (!this.isValidPostalCode(this.userData.postalCode)) {
      throw new PostalCodeFormatError();
    }
    if (!this.userData.address) {
      throw new RequiredFieldError('Address');
    }
    if (!this.userData.email) {
      throw new RequiredFieldError('Email');
    } else if (!this.isValidEmail(this.userData.email)) {
      throw new EmailFormatError();
    }
    if (!this.userData.password) {
      throw new RequiredFieldError('Password');
    }
    if (this.userData.password !== this.userData.confirmPassword) {
      throw new PasswordMismatchError();
    }
    this.status = 'SUCCESS';
  }

  isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  isValidPostalCode(postalCode: string): boolean {
    return /^\d{5}$/.test(postalCode); 
  }

  printData(): void {
    console.log('Current User Data:', JSON.stringify(this.userData, null, 2));
  }

  printStatus(): void {
    console.log('Current Form Status:', this.status);
  }
}

// Creazione e utilizzo della classe RegistrationForm
const form = new RegistrationForm();
form.updateData('name', 'Giovanni Rossi');
form.updateData('postalCode', '20123');
form.updateData('address', 'Via Buonarroti 10');
form.updateData('email', 'Giovanni.rossi@example.com');
form.updateData('password', 'password123');
form.updateData('confirmPassword', 'password123');
form.submit();  
