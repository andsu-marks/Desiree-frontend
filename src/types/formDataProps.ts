export enum Role {
  employee = 'employee',
  admin = 'admin'
}

export interface formDataProps {
  name: string;
  role: Role;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
}