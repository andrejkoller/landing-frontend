import { PublicUser } from "./PublicUser";

export interface LoginResponse {
  user: PublicUser;
  token: string;
}
