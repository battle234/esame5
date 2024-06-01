export interface UserData {
    name: string;
    postalCode: string;
    address: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  
  export type FormStatus = 'IDLE' | 'VALIDATING' | 'SUCCESS' | 'ERROR';
  