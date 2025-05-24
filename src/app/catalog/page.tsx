import ProductList from '@/components/products/ProductList';

export const metadata = {
  title: 'Katalog Produk - RenCart',
  description: 'Jelajahi berbagai produk kustom kami: kaos sablon, akrilik, merchandise, dan lainnya.',
};

export default function CatalogPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Katalog Produk Kami</h1>
        <p className="text-lg text-muted-foreground">
          Temukan berbagai pilihan produk kustom untuk kebutuhan Anda.
        </p>
      </section>
      
      <ProductList />
    </div>
  );
}
