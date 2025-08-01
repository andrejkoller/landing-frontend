export interface Account {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  isEmailVerified: boolean;
  lastLoginAt?: Date;
  profilePictureUrl?: string;
  roles: ("user" | "admin")[];
  preferences?: {
    theme: "light" | "dark" | "system";
    language: string;
  };
}
