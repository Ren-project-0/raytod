import type { Product, ProductCategory } from '@/types';

export const categories: ProductCategory[] = ["Kaos", "Akrilik", "Merchandise"];

export const products: Product[] = [
  {
    id: "1",
    name: "Kaos Sablon Custom",
    description: "Kaos katun berkualitas tinggi dengan desain sablon kustom Anda.",
    price: 120000,
    category: "Kaos",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "custom t-shirt"
  },
  {
    id: "2",
    name: "Gantungan Kunci Akrilik",
    description: "Gantungan kunci akrilik bening dengan cetak custom dua sisi.",
    price: 25000,
    category: "Akrilik",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "acrylic keychain"
  },
  {
    id: "3",
    name: "Mug Custom Printing",
    description: "Mug keramik putih dengan cetak desain full color pilihan Anda.",
    price: 75000,
    category: "Merchandise",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "custom mug"
  },
  {
    id: "4",
    name: "Stiker Pack Custom",
    description: "Set stiker vinyl tahan air dengan berbagai desain custom.",
    price: 30000,
    category: "Merchandise",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "sticker pack"
  },
  {
    id: "5",
    name: "Plakat Akrilik Penghargaan",
    description: "Plakat akrilik elegan untuk penghargaan atau kenang-kenangan.",
    price: 150000,
    category: "Akrilik",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "acrylic plaque"
  },
  {
    id: "6",
    name: "Totebag Sablon Kustom",
    description: "Totebag bahan kanvas tebal dengan sablon desain eksklusif.",
    price: 85000,
    category: "Merchandise",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "custom totebag"
  },
  {
    id: "7",
    name: "Kaos Polos Premium",
    description: "Kaos polos berbagai warna bahan katun combed 30s.",
    price: 80000,
    category: "Kaos",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "plain t-shirt"
  },
  {
    id: "8",
    name: "Display Akrilik Produk",
    description: "Stand display akrilik untuk memajang produk Anda lebih menarik.",
    price: 110000,
    category: "Akrilik",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "acrylic display"
  },
];
