import type { Address } from './AddressModel';
import type { Products } from './ProductModel';

export interface Order {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  userId: string;
  items: Products[];
  total: number;
  status: 'PENDING' | 'PAID' | 'DELIVERED' | 'CANCELLED';
  shippingAddress: Address;
  paymentType: 'Trans' | 'COD';
}
