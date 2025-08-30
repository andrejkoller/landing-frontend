export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  lastLogin: Date;
  lastPasswordChange: Date;
  isEmailVerified: boolean;
  isActive: boolean;
  isNewsletterSubscribed: boolean;
}
