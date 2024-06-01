export class FormError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'FormError';
    }
  }
  
  export class RequiredFieldError extends FormError {
    constructor(field: string) {
      super(`${field} is required.`);
      this.name = 'RequiredFieldError';
    }
  }
  
  export class EmailFormatError extends FormError {
    constructor() {
      super('Invalid email format.');
      this.name = 'EmailFormatError';
    }
  }
  
  export class PasswordMismatchError extends FormError {
    constructor() {
      super('Passwords do not match.');
      this.name = 'PasswordMismatchError';
    }
  }
  
  export class PostalCodeFormatError extends FormError {
    constructor() {
      super('Invalid postal code format.');
      this.name = 'PostalCodeFormatError';
    }
  }
  