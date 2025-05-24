
import ProductList from '@/components/products/ProductList';

export const metadata = {
  title: 'Katalog Produk Merchandise - RenArt Studio',
  description: 'Jelajahi berbagai produk merchandise kami: kaos sablon, akrilik, dan lainnya. Semua produk bisa dikustomisasi dengan ilustrasi pilihan Anda atau desain dari kami.',
};

export default function CatalogPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Katalog Produk Merchandise</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Selain jasa ilustrasi, kami juga menyediakan produk fisik berkualitas yang bisa dicetak dengan desain kustom. Sempurna untuk hadiah, koleksi, atau branding.
        </p>
         <p className="text-md text-muted-foreground mt-2 max-w-2xl mx-auto">
          Semua produk dapat menggunakan ilustrasi yang Anda pesan dari layanan commission art kami, atau desain yang sudah Anda miliki.
        </p>
      </section>
      
      <ProductList />
    </div>
  );
}
