import { PublicUser } from "./PublicUser";

export interface AuthResponse {
  user: PublicUser;
  token: string;
}
