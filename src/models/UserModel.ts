import type { Address } from "./AddressModel";

export interface UserModel {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  email: string;
  name: string;
  phone?: string;
  address?: Address;
  role: "CUSTOMER" | "SALE" | "ADMIN";
}
