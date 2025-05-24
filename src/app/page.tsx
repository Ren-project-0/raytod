
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import ArtCard from '@/components/gallery/ArtCard';
import { galleryItems } from '@/data/gallery';
import { ArrowRight, Palette, Edit3, Sparkles, CheckCircle, Users } from 'lucide-react'; 

export default function HomePage() {
  const featuredArtworks = galleryItems.slice(0, 4); 

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[calc(70vh-80px)] min-h-[450px] max-h-[650px] w-full flex items-center justify-center text-center rounded-xl overflow-hidden shadow-2xl">
        <Image
          src="https://placehold.co/1920x800.png"
          alt="Banner Ren Project Studio - Ilustrasi Custom"
          layout="fill"
          objectFit="cover"
          priority
          className="brightness-50"
          data-ai-hint="anime character illustration"
        />
        <div className="relative z-10 p-6 space-y-6 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-background drop-shadow-md">
            REN ART COMMISION
          </h1>
          <p className="text-xl sm:text-2xl text-background/90 drop-shadow-sm">
            Bergaya, Unik, dan Personal — Wujudkan Imajinasimu Bersama Kami!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-3 rounded-lg shadow-md transition-transform hover:scale-105">
              <Link href="/commission-info">
                Pesan Sekarang
                <Edit3 className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-background border-background/80 hover:bg-background/10 hover:text-background font-semibold text-lg px-8 py-3 rounded-lg shadow-md transition-transform hover:scale-105">
              <Link href="/gallery">
                Lihat Galeri
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Artworks Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
            <Sparkles className="h-8 w-8 text-accent" /> Art Sample
          </h2>
          <p className="text-lg text-muted-foreground">Beberapa hasil ilustrasi terbaik dari Ren Project Studio.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredArtworks.map((art) => (
            <ArtCard key={art.id} item={art} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
            <Link href="/gallery">
              Jelajahi Semua Karya
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="space-y-8 py-12 bg-secondary rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-2">Kenapa Memilih Ren Project Studio?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Kami berdedikasi untuk memberikan karya seni digital berkualitas tinggi yang sesuai dengan visi Anda.</p>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <Card className="text-center bg-card shadow-sm">
            <CardHeader>
              <Palette className="h-12 w-12 text-accent mx-auto mb-3" />
              <CardTitle className="text-xl text-primary">Gaya Beragam</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Dari chibi, anime, hingga digital painting. Kami siap melayani berbagai preferensi gaya visual Anda.</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-card shadow-sm">
            <CardHeader>
              <CheckCircle className="h-12 w-12 text-accent mx-auto mb-3" />
              <CardTitle className="text-xl text-primary">Kualitas Terjamin</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Detail, komposisi, dan warna adalah prioritas kami untuk menghasilkan karya yang memuaskan.</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-card shadow-sm">
            <CardHeader>
              <Users className="h-12 w-12 text-accent mx-auto mb-3" />
              <CardTitle className="text-xl text-primary">Kolaborasi Mudah</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Proses diskusi dan revisi yang transparan untuk memastikan hasil akhir sesuai ekspektasi Anda.</p>
            </CardContent>
          </Card>
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="py-12 rounded-lg shadow-md bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h2 className="text-3xl font-bold">Punya Ide Ilustrasi?</h2>
          <p className="text-lg max-w-xl mx-auto text-primary-foreground/90">
            Jangan ragu untuk menghubungi kami. Tim Ren Project Studio siap membantu mewujudkan konsep dan karakter impian Anda menjadi karya seni digital yang memukau.
          </p>
          <Button asChild size="lg" className="bg-background hover:bg-background/90 text-primary font-semibold text-lg px-8 py-3 rounded-lg shadow-md transition-transform hover:scale-105 mt-4">
            <Link href="/contact">
              Hubungi Kami Sekarang
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
