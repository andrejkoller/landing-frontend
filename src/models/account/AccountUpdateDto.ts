export interface AccountUpdateDto {
  firstName?: string;
  lastName?: string;
  email?: string;
  profilePictureUrl?: string;
  preferences?: {
    theme?: "light" | "dark" | "system";
    language?: string;
  };
}
