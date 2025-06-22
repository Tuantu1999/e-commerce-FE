import { AVAILABLE, SOLD } from '@/utils/constant';

export interface Products {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  name: string;
  code: string;
  description?: string;
  price: number;
  imageUrl: string;
  stock: number;
  category: string;
  status: typeof SOLD | typeof AVAILABLE;
  tags?: string[];
  quantity: number;
}
