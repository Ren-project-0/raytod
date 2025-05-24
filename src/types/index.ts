
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

export type ArtStyle = "Chibi" | "Anime Style" | "Digital Painting" | "Vector Art" | "Sketsa";

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  style: ArtStyle;
  imageUrl: string;
  imageHint?: string; // e.g., "chibi character", "anime portrait"
}
