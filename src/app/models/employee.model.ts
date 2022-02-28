export class Employee {
  id?: number;
  name?: string;
  gender?: string;
  email?: string;
  phoneNumber?: number;
  contactPreference?: string;
  dateOfBirth?: Date;
  department?: string;
  isActive?: boolean;
  photoPath?: string;
  password?:string;
  confirmPassword?:string;
  loggedUserId?: number;
}
export class LoggedUser {
  id?: number;
  name?: string;
  password?: string;
  confirmPassword?: string;
  email?: string;
  phoneNumber?: number;
  }
