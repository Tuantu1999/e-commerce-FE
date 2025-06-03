import { SOLD, AVAILABLE } from "@/utils/constant";

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
  status: "SOLD" | "AVAILABLE";
  tags?: string[];
  quantity: number;
}
