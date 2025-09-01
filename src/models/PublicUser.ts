import { Address } from "./Address";

export interface PublicUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  address?: Address;
  isNewsletterSubscribed?: boolean;
}
