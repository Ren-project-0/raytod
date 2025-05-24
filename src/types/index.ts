
export type ProductCategory = "Kaos" | "Akrilik" | "Merchandise";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  imageUrl: string;
  imageHint?: string;
}
