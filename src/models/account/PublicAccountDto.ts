export interface PublicAccountDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePictureUrl?: string;
  roles: ("user" | "admin")[];
  preferences?: {
    theme: "light" | "dark" | "system";
    language: string;
  };
}
