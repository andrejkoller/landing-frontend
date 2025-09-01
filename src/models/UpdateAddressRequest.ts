import { Address } from "./Address";

export interface UpdateAddressRequest {
  id: string;
  address?: Address;
}
