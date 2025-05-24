import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ProductCard from '@/components/products/ProductCard';
import { products, categories } from '@/data/products';
import { ArrowRight, Zap } from 'lucide-react';

export default function HomePage() {
  const featuredProducts = products.slice(0, 3); // Show first 3 products as featured

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[calc(70vh-80px)] min-h-[400px] max-h-[600px] w-full flex items-center justify-center text-center rounded-xl overflow-hidden shadow-2xl">
        <Image
          src="https://placehold.co/1920x800.png"
          alt="Banner RenCart"
          layout="fill"
          objectFit="cover"
          priority
          className="brightness-50"
          data-ai-hint="craft workshop"
        />
        <div className="relative z-10 p-6 space-y-6 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-background">
            RenCart
          </h1>
          <p className="text-xl sm:text-2xl text-background/90">
            Kreasi Kustom, Unik Milikmu.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 rounded-lg shadow-md transition-transform hover:scale-105">
            <Link href="/catalog">
              Lihat Katalog
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
            <Zap className="h-8 w-8 text-accent" /> Produk Unggulan
          </h2>
          <p className="text-lg text-muted-foreground">Pilihan terbaik dari koleksi kami.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-6">
          <Button asChild variant="outline" size="lg">
            <Link href="/catalog">
              Lihat Semua Produk
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-2">Kategori Kami</h2>
          <p className="text-lg text-muted-foreground">Jelajahi produk berdasarkan kategori.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category} href={`/catalog?category=${category}`}>
              <Card className="hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden group">
                <CardHeader className="p-0 relative aspect-video">
                   <Image 
                    src={`https://placehold.co/400x225.png?text=${category}`} 
                    alt={category} 
                    layout="fill" 
                    objectFit="cover"
                    data-ai-hint={`${category.toLowerCase()} products`}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                   <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
                </CardHeader>
                <CardContent className="p-4 text-center">
                  <CardTitle className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                    {category}
                  </CardTitle>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-secondary py-12 rounded-lg shadow-md">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h2 className="text-3xl font-bold text-primary">Punya Ide Kustom Sendiri?</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Jangan ragu untuk menghubungi kami. Tim RenCart siap membantu mewujudkan desain impian Anda menjadi produk nyata berkualitas.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 rounded-lg shadow-md transition-transform hover:scale-105">
            <Link href="/contact">
              Hubungi Kami Sekarang
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
