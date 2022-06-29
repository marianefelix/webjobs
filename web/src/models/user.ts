export interface User {
  companyName: string;
  logoUrl: string;
  email: string;
  password: string;
}

export type UserCredentials = Omit<User, 'companyName' | 'logoUrl'>;
