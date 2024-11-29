export enum Role {
  employee = 'employee',
  admin = 'admin'
}

export interface EmployeesProps {
  id: string
  name: string;
  role: Role;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export type EmployeesFormDataProps = Omit<EmployeesProps, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>